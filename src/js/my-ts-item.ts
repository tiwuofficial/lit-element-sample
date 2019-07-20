import { LitElement, html , css, customElement, property} from 'lit-element';

@customElement('my-ts-item')
class MyElement extends LitElement {
  @property({type: String})
  value = '';
  @property({type: String})
  index = '';

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
