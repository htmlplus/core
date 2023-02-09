import { _ as __decorate, u as uhtml, P as Property, a as Element } from './core/index.js';

var css_248z = "*,:after,:before{box-sizing:border-box}:host,:host:after,:host:before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none}:host{background-clip:padding-box;background-color:#fff;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);display:flex;flex-direction:column;outline:0;position:relative}";

/**
 * @slot default - The default slot.
 */
let DialogContent = class DialogContent {
    render() {
        return uhtml.html `<slot />`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
DialogContent.TAG = "plus-dialog-content";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
DialogContent.STYLES = css_248z;
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], DialogContent.prototype, "scrollable", void 0);
DialogContent = __decorate([
    Element("plus-dialog-content")
], DialogContent);

export { DialogContent };