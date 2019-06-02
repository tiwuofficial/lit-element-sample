import { LitElement, html } from 'lit-element';

class MyElement extends LitElement {
  static get properties() {
    return {
      name: { type: String }
    }
  }
  constructor(){
    super();
    this.name = 'World';
  }
  render() {
    return html`
      <h1>Hello ${this.name} !</h1>
      <input @input=${ e => this.name=e.target.value }>
    `
  }

}

customElements.define('my-element-4', MyElement);