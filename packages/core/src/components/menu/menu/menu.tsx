import {Component, Element, Event, EventEmitter, Host, Prop, State, h} from '@stencil/core';
import {Bind, RectObserver, ClickOutside} from '@app/services';
import {MenuAlignX, MenuAlignY, MenuGrowX, MenuGrowY, MenuTrigger} from './menu.types';
import {createPopper} from '@popperjs/core';

/**
 * TODO
 * @internal
 */
@Component({
  tag: 'plus-menu',
  styleUrl: '../menu.scss',
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

  @State()
  y?: string;

  @State()
  instance;
  virtualElement = {getBoundingClientRect: this.generateGetBoundingClientRect()};

  @Element()
  $host!: HTMLElement;

  $slot!: HTMLElement;

  $activator!: HTMLElement;

  $content!: HTMLElement;

  $parent: HTMLElement = this.$host.parentElement;

  observer?: RectObserver;

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

  bind() {
    ClickOutside.add(this.$host, this.hide)
    document.addEventListener(this.eventTrigger, this.show)
  }

  unbind() {
    ClickOutside.remove(this.$host)
    document.removeEventListener(this.eventTrigger, this.show)
  }

  startPopper() {
    this.instance = createPopper(this.$parent, this.$host);
  }

  @Bind
  show(ev) {
    // let target = ev.target;
    //
    // console.log("target", target)
    // do {
    //   if (target == this.$parent) {
    console.log("inside")
    this.virtualElement.getBoundingClientRect= this.generateGetBoundingClientRect(ev.clientX, ev.clientY);
    this.$host.setAttribute('data-show', '');
    this.instance.setOptions({modifiers: [{name: 'eventListeners', enabled: true}]});
    this.instance.update();
    //     console.log("inside")
    //     return;
    //   }
    //   target = target.preventNode;
    // } while (target);

    // console.log("outside")
    // this.hide();
  }

  @Bind
  hide() {
    console.log("outside")
    this.$host.removeAttribute('data-show');
    this.instance.setOptions({modifiers: [{name: 'eventListeners', enabled: false}]});
    this.instance.update();
  }

  generateGetBoundingClientRect(x = 0, y = 0) {
    return () => ({width: 0, height: 0, top: y, right: x, bottom: y, left: x,});
  }

  connectedCallback() {
    console.log("parent", this.$slot)
    console.log("$content", this.$content)
    this.startPopper();
    this.bind();
  }

  disconnectedCallback() {
  }

  render() {
    return (
      <Host>
        <slot name="content"/>
        <slot/>
      </Host>
    );
  }
}
