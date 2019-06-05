import {LitElement, html, css} from 'lit-element';

class MyElement extends LitElement {
  constructor() {
    super();
  }
  static get styles() {
    return css`
      :host {
        display: block;
        max-width: 700px;
        margin: auto;
      }
    `;
  }
  render() {
    return html`
      <a href="/">Raw Web Components</a>
      <a href="/lit-element.html">lit-element</a>
    `
  }
}

customElements.define('my-link', MyElement);