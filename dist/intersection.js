import { _ as __decorate, h as host, u as uhtml, P as Property, E as Event, S as State, A as Attributes, W as Watch, B as Bind, a as Element } from './core/index.js';

/**
 * @stable
 * @slot default - The default slot.
 */
let Intersection = class Intersection {
    get attributes() {
        return {
            state: this.isIntersecting ? 'in' : 'out'
        };
    }
    get disconnected() {
        return this.once && this.isIntersecting;
    }
    get options() {
        return {
            root: this.root,
            rootMargin: this.rootMargin,
            threshold: this.threshold
        };
    }
    bind() {
        this.observer = new IntersectionObserver(this.onIntersecting, this.options);
        this.observer.observe(host(this));
    }
    unbind() {
        var _a;
        (_a = this.observer) === null || _a === void 0 ? void 0 : _a.disconnect();
        delete this.observer;
    }
    watcher(next, prev, name) {
        switch (name) {
            case 'disabled':
                if (next)
                    this.unbind();
                else if (!this.disconnected)
                    this.bind();
                break;
            case 'once':
                if (next || this.disabled)
                    break;
                this.unbind();
                this.bind();
                break;
            case 'root':
            case 'rootMargin':
            case 'threshold':
                if (this.disabled || this.disconnected)
                    break;
                this.unbind();
                this.bind();
                break;
        }
    }
    onIntersecting(entries) {
        const [entry] = entries;
        this.isIntersecting = entry.isIntersecting;
        this.plusChange(entry);
        if (!this.isIntersecting || !this.once)
            return;
        this.unbind();
    }
    connectedCallback() {
        if (this.disabled)
            return;
        this.bind();
    }
    disconnectedCallback() {
        this.unbind();
    }
    render() {
        return uhtml.html `<slot />`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Intersection.TAG = "plus-intersection";
__decorate([
    Property({
        type: 2
    })
], Intersection.prototype, "disabled", void 0);
__decorate([
    Property({
        type: 2
    })
], Intersection.prototype, "once", void 0);
__decorate([
    Property({
        type: 0
    })
], Intersection.prototype, "root", void 0);
__decorate([
    Property({
        type: 256
    })
], Intersection.prototype, "rootMargin", void 0);
__decorate([
    Property({
        type: 65
    })
], Intersection.prototype, "threshold", void 0);
__decorate([
    Event()
], Intersection.prototype, "plusChange", void 0);
__decorate([
    State()
], Intersection.prototype, "isIntersecting", void 0);
__decorate([
    Attributes()
], Intersection.prototype, "attributes", null);
__decorate([
    Watch(['behavior', 'disabled', 'once', 'root', 'rootMargin', 'threshold'])
], Intersection.prototype, "watcher", null);
__decorate([
    Bind()
], Intersection.prototype, "onIntersecting", null);
Intersection = __decorate([
    Element("plus-intersection")
], Intersection);

export { Intersection };