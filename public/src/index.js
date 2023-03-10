import * as components from "./components/index.js";


class AppContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }); 
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="./src/index.css">
    <research-bar class="searchBar"></research-bar>
    <div class="container">
      <custom-message class="cmessage"></custom-message>
      <Reddit-Post class="rpost"></Reddit-Post>
      <custom-bar class"cbar></custom-bar>
    </div>
    `
    ;
    
  }
}

customElements.define("app-container", AppContainer);


