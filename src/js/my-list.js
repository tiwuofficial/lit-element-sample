import { LitElement, html , css} from 'lit-element';
import './my-item';

class MyElement extends LitElement {
  static get properties() {
    return {
      list: {type: Array},
    };
  }
  constructor() {
    super();
  }
  static get styles() {
    return css`
      :host {
        display: block;
      }
      my-item + my-item {
        margin-top: 15px;
      }
    `;
  }
  render() {
    return html`
      ${this.list.map((i, index) => html`
        <my-item value="${i}" index="${index}" @my-delete-event="${this.handleEvent}"></my-item>
      `)}
    `;
  }
  handleEvent(e) {
    this.dispatchEvent(new CustomEvent('my-delete-event', {
      detail: {
        index: e.detail.index
      }
    }));
  }
}

customElements.define('my-list', MyElement);