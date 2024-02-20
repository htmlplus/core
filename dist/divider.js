import { _ as __decorate, P as PlusCore, h as html, e as attributes, v as slots, f as host, b as Property, c as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}:host([type=dashed])::part(line){border-style:dashed}:host([type=dotted])::part(line){border-style:dotted}:host([type=double])::part(line){border-style:double}:host([type=groove])::part(line){border-style:groove}:host([type=inset])::part(line){border-style:inset}:host([type=outset])::part(line){border-style:outset}:host([type=ridge])::part(line){border-style:ridge}:host([type=solid])::part(line){border-style:solid}:host([width=xs])::part(line){border-width:1px}:host([width=sm])::part(line){border-width:2px}:host([width=md])::part(line){border-width:3px}:host([width=lg])::part(line){border-width:4px}:host([width=xl])::part(line){border-width:5px}:host{align-items:center;display:flex;gap:.5rem}:host::part(line){border-color:#d3d3d3;flex:1 1 auto}:host([placement=end])::part(after),:host([placement=start])::part(before){display:none}:host([aria-orientation=horizontal]){flex-direction:row}:host([aria-orientation=horizontal])::part(line){border-bottom:none;border-left:none;border-right:none}:host([aria-orientation=horizontal][variant=inset])::part(before){margin-inline-start:5rem}:host([aria-orientation=horizontal][variant=middle])::part(before){margin-inline-start:1rem}:host([aria-orientation=horizontal][variant=middle])::part(after){margin-inline-end:1rem}:host([aria-orientation=vertical]){align-self:stretch;flex-direction:column;height:auto;min-height:100%}:host([aria-orientation=vertical])::part(line){border-bottom:none;border-right:none;border-top:none}:host([aria-orientation=vertical][variant=inset])::part(before){margin-block-start:5rem}:host([aria-orientation=vertical][variant=middle])::part(before){margin-block-start:1rem}:host([aria-orientation=vertical][variant=middle])::part(after){margin-block-end:1rem}:host([data-empty]:not([data-empty=false])){gap:0}";

/**
 * @part line    - The before and after element.
 * @part before  - The before element.
 * @part after   - The after element.
 * @slot default - The default slot.
 */
let Divider = class Divider extends PlusCore {
    constructor() {
        super(...arguments);
        /**
         * Specifies the location of the default slot.
         */
        this.placement = 'center';
        /**
         * Specifies the width of the border.
         */
        this.width = 'md';
        /**
         * Specifies the style of the border.
         */
        this.type = 'solid';
        /**
         * Specifies the amount of indentation.
         */
        this.variant = 'full';
    }
    render() {
        return html `${attributes(host(this), [{
                "aria-orientation": this.vertical ? 'vertical' : 'horizontal'
            }, {
                "data-empty": `${!slots(this).default}`
            }, {
                "role": "separator"
            }])}
        <div part="line before"></div>
        <slot />
        <div part="line after"></div>
      `;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Divider.TAG = "plus-divider";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Divider.STYLES = css_248z;
__decorate([
    Property({
        reflect: true,
        type: 8
    })
], Divider.prototype, "placement", void 0);
__decorate([
    Property({
        reflect: true,
        type: 8
    })
], Divider.prototype, "width", void 0);
__decorate([
    Property({
        reflect: true,
        type: 8
    })
], Divider.prototype, "type", void 0);
__decorate([
    Property({
        reflect: true,
        type: 8
    })
], Divider.prototype, "variant", void 0);
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], Divider.prototype, "vertical", void 0);
Divider = __decorate([
    Element()
], Divider);

export { Divider };
