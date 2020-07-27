const template = `
    <style>

        #root {
            display: flex;
            width: 200vw;
            height: 100%;
            overflow: hidden;
            transition: transform .3s ease-out;
        }

        .fragment {
            width: 50%;
            height: 100%;
        }

        #list {
            
        }

        #detail {
            // background: green;
        }

        .expand {
            transform: translateX(-100vw);
        }

        @media all and (min-width: 50rem) {
            #root {
                width: 50rem;
                margin-left: auto;
                margin-right: auto;
                transform: translateX(15rem);
            }
            #list {
                width: 20rem;
            }
            #detail {
                width: 30rem;
            }
            #root.expand {
                transform: translateX(0);
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
    this.root = this.shadowRoot.getElementById('root');
    this.list = this.shadowRoot.getElementById('list');
    this.detail = this.shadowRoot.getElementById('detail');
    this.hasExpanded = false;
    this.listFragment = null;
    this.detailFragment = null;
  }

  showList(fragment) {
    this.listFragment = fragment;
    this.list.appendChild(fragment);
  }

  showDetail(fragment) {
    if (!this.hasExpanded) {
      this.hasExpanded = true;
      this.root.classList.add('expand');
    }
    if(this.detailFragment) this.detailFragment.remove();
    this.detail.appendChild(fragment);
    this.detailFragment = fragment;
  }

  closeDetail() {
    if (this.hasExpanded) {
      this.hasExpanded = false;
      this.root.classList.remove('expand');
    }
    this.detailFragment.remove();
    this.detailFragment = null;
  }
}

customElements.define('dynamic-screen', DynamicScreen);
