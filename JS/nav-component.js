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
                    <li><a href="admin-protected.html">Admin</a></li>
                </ul>
            </nav>
        `;
    }
}

customElements.define('nav-component', NavComponent);