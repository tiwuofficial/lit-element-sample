import { LitElement, html } from 'lit-element';

class MyElement extends LitElement {
  static get properties() {
    return {
      list: { type: Array },
    };
  }
  constructor() {
    super();
    if (localStorage.getItem('list')) {
      this.list = JSON.parse(localStorage.getItem('list'));
    } else {
      this.list = [];
    }
  }
  render() {
    return html`
      <ul>
        ${this.list.map(i => html`<li>${i}</li>`)}
      </ul>
    `;
  }
}

customElements.define('my-list', MyElement);