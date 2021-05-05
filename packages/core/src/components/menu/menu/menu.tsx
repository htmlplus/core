import {Component, Element, Event, Host, Prop, State, h} from '@stencil/core';
import {RectObserver, Bind, ClickOutside, GlobalState} from '@app/utils';
import {MenuTrigger, MenuGlobalState} from './menu.types';
import {createPopper} from '@popperjs/core';

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
   * Type of event for show menu
   */
  @Prop()
  trigger?: MenuTrigger = 'right-click';

  /**
   * Disable show menu
   */
  @Prop()
  disabled?: boolean;


  @Event({
    bubbles: false,
    cancelable: true
  })

  @State()
  x?: string;

  y?: string;

  instance;

  virtualElement = {getBoundingClientRect: this.generateGetBoundingClientRect()};


  @GlobalState()
  state: MenuGlobalState = {
    instances: []
  }

  @Element()
  $host!: HTMLElement;

  $content!: HTMLDivElement;

  $parent = this.$host.parentElement as HTMLElement;

  observer?: RectObserver;

  isOpen?: boolean;

  isCreated?: boolean;

  get reverse() {
    return getComputedStyle(this.$host).getPropertyValue('direction') === 'rtl';
  }

  get eventsName() {

    const events = {
      hide: [],
      show: [],
    }

    const triggers = [this.trigger].flat(1);

    const mapper = {
      'right-click': ['contextmenu', 'click'],
      'left-click': ['click', 'contextmenu'],
      'hover': ['mouseenter', 'mouseleave'],
    }

    Object.keys(mapper)
      .filter((key) => triggers.includes(key as any))
      .map((key) => {
        const [show, hide] = mapper[key];
        events.show.push(show);
        events.hide.push(hide);
      });

    return events;
  }

  get isExist() {
    return this.state.instances.findIndex(instance => instance === this) >= 0;
  }

  get isParent() {
    return this.state.instances.length <= 1;
  }

  get options(): object {
    const placement = this.isParent ? 'right-end' : 'auto';
    return {
      placement: placement
    }
  }

  get target() {
    if (this.state.instances.length < 1) return this.virtualElement;

    return this.state.instances[this.state.instances.length - 1]?.$content;
  }

  get zIndex() {

    if (this.state.instances.length < 1) return;

    const [instance] = this.state.instances.slice(-2);

    if (!instance) return;

    const zIndex = getComputedStyle(instance.$content).getPropertyValue('z-index');

    return `${parseInt(zIndex) + 1}`;
  }

  bind() {
    ClickOutside.add(this.$host, this.hide)
    this.eventsName.show.map((eventName) => this.$host.addEventListener(eventName, this.show));
    this.eventsName.hide.map((eventName) => this.$parent.addEventListener(eventName, this.hide));
  }

  unbind() {
    ClickOutside.remove(this.$host)
    this.eventsName.show.map((eventName) => this.$host.removeEventListener(eventName, this.show));
    this.eventsName.hide.map((eventName) => this.$parent.removeEventListener(eventName, this.hide));
  }

  @Bind
  show(ev) {
    if (!this.isCreated) {
      this.instance = createPopper(this.target, this.$content, this.options);
      this.isCreated = true;
    }

    this.isOpen = true;

    this.$content.setAttribute('data-show', '');

    if (this.isParent) {
      this.virtualElement.getBoundingClientRect = this.generateGetBoundingClientRect(ev.clientX, ev.clientY);
      this.instance.setOptions({modifiers: [{name: 'eventListeners', enabled: true}]});
    }

    this.instance.update();

    if (!this.isExist)
      this.state.instances.push(this);

    this.$content.style.zIndex = this.zIndex;
  }

  @Bind
  hide() {
    this.isOpen = false;

    this.$content.removeAttribute('data-show');

    if (this.isParent) {
      this.instance.setOptions({modifiers: [{name: 'eventListeners', enabled: false}]});
      this.instance.update();
    }

    this.state.instances = this.state.instances.filter((instance) => instance !== this);

    this.$content.style.zIndex = null;
  }

  generateGetBoundingClientRect(x = 0, y = 0) {
    return () => ({width: 0, height: 0, top: y, right: x, bottom: y, left: x,});
  }

  componentDidLoad() {
    if (this.disabled) return;
    this.bind();
  }

  disconnectedCallback() {
    this.unbind();
    this.instance.destroy();
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
