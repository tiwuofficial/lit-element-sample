import { LitElement, html , css} from 'lit-element';

class MyElement extends LitElement {
  static get properties() {
    return {
      value: { type: String },
    }
  }
  static get styles() {
    return css`
      input {
        display: block;
        vertical-align: middle;
        width: 100%;
        border: 1px solid #e5e5e5;
        padding: 8px 6px;
        background: #FFF;
        -webkit-appearance: none;
        border-radius: 2px;
        box-sizing: border-box;
      }
      button {
        margin-top: 5px;
        background-color: #FFF;
        color: #34b792;
        border: 1px solid #34b792;
        -webkit-appearance: button;
        cursor: pointer;
        display: block;
        width: 100%;
        padding: 8px;
      }
    `;
  }
  constructor(){
    super();
    this.value = '';
  }
  render() {
    return html`
      <input class="input" @input="${this.handleInput}">
      <button @click="${this.handleClick}">Save</button>
    `
  }
  handleInput(e) {
    this.value = e.target.value;
  }
  handleClick() {
    this.dispatchEvent(new CustomEvent('my-event', {
      detail: {
        value: this.value
      }
    }));
  }
}

customElements.define('my-input', MyElement);