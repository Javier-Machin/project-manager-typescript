export function autobind(target, methodName, descriptor) {
    const originalMethod = descriptor.value;
    const updatedDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },
    };
    return updatedDescriptor;
}
//# sourceMappingURL=autobind.js.map