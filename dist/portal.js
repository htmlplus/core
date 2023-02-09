import { _ as __decorate, h as host, l as Portal$1, P as Property, W as Watch, a as Element } from './core/index.js';

var css_248z = "*,:after,:before{box-sizing:border-box}:host,:host:after,:host:before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none}:host{display:contents}";

/**
 * @experimental
 * @slot default - The default slot.
 */
let Portal = class Portal {
    constructor() {
        /**
         * Specifies the position of the portal content relative to the target.
         */
        this.strategy = 'append';
        /**
         * Specifies the position of the portal content, It Can include css selectors,
         * node or any html elements.
         */
        this.target = 'body';
    }
    get $nodes() {
        return Array.from(host(this).children);
    }
    /**
     * Internal Methods
     */
    initialize() {
        if (typeof window === 'undefined')
            return;
        if (this.disabled)
            return;
        this.instance = new Portal$1({
            source: this.$nodes,
            strategy: this.strategy,
            target: this.target
        });
    }
    terminate() {
        var _a;
        (_a = this.instance) === null || _a === void 0 ? void 0 : _a.revert();
    }
    /**
     * Watchers
     */
    watcher(next, prev, name) {
        switch (name) {
            case 'disabled':
                next ? this.terminate() : this.initialize();
                break;
            case 'strategy':
            case 'target':
                this.terminate();
                this.initialize();
                break;
        }
    }
    /**
     * Lifecycles
     */
    connectedCallback() {
        this.initialize();
    }
    disconnectedCallback() {
        this.terminate();
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Portal.TAG = "plus-portal";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Portal.STYLES = css_248z;
__decorate([
    Property({
        type: 2
    })
], Portal.prototype, "disabled", void 0);
__decorate([
    Property({
        type: 0
    })
], Portal.prototype, "strategy", void 0);
__decorate([
    Property({
        type: 0
    })
], Portal.prototype, "target", void 0);
__decorate([
    Watch(['disabled', 'strategy', 'target'])
], Portal.prototype, "watcher", null);
Portal = __decorate([
    Element("plus-portal")
], Portal);

export { Portal };