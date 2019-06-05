class MyElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'}).innerHTML = `
      <style>
         input {
          display: block;
          vertical-align: middle;
          width: 100%;
          border: 1px solid #e5e5e5;
          padding: 8px 6px;
          background: #FFF;
          -webkit-appearance: none;
          border-radius: 2px;
          box-sizing: border-box;
        }
        button {
          background-color: #FFF;
          color: #34b792;
          border: 1px solid #34b792;
          -webkit-appearance: button;
          cursor: pointer;
          display: block;
          width: 100%;
          padding: 8px;
        }
        input + button {
          margin-top: 15px;
        }
      </style>
      
      <input class="input">
      <button>Save</button>
    `;

    this.shadowRoot.querySelector('button').addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('my-raw-event', {
        detail: {
          value: this.shadowRoot.querySelector('input').value
        }
      }));
      this.shadowRoot.querySelector('input').value = '';
    });
  }
}
customElements.define('my-raw-input', MyElement);
