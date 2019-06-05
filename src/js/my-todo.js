import {LitElement, html, css} from 'lit-element';
import './my-input';
import './my-list';

class MyElement extends LitElement {
  static get properties() {
    return {
      list: {type: Array,},
      h1: {type: String}
    }
  }
  constructor() {
    super();
    if (localStorage.getItem('list')) {
      this.list = JSON.parse(localStorage.getItem('list'));
    } else {
      this.list = [];
    }
  }
  static get styles() {
    return css`
      :host {
        display: block;
        max-width: 700px;
        margin: auto;
      }
      my-input + my-list {
        margin-top: 25px;
      }
    `;
  }
  render() {
    return html`
      <h1>${this.h1}</h1>
      <my-input @my-event="${this.updateList}"></my-input>
      <my-list list="${JSON.stringify(this.list)}" @my-delete-event="${this.handleEvent}"></my-list>
    `
  }
  updateList(e) {
    this.list = [...this.list, e.detail.value];
    localStorage.setItem('list', JSON.stringify(this.list));
  }
  handleEvent(e) {
    const index = parseInt(e.detail.index);
    this.list = this.list.filter((_,i) => index !== i);
    localStorage.setItem('list', JSON.stringify(this.list));
  }
}

customElements.define('my-todo', MyElement);