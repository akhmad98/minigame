import type { InjectedComponentConfig } from "../interfaces/injected-component.interface";
import { getElementGenericly } from "../utils/getSelector";

export class DynamicInjector {
    private targetContainer: HTMLElement | null;
    private injectedWrapper: HTMLDivElement | undefined = undefined;
    private conf: InjectedComponentConfig;
    private onCloseCallback: () => void;

    constructor(config: InjectedComponentConfig, onCloseCallback: () => void) {
        this.conf = config;
        this.targetContainer = getElementGenericly<HTMLElement>(config.targetSelecctor);
        this.onCloseCallback = onCloseCallback;
    }

    private buildComponentNode(): HTMLDivElement{
        const wrapper = document.createElement('div');
        wrapper.className = this.conf.className;

        wrapper.innerHTML = this.conf.rawHTMLTemplate;


        const closeButton = wrapper.querySelector(this.conf.closeTriggerEl);
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                this.destroyComponent();
                this.onCloseCallback();
            });
        }

        return wrapper;
    }

    public injectAsFirstChild(): void {
        if (!this.targetContainer || this.injectedWrapper) {
        	return;
        }

        this.injectedWrapper = this.buildComponentNode();

        this.targetContainer.prepend(this.injectedWrapper);
    }


    public destroyComponent(): void {
        if (!this.injectedWrapper) {
        	return;
        }

        this.injectedWrapper.remove();
        this.injectedWrapper = undefined;
    }
}