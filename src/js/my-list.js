import { LitElement, html , css} from 'lit-element';

class MyElement extends LitElement {
  static get properties() {
    return {
      list: { type: Array },
    };
  }
  constructor() {
    super();
  }
  static get styles() {
    return css`
      input {
        display: inline-block;
        vertical-align: middle;
        width: 100%;
        border: 1px solid #e5e5e5;
        padding: 8px 6px;
        background: #aaa;
        -webkit-appearance: none;
        border-radius: 2px;
      }
    `;
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