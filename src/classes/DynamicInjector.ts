import type { InjectedComponentConf } from "../interfaces/InjectedComponent";
import { getElementGenericly } from "../utils/getSelector";

export class DynamicInjector {
    private targetContainer: HTMLElement | null;
    private injectedWrapper: HTMLDivElement | null = null;
    private conf: InjectedComponentConf;
    private onCloseCallback: () => void;

    constructor(conf: InjectedComponentConf, onCloseCallback: () => void) {
        this.conf = conf;
        this.targetContainer = getElementGenericly<HTMLElement>(conf.targetSelecctor);
        this.onCloseCallback = onCloseCallback;
    }

    private buildComponentNode(): HTMLDivElement{
        const wrapper = document.createElement('div');
        wrapper.className = this.conf.className;

        wrapper.innerHTML = this.conf.rawHTMLTemplate;


        const closeBtn = wrapper.querySelector(this.conf.closeTriggerEl);
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.destroyComponent();
                this.onCloseCallback();
            });
        }

        return wrapper;
    }

    public injectAsFirstChild(): void {
        if (!this.targetContainer) return;

        if (!this.injectedWrapper) {
            this.injectedWrapper = this.buildComponentNode();

            this.targetContainer.prepend(this.injectedWrapper);
        }
    }


    public destroyComponent(): void {
        if (this.injectedWrapper) {
            this.injectedWrapper.remove();
            this.injectedWrapper = null;
        }
    }
}