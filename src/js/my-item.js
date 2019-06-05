import { LitElement, html , css} from 'lit-element';

class MyElement extends LitElement {
  static get properties() {
    return {
      value: { type: String },
      index: { type: String }
    };
  }
  constructor() {
    super();
  }
  static get styles() {
    return css`
      :host {
        display: block; 
        padding: 10px;
        border: 1px solid #e5e5e5;
      }
    `;
  }
  render() {
    return html`
      ${this.value}
      <button @click="${this.handleClick}">Delete</button>
    `;
  }
  handleClick() {
    this.dispatchEvent(new CustomEvent('my-delete-event', {
      detail: {
        index: this.index
      }
    }));
  }
}

customElements.define('my-item', MyElement);