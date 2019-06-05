import './my-raw-item';

class MyElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'}).innerHTML = `
      <style>
        :host {
          display: block;
        }
        my-raw-item + my-raw-item {
          margin-top: 15px;
        }
      </style>
    `;
  }
  static get observedAttributes() {
    return ['list'];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    this.shadowRoot.querySelectorAll('my-raw-item').forEach(item => {
      item.parentNode.removeChild(item);
    });
    const list = JSON.parse(newValue);
    list.forEach((value, index) => {
      const item = document.createElement('my-raw-item');
      item.setAttribute('value', value);
      item.setAttribute('index', index);
      item.addEventListener('my-raw-delete-event', e => {
        this.dispatchEvent(new CustomEvent('my-raw-delete-event', {
          detail: {
            index: e.detail.index
          }
        }));
      });
      this.shadowRoot.appendChild(item);
    });
  }
}

customElements.define('my-raw-list', MyElement);
