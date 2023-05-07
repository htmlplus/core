import { EventEmitter } from '@htmlplus/element';
/**
 * @stable
 * @slot default - The default slot.
 */
export declare class Intersection {
    static TAG: string;
    /**
     * Disables the component functionality.
     */
    disabled?: boolean;
    /**
     * The event fires only once.
     */
    once?: boolean;
    /**
     * The element that is used as the viewport for checking visibility of the target. Must be the
     * ancestor of the target. Defaults to the browser viewport if not specified or if `null`.
     */
    root?: Element;
    /**
     * Margin around the root. Can have values similar to the CSS
     * [margin](https://mdn.io/margin)
     * property, e.g. `"10px 20px 30px 40px"` (top, right, bottom, left). The values can be
     * percentages. This set of values serves to grow or shrink each side of the root element's
     * bounding box before computing intersections. Defaults to all zeros.
     */
    rootMargin?: string;
    /**
     * Either a single number or an array of numbers which indicate at what percentage of the
     * target's visibility the observer's callback should be executed. If you only want to detect
     * when visibility passes the 50% mark, you can use a value of 0.5. If you want the callback to
     * run every time visibility passes another 25%, you would specify the array
     * [0, 0.25, 0.5, 0.75, 1]. The default is 0 (meaning as soon as even one pixel is visible, the
     * callback will be run). A value of 1.0 means that the threshold isn't considered passed until
     * every pixel is visible.
     */
    threshold?: number | number[];
    /**
     * Fires When the browser detects that the component has been unveiled or obscured.
     */
    plusChange: EventEmitter<IntersectionObserverEntry>;
    $host: HTMLElement;
    isIntersecting?: boolean;
    observer?: IntersectionObserver;
    get disconnected(): boolean;
    get options(): {
        root: Element;
        rootMargin: string;
        threshold: number | number[];
    };
    watcher(next: any, prev: any, name: any): void;
    bind(): void;
    unbind(): void;
    onIntersecting(entries: IntersectionObserverEntry[]): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): import("@htmlplus/element/client/utils/uhtml").Hole;
}
export interface IntersectionJSX {
    /**
     * Disables the component functionality.
     */
    disabled?: boolean;
    /**
     * The event fires only once.
     */
    once?: boolean;
    /**
     * The element that is used as the viewport for checking visibility of the target. Must be the
     * ancestor of the target. Defaults to the browser viewport if not specified or if `null`.
     */
    root?: Element;
    /**
     * Margin around the root. Can have values similar to the CSS
     * [margin](https://mdn.io/margin)
     * property, e.g. `"10px 20px 30px 40px"` (top, right, bottom, left). The values can be
     * percentages. This set of values serves to grow or shrink each side of the root element's
     * bounding box before computing intersections. Defaults to all zeros.
     */
    rootMargin?: string;
    /**
     * Either a single number or an array of numbers which indicate at what percentage of the
     * target's visibility the observer's callback should be executed. If you only want to detect
     * when visibility passes the 50% mark, you can use a value of 0.5. If you want the callback to
     * run every time visibility passes another 25%, you would specify the array
     * [0, 0.25, 0.5, 0.75, 1]. The default is 0 (meaning as soon as even one pixel is visible, the
     * callback will be run). A value of 1.0 means that the threshold isn't considered passed until
     * every pixel is visible.
     */
    threshold?: number | number[];
    /**
     * Fires When the browser detects that the component has been unveiled or obscured.
     */
    onPlusChange?: (event: CustomEvent<IntersectionObserverEntry>) => void;
}
declare global {
    interface HTMLPlusIntersectionElement extends HTMLElement {
        /**
         * Disables the component functionality.
         */
        disabled?: boolean;
        /**
         * The event fires only once.
         */
        once?: boolean;
        /**
         * The element that is used as the viewport for checking visibility of the target. Must be the
         * ancestor of the target. Defaults to the browser viewport if not specified or if `null`.
         */
        root?: Element;
        /**
         * Margin around the root. Can have values similar to the CSS
         * [margin](https://mdn.io/margin)
         * property, e.g. `"10px 20px 30px 40px"` (top, right, bottom, left). The values can be
         * percentages. This set of values serves to grow or shrink each side of the root element's
         * bounding box before computing intersections. Defaults to all zeros.
         */
        rootMargin?: string;
        /**
         * Either a single number or an array of numbers which indicate at what percentage of the
         * target's visibility the observer's callback should be executed. If you only want to detect
         * when visibility passes the 50% mark, you can use a value of 0.5. If you want the callback to
         * run every time visibility passes another 25%, you would specify the array
         * [0, 0.25, 0.5, 0.75, 1]. The default is 0 (meaning as soon as even one pixel is visible, the
         * callback will be run). A value of 1.0 means that the threshold isn't considered passed until
         * every pixel is visible.
         */
        threshold?: number | number[];
    }
    var HTMLPlusIntersectionElement: {
        prototype: HTMLPlusIntersectionElement;
        new (): HTMLPlusIntersectionElement;
    };
    interface HTMLElementTagNameMap {
        "plus-intersection": HTMLPlusIntersectionElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-intersection": IntersectionJSX & {
                [key: string]: any;
            };
        }
    }
}
export type IntersectionElement = globalThis.HTMLPlusIntersectionElement;
