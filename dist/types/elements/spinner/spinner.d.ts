import { PlusCore } from "../../core";
import { SpinnerSize, SpinnerType } from './spinner.types';
/**
 * @stable
 */
export declare class Spinner extends PlusCore {
    static TAG: string;
    static STYLES: string;
    /**
     * Specifies the color.
     */
    color?: string;
    /**
     * Specifies the size of the spinner.
     */
    size?: SpinnerSize;
    /**
     * Specifies which variant of the spinner to use.
     */
    type?: SpinnerType;
    get style(): any;
    get elements(): number[];
    render(): import("@htmlplus/element/client/utils/uhtml").Hole;
}
export interface SpinnerAttributes {
    /**
    * Specifies the color.
    */
    "color"?: string;
    /**
    * Specifies the size of the spinner.
    */
    "size"?: SpinnerSize;
    /**
    * Specifies which variant of the spinner to use.
    */
    "type"?: SpinnerType;
}
export interface SpinnerEvents {
}
export interface SpinnerMethods {
}
export interface SpinnerProperties {
    /**
    * Specifies the color.
    */
    color?: string;
    /**
    * Specifies the size of the spinner.
    */
    size?: SpinnerSize;
    /**
    * Specifies which variant of the spinner to use.
    */
    type?: SpinnerType;
}
export interface SpinnerJSX extends SpinnerEvents, SpinnerProperties {
}
declare global {
    interface HTMLPlusSpinnerElement extends HTMLElement, SpinnerMethods, SpinnerProperties {
    }
    var HTMLPlusSpinnerElement: {
        prototype: HTMLPlusSpinnerElement;
        new (): HTMLPlusSpinnerElement;
    };
    interface HTMLElementTagNameMap {
        "plus-spinner": HTMLPlusSpinnerElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-spinner": SpinnerEvents & SpinnerAttributes & {
                [key: string]: any;
            };
        }
    }
}
export type SpinnerElement = globalThis.HTMLPlusSpinnerElement;
