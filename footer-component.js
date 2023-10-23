class FooterComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer>
            <p><i>"Odelode.com the most cool website amongst the youth of our generation." -</i><a href="https://www.github.com/Odelode " target="_blank">Odin H. Silden</a></p>
        </footer>
        `;
    }
}

customElements.define('footer-component', FooterComponent);