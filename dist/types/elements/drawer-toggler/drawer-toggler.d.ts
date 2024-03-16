import { PlusCore } from "../../core";
import { DrawerContext } from '../drawer/drawer.context';
/**
 * @slot default - The default slot.
 * @TODO open    - Specifies the content of toggler when it's opened.
 * @TODO close   - Specifies the content of toggler when it's closed.
 */
export declare class DrawerToggler extends PlusCore {
    static tag: string;
    static style: string;
    /**
     * This property helps you to attach which drawer this toggler controls.
     * It doesn't matter where the drawer toggler is.
     * You can put the drawer's toggler inside or outside of the drawer.
     * Read more about connectors [here](/connector).
     */
    connector?: string;
    drawer?: DrawerContext;
    render(): import("@htmlplus/element/client/utils/uhtml").Hole;
}
export interface DrawerTogglerAttributes {
    /**
    * This property helps you to attach which drawer this toggler controls.
    * It doesn't matter where the drawer toggler is.
    * You can put the drawer's toggler inside or outside of the drawer.
    * Read more about connectors [here](/connector).
    */
    "connector"?: string;
}
export interface DrawerTogglerEvents {
}
export interface DrawerTogglerMethods {
}
export interface DrawerTogglerProperties {
    /**
    * This property helps you to attach which drawer this toggler controls.
    * It doesn't matter where the drawer toggler is.
    * You can put the drawer's toggler inside or outside of the drawer.
    * Read more about connectors [here](/connector).
    */
    connector?: string;
}
export interface DrawerTogglerJSX extends DrawerTogglerEvents, DrawerTogglerProperties {
}
declare global {
    interface HTMLPlusDrawerTogglerElement extends HTMLElement, DrawerTogglerMethods, DrawerTogglerProperties {
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
            "plus-drawer-toggler": DrawerTogglerEvents & DrawerTogglerAttributes & {
                [key: string]: any;
            };
        }
    }
}
export type DrawerTogglerElement = globalThis.HTMLPlusDrawerTogglerElement;
