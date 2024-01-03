class NavComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <nav>
                <ul>
                    <li><a href="../index">Home Page</a></li>
                    <li><a href="../hobbies">My Hobbies</a></li>
                    <li><a href="../gallery">Gallery</a></li>
                    <li><a href="../video-gallery">Video Gallery</a></li>
                    <li><a href="../music">Music likes</a></li>
                    <li><a href="../awards">Awards</a></li>
                </ul>
            </nav>
        `;
    }
}

customElements.define('nav-component', NavComponent);