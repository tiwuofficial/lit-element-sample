import { LitElement, html } from 'lit-element';

class MyElement extends LitElement {
  static get properties() {
    return {
      value: { type: String },
      list: {type: Array}
    }
  }
  constructor(){
    super();
    this.value = '';
    if (localStorage.getItem('list')) {
      this.list = JSON.parse(localStorage.getItem('list'));
    } else {
      this.list = [];
    }
  }
  render() {
    return html`
      <h2>Input</h2>
      <input @input="${this.handleInput}">
      <button @click="${this.handleClick}">Save</button>
    `
  }
  handleInput(e) {
    this.value = e.target.value;
  }
  handleClick() {
    this.list.push(this.value);
    localStorage.setItem('list', JSON.stringify(this.list));
  }
}

customElements.define('my-input', MyElement);