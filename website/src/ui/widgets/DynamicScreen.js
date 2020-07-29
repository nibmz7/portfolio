import HomeView from '../home-view/HomeView.js';

const template = `
    <style>

        #root {
            display: flex;
            width: 200vw;
            height: 100%;
            overflow: hidden;
            transition: transform .8s cubic-bezier(.77, 0, .175, 1);
        }

        .fragment {
            width: 50%;
            height: 100%;
        }

        #list {
            
        }

        #detail {
            overflow-y: scroll;
            height: 100%;
            max-height: 100%;
            box-sizing: border-box;
            padding: 5rem 2rem;
        }

        #detail > * {
          display: none;
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
              opacity: 0;
              transition: opacity .3s .3s;
              width: 30rem;
            }
            .expand > #detail {
              opacity: 1;
            }
            #root.expand {
                transform: translateX(0);
            }
        }

    </style>

    <div id="root">
        <div id="list" class="fragment">
          <home-view></home-view>
        </div>
        <div id="detail" class="fragment">
          <about-view></about-view>
          <blog-view></blog-view>
        </div>
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
    this.currentCardId = null;
  }

  onItemClick(callback) {
    this.homeView = this.shadowRoot.querySelector('home-view');
    this.homeView.onItemClick((e, cardId) => {
      if (this.currentCardId) {
        this.shadowRoot.querySelector(`${this.currentCardId}-view`).style.display = '';
      }
      this.shadowRoot.querySelector(`${cardId}-view`).style.display = 'block';
      this.root.classList.add('expand');
      this.currentCardId = cardId;
      callback(cardId);
    });
  }

  closeDetailFragment() {
    this.root.classList.remove('expand');
    this.homeView.reset();
  }
}

customElements.define('dynamic-screen', DynamicScreen);
