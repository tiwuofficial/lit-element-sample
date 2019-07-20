import { LitElement, html , css, customElement, property} from 'lit-element';
import './my-ts-item';

@customElement('my-ts-list')
class MyElement extends LitElement {
  @property({type: Array})
  list = [];

  static get styles() {
    return css`
      :host {
        display: block;
      }
      my-ts-item + my-ts-item {
        margin-top: 15px;
      }
    `;
  }
  render() {
    return html`
      ${this.list.map((i, index) => html`
        <my-ts-item value="${i}" index="${index}" @my-delete-event="${this.handleEvent}"></my-ts-item>
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
