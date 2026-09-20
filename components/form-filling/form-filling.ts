import './form-filling.scss';

export function formFilling() {
    const body: HTMLBodyElement = document.body as HTMLBodyElement;

    const sectForm: HTMLElement = document.createElement('section');
    sectForm.className = 'form-filling';
    sectForm.innerHTML = `
        <div class="wrapper">
            <div class="poster-from-container">
                <div class="poster-wrapper">
                </div>
                <div class="form-wrapper">
                </div>
            </div>
        </div>
    `;
    

    const formWrapper: HTMLDivElement = sectForm.querySelector('.form-wrapper') as HTMLDivElement;
    const formHeadline: HTMLElement = document.createElement('h2');
    formHeadline.className = 'form-title hero-title';
    formHeadline.textContent = 'Are You a Game Developer?';
    formWrapper.append(formHeadline);

    const formParagraph: HTMLElement = document.createElement('p');
    formParagraph.className = 'form-desctiption hero-text';
    formParagraph.textContent = `Want to see your game on MiniGames? We're always looking for fun,
        engaging mini games to add to our platform. Submit your game
        and reach thousands of players!`;
    formWrapper.append(formParagraph);

    const inputForm: HTMLFormElement = document.createElement('form');
    inputForm.className = 'submission-form';
    inputForm.method = 'POST';
    inputForm.action = 'submit-file-from-game-dev';
    inputForm.innerHTML = `
        <div class="input-wrap">
            <input type="file" id="game-file" name="game_file" class="hidden-file-input" required>
            <label for="game-file" class="submit-btn-label">
                <span class="upload-icon">
                    <svg width="15" height="15" viewBox="0 10 20 -10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 1.41418V9.41418M3.66667 4.74752L7 1.41418L10.3333 4.74752M13 9.41418V12.0809C13 12.4345 12.8595 12.7736 12.6095 13.0237C12.3594 13.2737 12.0203 13.4142 11.6667 13.4142H2.33333C1.97971 13.4142 1.64057 13.2737 1.39052 13.0237C1.14048 12.7736 1 12.4345 1 12.0809V9.41418" stroke="#242145" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </span>
                Submit Form
            </label>
        </div>
    `;
    formWrapper.append(inputForm);

    const contactText: HTMLElement = document.createElement('p');
    contactText.innerHTML = `
        or contact us at <a href="mailto:developers@minigames.com" class="contact-link">developers@minigames.com</a>
    `;
    formWrapper.append(contactText);

    body.append(sectForm);
}