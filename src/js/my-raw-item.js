class MyElement extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.attachShadow({mode: 'open'}).innerHTML = `
      <style>
        :host {
          display: block; 
          padding: 10px;
          border: 1px solid #e5e5e5;
        }
      </style>
      ${this.getAttribute('value')}
      <button>Delete</button>
    `;

    this.shadowRoot.querySelector('button').addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('my-raw-delete-event', {
        detail: {
          index: this.getAttribute('index')
        }
      }));
    });
  }
}

customElements.define('my-raw-item', MyElement);
