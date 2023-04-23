import { IconFlip, IconResolver, IconRotate, IconSize } from './icon.types';
/**
 * @part svg - The svg element.
 */
export declare class Icon {
    static TAG: string;
    static STYLES: string;
    /**
     * Specifies the color.
     */
    color?: string;
    /**
     * Flips in `horizontal`, `vertical` or `both` directions.
     */
    flip?: IconFlip;
    /**
     * Specifies an alternate description to use for assistive devices.
     */
    label?: string;
    /**
     * Specifies the name.
     */
    name?: string;
    /**
     * TODO
     */
    resolver?: IconResolver;
    /**
     * Specifies the rotation.
     */
    rotate?: IconRotate;
    /**
     * Specifies the size.
     */
    size?: IconSize;
    svg?: SVGElement;
    get attributes(): {
        'aria-label': string;
        'aria-hidden': string;
        role: string;
        style: string;
    };
    get $host(): HTMLElement;
    get cache(): any;
    set cache(cache: any);
    get style(): string;
    update(input: SVGElement | string): void;
    updateCallback(): void;
    render(): SVGElement;
}
export interface IconJSX {
    /**
     * Specifies the color.
     */
    color?: string;
    /**
     * Flips in `horizontal`, `vertical` or `both` directions.
     */
    flip?: IconFlip;
    /**
     * Specifies an alternate description to use for assistive devices.
     */
    label?: string;
    /**
     * Specifies the name.
     */
    name?: string;
    /**
     * TODO
     */
    resolver?: IconResolver;
    /**
     * Specifies the rotation.
     */
    rotate?: IconRotate;
    /**
     * Specifies the size.
     */
    size?: IconSize;
}
declare global {
    interface HTMLPlusIconElement extends HTMLElement {
        /**
         * Specifies the color.
         */
        color?: string;
        /**
         * Flips in `horizontal`, `vertical` or `both` directions.
         */
        flip?: IconFlip;
        /**
         * Specifies an alternate description to use for assistive devices.
         */
        label?: string;
        /**
         * Specifies the name.
         */
        name?: string;
        /**
         * TODO
         */
        resolver?: IconResolver;
        /**
         * Specifies the rotation.
         */
        rotate?: IconRotate;
        /**
         * Specifies the size.
         */
        size?: IconSize;
    }
    var HTMLPlusIconElement: {
        prototype: HTMLPlusIconElement;
        new (): HTMLPlusIconElement;
    };
    interface HTMLElementTagNameMap {
        "plus-icon": HTMLPlusIconElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-icon": IconJSX & {
                [key: string]: any;
            };
        }
    }
}
export type IconElement = globalThis.HTMLPlusIconElement;
