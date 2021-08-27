'use strict';

export function debounce(delay: number = 300): (_: any, __: string, descriptor: PropertyDescriptor) => PropertyDescriptor {
    return (_: any, __: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
        let timeout: any;

        const original = descriptor.value;

        descriptor.value = function (...args: any[]) {
            clearTimeout(timeout);
            timeout = setTimeout(() => original.apply(this, args), delay);
        };

        return descriptor;
    };
}
