class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Navbar Links Area -->
        <div class="nav-bar">
            <i class="logo">
              Amigo Junior Dev
            </i>
          <div class="nav-link-wrapper" id="nav-links">
            <a class="nav-link join" href="https://chat.whatsapp.com/GkIZkbVRgve5AqPVduYf2Q">Join Us</a>
            <a class="nav-link" href="">Members</a>
            <a class="nav-link" href="">ReadME</a>
  
            </a>
          </div>
        </div>
      `;
    }
}

customElements.define('nav-header', Header);
