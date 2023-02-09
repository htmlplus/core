import uhtml from "@htmlplus/element/client/vendors/uhtml.js";
/**
 * @slot default - The default slot.
 * @TODO open    - Specifies the content of toggler when it's opened.
 * @TODO close   - Specifies the content of toggler when it's closed.
 */
export declare class DrawerToggler {
    static TAG: string;
    static STYLES: string;
    /**
     * This property helps you to attach which drawer this toggler controls.
     * It doesn't matter where the drawer toggler is.
     * You can put the drawer's toggler inside or outside of the drawer.
     * Read more about connectors [here](/connector).
     */
    connector?: string;
    toggle?: Function;
    tunnel?: boolean;
    get attributes(): {
        role: string;
        state: string;
        onClick: () => void;
    };
    get text(): "Close" | "Open";
    /**
     * Watchers
     */
    watcher(): void;
    /**
     * Events handler
     */
    onClick(): void;
    render(): uhtml.Hole;
}
export interface DrawerTogglerJSX {
    /**
     * This property helps you to attach which drawer this toggler controls.
     * It doesn't matter where the drawer toggler is.
     * You can put the drawer's toggler inside or outside of the drawer.
     * Read more about connectors [here](/connector).
     */
    connector?: string;
}
declare global {
    interface HTMLPlusDrawerTogglerElement extends HTMLElement {
        /**
         * This property helps you to attach which drawer this toggler controls.
         * It doesn't matter where the drawer toggler is.
         * You can put the drawer's toggler inside or outside of the drawer.
         * Read more about connectors [here](/connector).
         */
        connector?: string;
    }
    var HTMLPlusDrawerTogglerElement: {
        prototype: HTMLPlusDrawerTogglerElement;
        new (): HTMLPlusDrawerTogglerElement;
    };
    interface HTMLElementTagNameMap {
        "plus-drawer-toggler": HTMLPlusDrawerTogglerElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-drawer-toggler": DrawerTogglerJSX & {
                [key: string]: any;
            };
        }
    }
}