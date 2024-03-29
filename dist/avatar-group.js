import { _ as __decorate, P as PlusCore, h as html, b as Property, c as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]){display:none!important}:host{--plus-avatar-group-gutter-stacked:-0.5rem;--plus-avatar-group-gutter-unstacked:0.5rem}:host{align-items:center;display:inline-flex;flex-wrap:wrap}:host ::slotted(plus-avatar){margin-inline-end:var(--plus-avatar-group-gutter-unstacked)}:host ::slotted(plus-avatar:last-of-type){margin-inline-end:0!important}:host([hoverable]) ::slotted(plus-avatar:hover){z-index:1}:host([stacked]) ::slotted(plus-avatar){box-shadow:0 0 0 2px #fff;margin-inline-end:var(--plus-avatar-group-gutter-stacked)}";

/**
 * @stable
 *
 * @slot default - The default slot.
 */
let AvatarGroup = class AvatarGroup extends PlusCore {
    render() {
        return html `<slot />`;
    }
};
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
AvatarGroup.tag = "plus-avatar-group";
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
AvatarGroup.style = css_248z;
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], AvatarGroup.prototype, "hoverable", void 0);
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], AvatarGroup.prototype, "stacked", void 0);
AvatarGroup = __decorate([
    Element()
], AvatarGroup);

export { AvatarGroup };
