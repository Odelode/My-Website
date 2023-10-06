class NavComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <nav>
                <ul>
                    <li><a href="index.html">Home Page</a></li>
                    <li><a href="hobbies.html">My Hobbies</a></li>
                    <li><a href="gallery.html">Gallery</a></li>
                    <li><a href="video-gallery.html">Video Gallery</a></li>
                    <li><a href="credits.html">Sources</a></li>
                </ul>
            </nav>
        `;
    }
}

class DarkModeToggle extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <div class="dark-mode-toggle">
            <input type="checkbox" id="darkModeToggle">
            <label for="darkModeToggle">Dark Mode</label>
        </div>
        `;
    }
}

customElements.define('nav-component', NavComponent);
customElements.define('dark-mode-toggle', DarkModeToggle);
