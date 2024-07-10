class Navbars extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="bg-gray-800 p-4">
            <div class="container mx-auto flex justify-between items-center">
                <a class="text-white text-lg font-bold" href="index.html">Lemonade</a>
                <button class="text-white md:hidden" aria-label="Toggle navigation" @click="toggleMenu">
                    <span class="material-icons">menu</span>
                </button>
                <div class="hidden md:flex space-x-4" id="navbarNav">
                    <a class="text-white hover:text-gray-300" href="index.html">Home</a>
                    <a class="text-white hover:text-gray-300" href="about.html">About</a>
                    <a class="text-white hover:text-gray-300" href="contact.html">Contact</a>
                </div>
            </div>
        </nav>
        `;
    }
}

customElements.define('navbar-tail', Navbars);
