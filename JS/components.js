class FooterComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer>
            <p><i>"Odelode.com the most cool and trendy website amongst the youth of our generation." -</i><a href="https://www.github.com/Odelode " target="_blank">Odin H. Silden</a></p>
        </footer>
        `;
    }
}

customElements.define('footer-component', FooterComponent);

class NavComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <nav>
                <ul>
                    <li><a href="index.html">Home Page</a></li>
                    <li><a href="hobbies.html">My Hobbies</a></li>
                    <li><a href="gallery.html">Gallery</a></li>
                    <li><a href="video-gallery.html">Video Gallery</a></li>
                    <li><a href="music.html">Music likes</a></li>
                    <li><a href="awards.html">Awards</a></li>
                    <li><a href="COUNTDOWN.html">COUNTDOWN</a></li>
                </ul>
            </nav>
        `;
    }
}

customElements.define('nav-component', NavComponent);