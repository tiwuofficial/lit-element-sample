import { LitElement, html , css, customElement, property} from 'lit-element';
import './my-ts-input';
import './my-ts-list';

@customElement('my-ts-todo')
class MyElement extends LitElement {
  @property({type: String})
  h1 = '';
  @property({type: Array})
  list = [];

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
      my-ts-input + my-ts-list {
        margin-top: 25px;
      }
    `;
  }
  render() {
    return html`
      <h1>${this.h1}</h1>
      <my-ts-input @my-event="${this.updateList}"></my-ts-input>
      <my-ts-list list="${JSON.stringify(this.list)}" @my-delete-event="${this.handleEvent}"></my-ts-list>
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

