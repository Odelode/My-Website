class darkModeToggle extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="dark-mode-toggle">
            <input type="checkbox" id="darkModeToggle">
            <label for="darkModeToggle">Dark Mode</label>
        </div>
        `;
    }
}

customElements.define('darkmodetoggle', darkModeToggle);