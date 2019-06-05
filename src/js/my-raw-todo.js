import './my-raw-input';
import './my-raw-list';

class MyElement extends HTMLElement {
  constructor() {
    super();
    if (localStorage.getItem('list')) {
      this.list = JSON.parse(localStorage.getItem('list'));
    } else {
      this.list = [];
    }
    this.attachShadow({mode: 'open'}).innerHTML = `
      <style>
        :host {
          display: block;
          max-width: 700px;
          margin: auto;
        }
        my-raw-input + my-raw-list {
          margin-top: 25px;
        }
      </style>
      
      <h1>${this.getAttribute('h1')}</h1>
      <my-raw-input></my-raw-input>
      <my-raw-list list="${JSON.stringify(this.list).replace(/"/g, '&quot;')}"></my-raw-list>
    `;

    this.shadowRoot.querySelector('my-raw-input').addEventListener('my-raw-event', e => {
      this.list = [...this.list, e.detail.value];
      localStorage.setItem('list', JSON.stringify(this.list));
      this.shadowRoot.querySelector('my-raw-list').setAttribute('list', JSON.stringify(this.list));
    });

    this.shadowRoot.querySelector('my-raw-list').addEventListener('my-raw-delete-event', e => {
      const index = parseInt(e.detail.index);
      this.list = this.list.filter((_,i) => index !== i);
      localStorage.setItem('list', JSON.stringify(this.list));
      this.shadowRoot.querySelector('my-raw-list').setAttribute('list', JSON.stringify(this.list));
    });
  }
}

customElements.define('my-raw-todo', MyElement);
