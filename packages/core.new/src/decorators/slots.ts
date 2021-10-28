export function Slots() {

    return function (target: Object, propertyKey: PropertyKey) {

        const descriptor = {
            get() {
                return this.$api?.slots();
            },
            enumerable: true,
            configurable: true,
        };

        Object.defineProperty(target, propertyKey, descriptor);
    }
}