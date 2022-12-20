import { Bind, Element, Event, EventEmitter, Method, Property, Watch } from '@htmlplus/element';
import SignaturePad from 'signature_pad';
import * as Helpers from '@app/helpers';
import { SignatureFromDataURLOptions, SignaturePointGroup } from './signature.types';

/**
 * TODO
 */
@Element()
export class Signature {
  /**
   * Specifies the background color.
   */
  @Property()
  backgroundColor?: string = 'rgba(0, 0, 0, 0)';

  /**
   * TODO.
   */
  @Property()
  get canvas(): HTMLCanvasElement {
    return this.$canvas;
  }

  /**
   * TODO.
   */
  @Property()
  get canRedo(): boolean {
    return this.index != this.history.length - 1;
  }

  /**
   * TODO.
   */
  @Property()
  get canUndo(): boolean {
    return this.index != -1;
  }

  /**
   * TODO.
   */
  @Property()
  clearOnResize?: boolean;

  /**
   * Specifies the color of the lines.
   */
  @Property()
  color?: string = 'black';

  /**
   * Disables the component's functionality.
   */
  @Property({ reflect: true })
  disabled?: boolean;

  /**
   * Specifies the distance between the previous point and the next one.
   */
  @Property()
  distance?: number;

  /**
   * Specifies the radius of a single dot.
   */
  @Property()
  dotSize?: number;

  /**
   * Returns `true` if canvas is empty.
   */
  @Property()
  get isEmpty(): boolean {
    return this.instance?.isEmpty();
  }

  /**
   * Specifies the maximum width of the lines.
   */
  @Property()
  maxWidth?: number = 2.5;

  /**
   * Specifies the minimum width of the lines.
   */
  @Property()
  minWidth?: number = 0.5;

  /**
   * TODO.
   */
  @Property()
  resizable?: boolean;

  /**
   * Specifies the time distance between the previous point and the next one.
   */
  @Property()
  throttle?: number = 16;

  /**
   * Specifies the velocity based on the previous velocity.
   */
  @Property()
  velocity?: number = 0.7;

  /**
   * Fires after updating the stroke.
   */
  @Event()
  plusAfter!: EventEmitter<PointerEvent>;

  /**
   * Fires before updating the stroke.
   */
  @Event()
  plusBefore!: EventEmitter<PointerEvent>;

  /**
   * Fires after a stroke ends.
   */
  @Event()
  plusEnd!: EventEmitter<PointerEvent>;

  /**
   * Fires before a stroke starts.
   */
  @Event()
  plusStart!: EventEmitter<PointerEvent>;

  $canvas!: HTMLCanvasElement;

  get $host() {
    return Helpers.host(this);
  }

  instance?: SignaturePad;

  history: SignaturePointGroup[][] = [];

  index: number = -1;

  observer: ResizeObserver = new ResizeObserver(this.onResize);

  /**
   * Clears the canvas.
   */
  @Method()
  clear() {
    this.index = -1;
    this.history = [];
    this.instance.clear();
  }

  /**
   * Draws from the data.
   * @param data TODO
   * @param clear TODO
   */
  @Method()
  fromData(data: SignaturePointGroup[], clear?: boolean) {
    if (clear) this.clear();
    this.instance.fromData(data);
  }

  /**
   * Draws from the data URL. [More](https://mdn.io/drawImage).
   * @param dataUrl TODO
   * @param options TODO
   */
  @Method()
  async fromDataURL(dataUrl: string, options?: SignatureFromDataURLOptions) {
    await this.instance.fromDataURL(dataUrl, options);
  }

  /**
   * Returns data of the canvas.
   */
  @Method()
  toData(): SignaturePointGroup[] {
    return JSON.parse(JSON.stringify(this.instance.toData()));
  }

  /**
   * Returns an SVG as a string.
   * @param includeBackgroundColor Adds the background color to the SVG output.
   */
  @Method()
  toSVG(includeBackgroundColor?: boolean): string {
    return this.instance.toSVG({ includeBackgroundColor });
  }

  /**
   * Reverts the last undo action.
   */
  @Method()
  redo() {
    if (!this.canRedo) return;

    this.index++;

    const data = this.history[this.index] || [];

    this.instance.fromData(data);
  }

  /**
   * TODO
   */
  @Method()
  resize() {
    const style = getComputedStyle(this.$host);

    const width = parseFloat(style.width);

    const height = parseFloat(style.height);

    const rw = width / this.$canvas.width;
    const rh = height / this.$canvas.height;

    this.$canvas.width = width;

    this.$canvas.height = height;

    if (!this.instance) return;

    if (this.clearOnResize) return this.clear();

    // this.$canvas.getContext("2d").scale(1.2, 1.2);

    const a = this.toData()

    this.fromData(a);
  }

  /**
   * Reverts the last action.
   */
  @Method()
  undo() {
    if (!this.canUndo) return;

    this.index--;

    const data = this.history[this.index] || [];

    this.instance.fromData(data);
  }

  @Watch([], true)
  watcher(next, prev, name) {
    switch (name) {
      case 'color':
        this.instance.penColor = next;
        break;
      case 'disabled':
        if (next) {
          this.instance.off();
        } else {
          this.instance.on();
        }
        break;
      case 'distance':
        this.instance.minDistance = next;
        break;
      case 'velocity':
        this.instance.velocityFilterWeight = next;
        break;
      case 'backgroundColor':
      case 'dotSize':
      case 'maxWidth':
      case 'minWidth':
      case 'throttle':
        this.instance[name] = next;
        break;
      case 'resizable':
        if (next) {
          this.observer.observe(this.$host);
        } else {
          this.observer.unobserve(this.$host);
        }
        break;
    }

    // TODO
    this.fromData(this.toData());
  }

  loadedCallback() {
    this.resize();

    this.instance = new SignaturePad(this.$canvas);

    this.instance.addEventListener('endStroke', this.onEnd);

    const events = {
      afterUpdateStroke: this.plusAfter,
      beforeUpdateStroke: this.plusBefore,
      beginStroke: this.plusStart,
      endStroke: this.plusEnd,
    };

    for (const key in events) {
      if (!events.hasOwnProperty(key)) continue;
      this.instance.addEventListener(key, (event) => {
        events[key](event['detail']);
      });
    }
  }

  @Bind()
  onEnd() {
    this.index++;

    this.history[this.index] = this.toData();

    this.history.length = this.index + 1;
  }

  @Bind()
  onResize() {
    // this.resize();
  }

  disconnectedCallback() {
    this.instance.off();
    this.observer.disconnect();
  }

  render() {
    return (
      <canvas ref={($element) => this.$canvas = $element}></canvas>
    )
  }
}
