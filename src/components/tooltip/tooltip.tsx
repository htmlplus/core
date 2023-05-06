import {
  Bind,
  Element,
  Method,
  Property,
  Watch,
  State,
  host,
  isRTL,
  query,
  off,
  on
} from '@htmlplus/element';

import type * as FloatingCoreType from '@floating-ui/dom';

import {
  TooltipDelay,
  TooltipOffset,
  TooltipPlacement,
  TooltipReference,
  TooltipTrigger
} from './tooltip.types';

let FloatingCore: typeof FloatingCoreType;

/**
 * @dependencies @floating-ui/dom
 * @thirdParty
 */
@Element()
export class Tooltip {
  /**
   * Specifies whether to display the arrow or not.
   */
  @Property({ reflect: true })
  arrow?: boolean;

  /**
   * Specifies a delay in milliseconds for show or hide.
   * Use a number for both show and hide or
   * create an array of two separate numbers for show and hide.
   */
  @Property()
  delay?: TooltipDelay;

  /**
   * Disables the component functionality.
   */
  @Property({ reflect: true })
  disabled?: boolean;

  /**
   * TODO
   */
  @Property({ reflect: true })
  fixed?: boolean;

  /**
   * TODO
   */
  @Property()
  offset?: TooltipOffset = [0, 10];

  /**
   * Specifies the display location of the component relative to the reference.
   */
  @Property()
  placement?: TooltipPlacement;

  /**
   * Specifies the element to which the tooltip will be attached.
   * Use `next` to attach to the next sibling.
   * Use `parent` to attach to the parent.
   * Use `previous` to attach to the previous sibling.
   * Use a string to find an element to attach to that.
   * Use an element to attach to that.
   */
  @Property()
  reference?: TooltipReference = 'previous';

  /**
   * Specifies the activation method.
   */
  @Property()
  trigger?: TooltipTrigger = ['focus', 'hover'];

  /**
   * TODO
   */
  @Property()
  z?: 'auto' | 'vertical' | 'horizontal' | 'move' = 'auto';

  @State()
  state?: 'hide' | 'show' = 'hide';

  $activator?: Element;

  cleanup?: Function;

  timeout?: NodeJS.Timeout;

  get options() {
    const PLACEMENT = {
      'top': 'top',
      'top-left': isRTL(this) ? 'top-end' : 'top-start',
      'top-right': isRTL(this) ? 'top-start' : 'top-end',
      'top-start': 'top-start',
      'top-end': 'top-end',
      'right': 'right',
      'right-top': 'right-start',
      'right-bottom': 'right-end',
      'bottom': 'bottom',
      'bottom-left': isRTL(this) ? 'bottom-end' : 'bottom-start',
      'bottom-right': isRTL(this) ? 'bottom-start' : 'bottom-end',
      'bottom-start': 'bottom-start',
      'bottom-end': 'bottom-end',
      'left': 'left',
      'left-top': 'left-start',
      'left-bottom': 'left-end',
      'start': isRTL(this) ? 'right' : 'left',
      'start-top': isRTL(this) ? 'right-start' : 'left-start',
      'start-bottom': isRTL(this) ? 'right-end' : 'left-end',
      'end': isRTL(this) ? 'left' : 'right',
      'end-top': isRTL(this) ? 'left-start' : 'right-start',
      'end-bottom': isRTL(this) ? 'left-end' : 'right-end'
    };

    const padding = [this.offset].flat();

    return {
      middleware: [
        FloatingCore.offset({ crossAxis: padding[0] || 0, mainAxis: padding[1] || 0 }),
        FloatingCore.flip(),
        this.arrow && FloatingCore.arrow({ element: this.$arrow })
        // FloatingCore.hide()
      ],
      placement: PLACEMENT[this.placement],
      strategy: this.fixed ? 'fixed' : 'absolute'
    } as Partial<FloatingCoreType.ComputePositionConfig>;
  }

  get $arrow() {
    return query(this, '[part=arrow]') as HTMLDivElement;
  }

  get $host() {
    return host(this);
  }

  get $reference() {
    if (typeof this.reference != 'string') return this.reference;

    switch (this.reference) {
      case 'next':
        return this.$host.nextElementSibling;
      case 'parent':
        return this.$host.parentElement;
      case 'previous':
        return this.$host.previousElementSibling;
    }

    return document.querySelector(this.reference);
  }

  /**
   * Hides the component.
   */
  @Method()
  hide() {
    if (this.state == 'hide') return;

    clearTimeout(this.timeout);

    const delay = this.delay?.[1] || this.delay || 0;

    this.timeout = setTimeout(() => {
      this.state = 'hide';
      this.observe(false);
    }, delay);
  }

  /**
   * Shows the component.
   */
  @Method()
  show() {
    if (this.state == 'show') return;

    clearTimeout(this.timeout);

    const delay = this.delay?.[0] || this.delay || 0;

    this.timeout = setTimeout(() => {
      this.state = 'show';
      this.observe(true);
    }, delay);
  }

  /**
   * Updates the component's position.
   */
  @Method()
  update() {
    this.$host.removeAttribute('placement-computed');

    FloatingCore.computePosition(this.$activator, this.$host, this.options).then((data) => {
      const { x, y, placement, middlewareData } = data;

      // console.log(1, middlewareData.hide);

      this.$host.setAttribute('placement-computed', placement);

      Object.assign(this.$host.style, {
        left: `${x}px`,
        top: `${y}px`
      });

      if (!this.arrow) return;

      const { x: arrowX, y: arrowY } = middlewareData.arrow;

      Object.assign(this.$arrow.style, {
        left: arrowX == null ? '' : `${arrowX}px`,
        top: arrowY == null ? '' : `${arrowY}px`
      });
    });
  }

  bind() {
    // TODO
    if (this.disabled) return;

    // TODO
    this.$activator = this.$reference;

    clearTimeout(this.timeout);

    if (!this.$activator) return;

    this.events(false).forEach(([type, handler]) => {
      on(this.$activator, type, handler);
    });

    // TODO
    // this.state = 'show';
    // this.observe(true);
    // this.$activator.addEventListener('mousemove', (event: any) => {
    //   const virtualEl = {
    //     getBoundingClientRect() {
    //       return {
    //         width: 0,
    //         height: 0,
    //         x: event.clientX,
    //         y: event.clientY,
    //         left: event.clientX,
    //         right: event.clientX,
    //         top: event.clientY,
    //         bottom: event.clientY
    //       };
    //     }
    //   };
    //   FloatingCore.computePosition(virtualEl, this.$host, this.options).then(({ x, y }) => {
    //     Object.assign(this.$host.style, {
    //       top: `${y}px`,
    //       left: `${x}px`
    //     });
    //   });
    // });
  }

  unbind() {
    clearTimeout(this.timeout);

    if (!this.$activator) return;

    this.events(true).forEach(([type, handler]) => {
      off(this.$activator, type, handler);
    });
  }

  events(all: boolean) {
    return [
      ['click', 'click', this.onShow],
      ['click', 'blur', this.onHide],
      ['click', 'outside', this.onHide],
      ['focus', 'focus', this.onShow],
      ['focus', 'blur', this.onHide],
      ['hover', 'mouseenter', this.onShow],
      ['hover', 'mouseleave', this.onHide]
    ]
      .filter((row: any) => all || [this.trigger].flat().includes(row[0]))
      .map((row: any) => row.slice(1));
  }

  observe(active: boolean) {
    this.cleanup?.();

    if (!active) return;

    this.cleanup = FloatingCore.autoUpdate(this.$activator, this.$host, this.update.bind(this));
  }

  @Watch()
  watcher(next, prev, key) {
    switch (key) {
      case 'disabled':
        next ? this.unbind() : this.bind();
        break;

      case 'fixed':
      case 'offset':
      case 'placement':
        if (this.state == 'hide') break;
        this.update();
        break;

      case 'reference':
      case 'trigger':
        this.unbind();
        this.bind();
        break;
    }
  }

  @Bind()
  onHide() {
    this.hide();
  }

  @Bind()
  onShow() {
    this.show();
  }

  async connectCallback() {
    try {
      FloatingCore = await import('@floating-ui/dom');
    } catch {
      throw new Error(
        "The `tooltip` component depends on an external package, but it doesn't seem to be installed. Running `npm install @floating-ui/dom` will fix this problem."
      );
    }
  }

  connectedCallback() {
    this.bind();
  }

  disconnectedCallback() {
    this.unbind();
  }

  render() {
    return (
      <host role="tooltip" state={this.state}>
        <slot />
        <div part="arrow"></div>
      </host>
    );
  }
}
