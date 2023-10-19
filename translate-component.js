class TranslateComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div id="google_translate_element"></div>

        <script type="text/javascript">
            function googleTranslateElementInit() {
             new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL}, 'google_translate_element');
            }
            </script>
    
                <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
        `;
    }
}

customElements.define('translate-component', TranslateComponent);