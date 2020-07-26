const template = `
    <style>

        #root {
            display: flex;
            height: 100%;
            width: 200%;
            overflow-x: hidden;
        }

        #root.animatable {
            transition: transform .3s ease-out;
        }

        .fragment {
            width: 50%;
            height: 100%;
        }

        #list {
            background: blue;
        }

        #detail {
            background: green;
        }

        @media all and (min-width: 50rem) {
            #root {
                width: 50rem;
                margin-left: auto;
                margin-right: auto;
                transform: translateX(15rem);
            }
            #list {
                width: 40%;
            }
            #detail {
                width: 60%;
            }
        }

    </style>

    <div id="root">
        <div id="list" class="fragment"></div>
        <div id="detail" class="fragment"></div>
    </div>
`;

export default class DynamicScreen extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = template;
  }
}

customElements.define('dynamic-screen', DynamicScreen);
