const template = `

    <style>
        
        #root {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .card {
            background: #EB5757;
            box-shadow: 0px 3px 4px rgba(223, 19, 108, 0.25);
            border-radius: 5px;
            height: 10%;
            width: 70%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-size: 1.4rem;
            margin-bottom: 2.5rem;
        }

    </style>

    <div id="root">
        <div class="card">About</div>
        <div class="card">Blog</div>
        <div class="card">Projects</div>
    </div>
`;

export default class HomeView extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = template;
  }
}

customElements.define('home-view', HomeView);
