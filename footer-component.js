class FooterComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer>
            <p><a href="https://www.github.com/Odelode">Odin H. Silden</a></p>
        </footer>
        `;
    }
}

customElements.define('footer-component', FooterComponent);