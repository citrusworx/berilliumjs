class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html">Lemonade</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="about.html">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contact.html">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        `;
    }
}

customElements.define('navbar-main', Navbar);

// Drag and Drop
const canvas = document.getElementById('canvas');
const elements = document.getElementById('elements').children;

for (let element of elements) {
  element.addEventListener('dragstart', dragStart);
  element.addEventListener('dragend', dragEnd);
}

canvas.addEventListener('dragover', dragOver);
canvas.addEventListener('drop', drop);

function dragStart(e) {
  e.dataTransfer.setData('text/plain', e.target.id);
}

function dragOver(e) {
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();
  const data = e.dataTransfer.getData('text/plain');
  const element = document.getElementById(data);
  const clone = element.cloneNode(true);
  clone.style.position = 'relative';
  canvas.appendChild(clone);
}

function dragEnd(e) {
  e.dataTransfer.clearData();
}


  