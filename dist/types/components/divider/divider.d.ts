import uhtml from "@htmlplus/element/client/vendors/uhtml.js";
import { DividerPlacement, DividerType, DividerVariant, DividerWidth } from './divider.types';
export declare class Divider {
    static TAG: string;
    static STYLES: string;
    /**
     * Specifies the location of the default slot.
     */
    placement?: DividerPlacement;
    /**
     * Specifies the width of the border.
     */
    width?: DividerWidth;
    /**
     * Specifies the style of the border.
     */
    type?: DividerType;
    /**
     * Specifies the amount of indentation.
     */
    variant?: DividerVariant;
    /**
     *  Draws the divider in a vertical orientation.
     */
    vertical?: boolean;
    get attributes(): {
        'aria-orientation': string;
        role: string;
    };
    render(): uhtml.Hole;
}
export interface DividerJSX {
    /**
     * Specifies the location of the default slot.
     */
    placement?: DividerPlacement;
    /**
     * Specifies the width of the border.
     */
    width?: DividerWidth;
    /**
     * Specifies the style of the border.
     */
    type?: DividerType;
    /**
     * Specifies the amount of indentation.
     */
    variant?: DividerVariant;
    /**
     *  Draws the divider in a vertical orientation.
     */
    vertical?: boolean;
}
declare global {
    interface HTMLPlusDividerElement extends HTMLElement {
        /**
         * Specifies the location of the default slot.
         */
        placement?: DividerPlacement;
        /**
         * Specifies the width of the border.
         */
        width?: DividerWidth;
        /**
         * Specifies the style of the border.
         */
        type?: DividerType;
        /**
         * Specifies the amount of indentation.
         */
        variant?: DividerVariant;
        /**
         *  Draws the divider in a vertical orientation.
         */
        vertical?: boolean;
    }
    var HTMLPlusDividerElement: {
        prototype: HTMLPlusDividerElement;
        new (): HTMLPlusDividerElement;
    };
    interface HTMLElementTagNameMap {
        "plus-divider": HTMLPlusDividerElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-divider": DividerJSX & {
                [key: string]: any;
            };
        }
    }
}
export type DividerElement = globalThis.HTMLPlusDividerElement;
