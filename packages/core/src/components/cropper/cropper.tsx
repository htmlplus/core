import { Component, Element, Event, EventEmitter, Host, Method, Prop, h } from '@stencil/core';
import CropperCore from 'cropperjs';
import * as Utils from '@app/utils';
import { Bind, GlobalConfig } from '@app/services';
import {
  CropperAspectRatio,
  CropperValue,
  CropperMode,
  CropperResizer,
  CropperResizerShape,
  CropperResponsive,
  CropperView,
  CropperViewport,
  CropperViewportShape,
  CropperZoomable,
  CropperZoomData,
} from './cropper.types';

/**
 * TODO https://foliotek.github.io/Croppie/
 * @development
 * @examples default, aspect-ratio, backdrop, background, guides, indicator, mode, viewport, viewport-shape
 */
@Component({
  tag: 'plus-cropper',
  styleUrl: 'cropper.scss',
  shadow: true
})
export class Cropper {

  /**
   * Define the fixed aspect ratio of the viewport. By default, the viewport is free ratio.
   */
  @Prop()
  aspectRatio?: CropperAspectRatio;

  /**
   * Show the black layer above the image and under the viewport.
   */
  @Prop()
  backdrop?: boolean = true;

  /**
   * Show the grid background of the container.
   */
  @Prop()
  background?: boolean;

  /**
   * TODO
   */
  @Prop()
  disabled?: boolean;

  /**
   * Show the dashed lines above the viewport.
   */
  @Prop()
  guides?: boolean;

  /**
   * Show the center indicator above the viewport.
   */
  @Prop()
  indicator?: boolean;

  /**
   * Define the dragging mode of the cropper.
   * @value crop - create a new viewport.
   * @value move - move the canvas.
   * @value none - do nothing.
   */
  @Prop()
  mode?: CropperMode = 'move';

  /**
   * TODO
   * @value main - TODO
   * @value edge - TODO
   * @value both - TODO
   */
  @Prop()
  resizer?: CropperResizer = 'both';

  /**
   * TODO
   * @value rect  - TODO
   * @value round - TODO
   * @value line  - TODO
   */
  @Prop()
  resizerShape?: CropperResizerShape = 'rect';

  /**
   * Re-render the cropper when resizing the window.
   * @value false - TODO
   * @value true  - TODO
   * @value reset - TODO
   */
  @Prop()
  responsive?: CropperResponsive = 'reset';

  /**
   * Image source.
   */
  @Prop()
  src?: string;

  /**
   * TODO
   */
  @Prop({ mutable: true })
  value?: CropperValue;

  /**
   * Define the view mode of the cropper. If you set viewMode to `none`, the viewport can extend 
   * outside the canvas, while a value of `fit`, `contain` or `cover` will restrict the viewport 
   * to the size of the canvas. A viewMode of `contain` or `cover` will additionally restrict the 
   * canvas to the container. Note that if the proportions of the canvas and the container are 
   * the same, there is no difference between `contain` and `cover`.
   * @value contain - restrict the minimum canvas size to fit within the container. If the 
   *                  proportions of the canvas and the container differ, the minimum canvas will be 
   *                  surrounded by extra space in one of the dimensions.
   * @value cover   - restrict the minimum canvas size to fill fit the container. If the proportions 
   *                  of the canvas and the container are different, the container will not be able 
   *                  to fit the whole canvas in one of the dimensions.
   * @value fit     - restrict the viewport to not exceed the size of the canvas.
   * @value none    - no restrictions.
   */
  @Prop()
  view?: CropperView = 'cover';

  /**
   * TODO
   * @value static    - TODO
   * @value movable   - TODO
   * @value resizable - TODO
   * @value both      - TODO
   */
  @Prop()
  viewport?: CropperViewport = 'static';

  /**
   * TODO 'square' 'circle'
   * @value rect  - TODO
   * @value round - TODO
   */
  @Prop()
  viewportShape?: CropperViewportShape = 'rect';

  /**
   * Enable to zoom the image.
   * @value false - Disable zoom.
   * @value true  - Enable to zoom the image by dragging touch and wheeling mouse.
   * @value touch - Enable to zoom the image by dragging touch.
   * @value wheel - Enable to zoom the image by wheeling mouse.
   * @
   */
  @Prop()
  zoomable?: CropperZoomable = true;

  /**
   * Define zoom ratio when zooming the image by wheeling mouse.
   */
  @Prop()
  zoomRatio?: number = 0.1;

  /**
   * This event fires when the target image has been loaded and the cropper instance is ready for operating.
   */
  @Event({
    bubbles: false,
    cancelable: false,
  })
  plusReady!: EventEmitter<void>;

  /**
   * This event fires when the canvas (image wrapper) or the viewport changed.
   */
  @Event({
    bubbles: false,
    cancelable: false,
  })
  plusCrop!: EventEmitter<void>;

  /**
   * This event fires when a cropper instance starts to zoom in or zoom out its canvas (image wrapper).
   */
  @Event({
    bubbles: false,
    cancelable: true,
  })
  plusZoom!: EventEmitter<CropperZoomData>;

  @GlobalConfig('crop', {
    backdrop: true,
    mode: 'move',
    resizer: 'both',
    resizerShape: 'rect',
    responsive: 'reset',
    view: 'cover',
    viewport: 'static',
    viewportShape: 'rect',
    zoomable: true,
    zoomRatio: 0.1,
  })
  config?;

  @Element()
  $host!: HTMLElement;

  $image!: HTMLImageElement;

  instance?: CropperCore;

  // TODO
  lock: boolean = false;

  get classes() {
    return Utils.classes(
      'wrapper',
      {
        viewportShape: this.viewportShape,
        resizer: this.resizer,
        resizerShape: this.resizerShape
      }
    )
  }

  get options() {

    const aspectRatio = (() => {

      if (typeof this.aspectRatio === 'undefined') return NaN;

      if (typeof this.aspectRatio === 'string') {

        const [valueA, valueB] = this.aspectRatio.split('/').map((item) => parseFloat(item));

        const value = valueA / (valueB || 1);

        return value;
      }

      return this.aspectRatio ?? NaN;
    })();

    const responsive = (() => {

      if (this.responsive === 'reset') return this.responsive;

      return Utils.toBoolean(this.responsive);
    })();

    const view = (() => ({ none: 0, fit: 1, contain: 2, cover: 3 })[this.view] as any)();

    const zoomable = (() => {

      const value = `${this.zoomable}`;

      if (['touch', 'wheel'].includes(value)) return value;

      return Utils.toBoolean(this.zoomable);
    })();

    return {
      // TODO
      // autoCrop        : true,
      // autoCropArea    : this.autoCropArea,
      // checkCrossOrigin: true,
      // checkOrientation: true,
      // minCanvasWidth  : this.canvasMinWidth,
      // minCanvasHeight : this.canvasMinHeight,
      // minCropBoxWidth : this.viewportMinWidth,
      // minCropBoxHeight: this.viewportMinHeight,
      // preview         : HTMLElement | HTMLElement[] | NodeListOf<HTMLElement> | string,
      // cropstart       : (e) => console.log('cropstart', e),
      // cropmove        : (e) => console.log('cropmove', e),
      // cropend         : (e) => console.log('cropend', e),
      aspectRatio: Utils.toBoolean(this.viewportShape === 'round') ? 1 : aspectRatio,
      background: Utils.toBoolean(this.background),
      center: Utils.toBoolean(this.indicator),
      cropBoxMovable: this.viewport === 'movable' || this.viewport === 'both',
      cropBoxResizable: this.viewport === 'resizable' || this.viewport === 'both',
      data: this.value,
      dragMode: this.mode,
      guides: Utils.toBoolean(this.guides),
      highlight: false,
      initialAspectRatio: NaN,
      minContainerWidth: 0,
      minContainerHeight: 0,
      modal: Utils.toBoolean(this.backdrop),
      movable: true, // TODO: make auto
      responsive: !!responsive,
      restore: responsive === 'reset',
      rotatable: true,
      scalable: true,
      toggleDragModeOnDblclick: false,
      viewMode: view,
      wheelZoomRatio: this.zoomRatio,
      zoomable: !!zoomable,
      zoomOnTouch: zoomable === true || zoomable === 'touch',
      zoomOnWheel: zoomable === true || zoomable === 'wheel',
      cropend: this.onCrop,
      ready: this.onReady,
      zoom: this.onZoom
    }
  }

  /**
   * External Methods
   */

  /**
   * Flip horizontal.
   */
  @Method()
  flipX(): Promise<void> {
    this.instance?.scale(-1, 1);
    return Promise.resolve();
  }

  /**
   * Flip vertical.
   */
  @Method()
  flipY(): Promise<void> {
    this.instance?.scale(1, -1);
    return Promise.resolve();
  }

  /**
   * Move the canvas (image wrapper) with relative offsets.
   * @param offsetX - Moving size (px) in the `horizontal` direction. Use `null` to ignore this.
   * @param offsetY - Moving size (px) in the `vertical` direction. Use `null` to ignore this.
   */
  @Method()
  move(offsetX?: number, offsetY?: number): Promise<void> {
    this.instance?.move(offsetX ?? null, offsetY ?? null);
    return Promise.resolve();
  }

  /**
   * Move the canvas (image wrapper) to an absolute point.
   * @param x - The `left` value of the canvas. Use `null` to ignore this.
   * @param y - The `top` value of the canvas. Use `null` to ignore this.
   */
  @Method()
  moveTo(x?: number, y?: number): Promise<void> {
    this.instance?.moveTo(x ?? null, y ?? null);
    return Promise.resolve();
  }

  /**
   * Reset the image and viewport to their initial states.
   */
  @Method()
  reset(): Promise<void> {
    this.instance?.reset();
    return Promise.resolve();
  }

  /**
   * Rotate the image with a relative degree.
   * @param degree - TODO
   */
  @Method()
  rotate(degree: number): Promise<void> {
    this.instance?.rotate(degree);
    return Promise.resolve();
  }

  /**
   * Rotate the image to an absolute degree.
   * @param degree - TODO
   */
  @Method()
  rotateTo(degree: number): Promise<void> {
    this.instance?.rotateTo(degree);
    return Promise.resolve();
  }

  /**
   * TODO
   */
  @Method()
  toBlob(): Promise<Blob> {
    return new Promise((resolve) => {
      this.instance
        .getCroppedCanvas()
        .toBlob((blob) => resolve(blob))
    })
  }

  /**
   * TODO
   */
  @Method()
  toCanvas(): Promise<HTMLCanvasElement> {
    const canvas = this.instance.getCroppedCanvas();
    return Promise.resolve(canvas);
  }

  /**
   * TODO
   */
  @Method()
  toBase64(): Promise<string> {
    const base64 = this.instance
      .getCroppedCanvas()
      .toDataURL();
    return Promise.resolve(base64);
  }

  /**
   * TODO
   */
  @Method()
  toURL(): Promise<string> {
    return new Promise((resolve) => {
      this.instance
        .getCroppedCanvas()
        .toBlob(
          (blob) => resolve(URL.createObjectURL(blob))
        )
    })
  }

  /**
   * Zoom the canvas (image wrapper) with a relative ratio.
   * @param ratio - TODO
   */
  @Method()
  zoom(ratio: number): Promise<void> {
    this.instance?.zoom(ratio);
    return Promise.resolve();
  }

  /**
   * Zoom the canvas (image wrapper) to an absolute ratio.
   * @param ratio - TODO
   */
  @Method()
  zoomTo(ratio: number): Promise<void> {
    this.instance?.zoomTo(ratio);
    return Promise.resolve();
  }

  /**
   * Internal Methods
   */

  bind() {
    this.instance = new CropperCore(this.$image, this.options);
  }

  unbind() {
    this.instance?.destroy();
  }

  rebind() {
    this.unbind();
    this.bind();
  }

  updateValue(value?) {

    if (!this.instance) return;

    const { height, width } = this.instance?.getContainerData();

    if (value) {

      const toPixel = (a, b) => a * b / 100;

      // TODO this.instance.rotateTo(value.rotate);

      this.instance
        .setCropBoxData({
          top: toPixel(value.top, height),
          left: toPixel(value.left, width),
          width: toPixel(100 - value.right - value.left, width),
          height: toPixel(100 - value.top - value.bottom, height),
        })
        .setCanvasData({
          top: toPixel(value.y, height),
          left: toPixel(value.x, width),
          width: toPixel(value.width, width),
          height: toPixel(value.height, height),
        });

      return;
    }

    const
      canvas = this.instance.getCanvasData(),
      // TODO data = this.instance.getData(),
      viewport = this.instance.getCropBoxData();

    const toPercent = (a, b) => parseFloat((a / b * 100).toFixed(2));

    this.lock = true;

    this.value = {
      // TODO rotate: data.rotate,
      top: toPercent(viewport.top, height),
      right: toPercent(width - viewport.left - viewport.width, width),
      bottom: toPercent(height - viewport.top - viewport.height, height),
      left: toPercent(viewport.left, width),
      width: toPercent(canvas.width, width),
      height: toPercent(canvas.height, height),
      x: toPercent(canvas.left, width),
      y: toPercent(canvas.top, height),
    };

    this.lock = false;
  }

  /**
   * Watchers
   */

  componentShouldUpdate(next, prev, name) {

    if (next === prev || this.lock) return;

    const value = this[name];

    switch (name) {

      case 'aspectRatio':
        if (this.viewportShape === 'round') break;
        this.instance?.setAspectRatio(value);
        break;

      case 'disabled':
        value ? this.instance?.disable() : this.instance?.enable();
        break;

      case 'mode':
        this.instance?.setDragMode(value);
        this.instance?.clear();
        this.instance?.crop();
        break;

      case 'src':
        this.instance?.replace(this.src, false);
        break;

      case 'value':
        this.updateValue(value);
        break;

      case 'resizer':
      case 'resizerShape':
        break;

      case 'viewportShape':

        const aspectRatio = this.viewportShape === 'rect' ? this.options.aspectRatio : 1;

        this.instance?.setAspectRatio(aspectRatio);

        break;

      case 'backdrop':
      case 'background':
      case 'guides':
      case 'indicator':
      case 'responsive':
      case 'view':
      case 'viewport':
      case 'zoomable':
      case 'zoomRatio':
        this.rebind();
        break;
    }
  }

  /**
   * Events handler
   */

  @Bind
  onCrop() {

    this.updateValue();

    this.plusCrop.emit();
  }

  @Bind
  onReady() {

    // TODO
    this.value && this.updateValue(this.value);

    this.disabled && this.instance?.disable();

    this.plusReady.emit();
  }

  @Bind
  onZoom(event) {

    const difference = event.detail.ratio - event.detail.oldRatio;

    const direction = difference > 0 ? 'in' : 'out';

    const detail: CropperZoomData = {
      difference,
      direction,
      ratio: event.detail.ratio
    };

    const result = this.plusZoom.emit(detail);

    if (!result.defaultPrevented) return this.onCrop();

    event.preventDefault();
  }

  /**
   * Lifecycles
   */

  componentDidLoad() {
    this.bind();
  }

  disconnectedCallback() {
    this.unbind();
  }

  render() {
    return (
      <Host>
        <div class={this.classes}>
          <img class="image" ref={(element) => (this.$image = element)} src={this.src} />
        </div>
      </Host>
    )
  }
}
