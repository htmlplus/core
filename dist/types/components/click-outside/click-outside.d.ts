import uhtml from "@htmlplus/element/client/vendors/uhtml.js";
import { EventEmitter } from '@htmlplus/element';
/**
 * @stable
 * @slot default - The default slot.
 */
export declare class ClickOutside {
    static TAG: string;
    /**
     * A boolean value indicating that events of this type will be dispatched to the registered
     * `listener` before being dispatched to any `EventTarget` beneath it in the DOM tree.
     */
    capture?: boolean;
    /**
     * Disables the component functionality.
     */
    disabled?: boolean;
    /**
     * The event fires only once.
     */
    once?: boolean;
    /**
     * Fires when outside of the component is clicked.
     */
    plusClickOutside: EventEmitter<void>;
    get $host(): HTMLElement;
    get options(): {
        capture: boolean;
    };
    bind(): void;
    unbind(): void;
    watcher(next: any, prev: any, name: any): void;
    onClickOutside(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): uhtml.Hole;
}
export interface ClickOutsideJSX {
    /**
     * A boolean value indicating that events of this type will be dispatched to the registered
     * `listener` before being dispatched to any `EventTarget` beneath it in the DOM tree.
     */
    capture?: boolean;
    /**
     * Disables the component functionality.
     */
    disabled?: boolean;
    /**
     * The event fires only once.
     */
    once?: boolean;
    /**
     * Fires when outside of the component is clicked.
     */
    onPlusClickOutside?: (event: CustomEvent<void>) => void;
}
declare global {
    interface HTMLPlusClickOutsideElement extends HTMLElement {
        /**
         * A boolean value indicating that events of this type will be dispatched to the registered
         * `listener` before being dispatched to any `EventTarget` beneath it in the DOM tree.
         */
        capture?: boolean;
        /**
         * Disables the component functionality.
         */
        disabled?: boolean;
        /**
         * The event fires only once.
         */
        once?: boolean;
    }
    var HTMLPlusClickOutsideElement: {
        prototype: HTMLPlusClickOutsideElement;
        new (): HTMLPlusClickOutsideElement;
    };
    interface HTMLElementTagNameMap {
        "plus-click-outside": HTMLPlusClickOutsideElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-click-outside": ClickOutsideJSX & {
                [key: string]: any;
            };
        }
    }
}