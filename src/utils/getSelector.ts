    export const getElementGenericly = <T extends HTMLElement>(selector: string): T => {
        const el = document.querySelector<T>(selector);

        if (!el) {
            throw new Error(`No selected element with selector "${selector}" found!`);
        }
        return  el;
    }