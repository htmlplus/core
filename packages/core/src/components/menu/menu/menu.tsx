import {Component, Element, Event, EventEmitter, Host, Prop, State, h} from '@stencil/core';
import {RectObserver, Bind, ClickOutside, GlobalState} from '@app/utils';
import {MenuAlignX, MenuAlignY, MenuGrowX, MenuGrowY, MenuTrigger, MenuGlobalState} from './menu.types';
import {createPopper} from '@popperjs/core';
import {MenuLink, Link, rebind} from './menu.link';

/**
 * TODO
 * @internal
 */
@Component({
  tag: 'plus-menu',
  styleUrl: './menu.scss',
  shadow: true
})
export class Menu {

  /**
   * TODO
   */
  @Prop()
  alignX?: MenuAlignX = 'start';

  /**
   * TODO
   */
  @Prop()
  alignY?: MenuAlignY = 'bottom';

  /**
   * TODO
   */
  @Prop()
  fixed?: boolean;

  /**
   * TODO
   */
  @Prop()
  growX?: MenuGrowX = 'auto';

  /**
   * TODO
   */
  @Prop()
  growY?: MenuGrowY = 'auto';

  /**
   * TODO
   */
  @Prop()
  offsetX?: string | number;

  /**
   * TODO
   */
  @Prop()
  offsetY?: string | number;

  /**
   * TODO
   */
  @Prop({reflect: true})
  open?: boolean;

  /**
   * TODO
   */
  @Prop()
  persistent?: boolean;

  /**
   * TODO
   */
  @Prop()
  trigger?: MenuTrigger = 'right-click';

  /**
   * TODO
   */
  @Event({
    bubbles: false,
    cancelable: true
  })
  plusClose!: EventEmitter<void>;

  @State()
  x?: string;

  y?: string;

  @State()
  instance;
  virtualElement = {getBoundingClientRect: this.generateGetBoundingClientRect()};

  @GlobalState()
  state: MenuGlobalState = {
    instances: []
  }

  @Element()
  $host!: HTMLElement;

  $content!: HTMLDivElement;

  $parent: HTMLElement = this.$host.parentElement;

  observer?: RectObserver;

  isOpen?: boolean;

  @Link({scope: '[connector]'})
  link: MenuLink = {
    // toggle: () => this.toggle()
  }

  get reverse() {
    return getComputedStyle(this.$host).getPropertyValue('direction') === 'rtl';
  }

  get eventTrigger() {
    switch (this.trigger) {
      case 'right-click':
        return 'contextmenu';
      case 'left-click':
        return 'click';
      default:
        console.log(new Error());
    }
  }

  get zIndex() {

    if (this.state.instances.length < 1) return;

    const [instance] = this.state.instances.slice(-2);

    if (!instance) return;

    const zIndex = getComputedStyle(instance.$host).getPropertyValue('z-index');

    return `${parseInt(zIndex) + 1}`;
  }

  bind() {
    ClickOutside.add(this.$host, this.hide)
    this.$host.addEventListener(this.eventTrigger, this.show)
  }

  unbind() {
    ClickOutside.remove(this.$host)
    document.removeEventListener(this.eventTrigger, this.show)
  }

  @Bind
  startPopper() {
    this.instance = createPopper(this.virtualElement, this.$content);
  }

  @Bind
  show(ev) {
    console.log("inside")
    this.isOpen = true;
    this.virtualElement.getBoundingClientRect = this.generateGetBoundingClientRect(ev.clientX, ev.clientY);
    this.$content.setAttribute('data-show', '');
    this.instance.setOptions({modifiers: [{name: 'eventListeners', enabled: true}]});
    this.instance.update();
    this.$content.style.zIndex = this.zIndex;
  }

  @Bind
  hide() {
    console.log("outside")
    this.isOpen = false;
    this.$content.removeAttribute('data-show');
    this.instance.setOptions({modifiers: [{name: 'eventListeners', enabled: false}]});
    this.instance.update();
    this.$content.style.zIndex = null;
  }

  generateGetBoundingClientRect(x = 0, y = 0) {
    return () => ({width: 0, height: 0, top: y, right: x, bottom: y, left: x,});
  }

  // toggle() {
  //   this.isOpen ? this.hide() : this.show();
  // }

  componentDidLoad() {
    this.startPopper();
    this.bind();
  }

  disconnectedCallback() {
  }

  render() {
    return (
      <Host oncontextmenu="return false;">
        <div ref={(element) => this.$content = element} class="menu-content">
          <slot name="content"/>
        </div>
        <slot/>
      </Host>
    );
  }
}
