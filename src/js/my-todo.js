import {LitElement, html} from 'lit-element';
import './my-input';
import './my-list';

class MyElement extends LitElement {
  static get properties() {
    return {
      list: {type: Array}
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

  render() {
    return html`
      <h1>My Todo</h1>
      <my-input @my-event="${this.updateList}"></my-input>
      <my-list list="${JSON.stringify(this.list)}"></my-list>
    `
  }

  updateList(e) {
    this.list = [...this.list, e.detail.value];
    localStorage.setItem('list', JSON.stringify(this.list));
  }
}

customElements.define('my-todo', MyElement);