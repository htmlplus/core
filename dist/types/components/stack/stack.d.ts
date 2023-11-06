import { PlusCore } from "../../core";
import { StackAlignItems, StackJustifyContent } from './stack.types';
/**
 * @slot default - The default slot.
 */
export declare class Stack extends PlusCore {
    static TAG: string;
    /**
     * TODO.
     */
    alignItems?: StackAlignItems;
    /**
     * TODO.
     */
    gap?: string;
    /**
     * TODO.
     */
    justifyContent?: StackJustifyContent;
    /**
     * TODO.
     */
    reverse?: boolean;
    /**
     * TODO.
     */
    vertical?: boolean;
    get style(): string;
    render(): import("@htmlplus/element/client/utils/uhtml").Hole;
}
export interface StackJSX {
    /**
    * TODO.
    */
    "alignItems"?: StackAlignItems;
    /**
    * TODO.
    */
    "gap"?: string;
    /**
    * TODO.
    */
    "justifyContent"?: StackJustifyContent;
    /**
    * TODO.
    */
    "reverse"?: boolean;
    /**
    * TODO.
    */
    "vertical"?: boolean;
}
export interface StackAttributeJSX {
    /**
    * TODO.
    */
    "align-items"?: StackAlignItems;
    /**
    * TODO.
    */
    "gap"?: string;
    /**
    * TODO.
    */
    "justify-content"?: StackJustifyContent;
    /**
    * TODO.
    */
    "reverse"?: boolean;
    /**
    * TODO.
    */
    "vertical"?: boolean;
}
declare global {
    interface HTMLPlusStackElement extends HTMLElement {
        /**
        * TODO.
        */
        "alignItems"?: StackAlignItems;
        /**
        * TODO.
        */
        "gap"?: string;
        /**
        * TODO.
        */
        "justifyContent"?: StackJustifyContent;
        /**
        * TODO.
        */
        "reverse"?: boolean;
        /**
        * TODO.
        */
        "vertical"?: boolean;
    }
    var HTMLPlusStackElement: {
        prototype: HTMLPlusStackElement;
        new (): HTMLPlusStackElement;
    };
    interface HTMLElementTagNameMap {
        "plus-stack": HTMLPlusStackElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-stack": StackAttributeJSX & {
                [key: string]: any;
            };
        }
    }
}
export type StackElement = globalThis.HTMLPlusStackElement;
