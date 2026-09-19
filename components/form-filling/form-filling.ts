export function formFilling() {
    const body: HTMLBodyElement = document.body as HTMLBodyElement;

    const sectForm: HTMLElement = document.createElement('section');
    sectForm.className = 'form-filling';
    sectForm.innerHTML = `
        <div class="wrapper">
        </div>
    `;

    body.append(sectForm);
}