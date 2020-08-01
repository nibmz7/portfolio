import { onPressed, replaceFocusStyle } from '../../Utils.js';

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
            border-radius: 5px;
            height: 12%;
            width: 70%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-size: 1.4rem;
            margin-bottom: 2.5rem;
            transform: perspective(100px) translateZ(0px);
            transition: all .3s;
            cursor: pointer;
            box-shadow: 0px 3px 4px rgb(var(--shadow-bg) / 0.25);
        }

        #about {
            background: #EB5757;
            --shadow-bg: 175 0 0;
        }

        #blog {
            background: #BDB7C6;
            --shadow-bg: 117 117 117;
        }

        #projects {
            background: #7647cc;
            --shadow-bg: 60 0 171;
        }

        ${replaceFocusStyle(
          '.card',
          `transform: perspective(100px) translateZ(5px);
           box-shadow: 0px 0px 9px 0px rgb(var(--shadow-bg) / .75);`
        )}

        .card.selected {
            transform: perspective(100px) translateZ(5px);
            box-shadow: 0px 0px 9px 0px rgb(var(--shadow-bg) / .75);
        }

    </style>

    <div id="root">
        <div class="card" id="about" tabindex="0" aria-label="Go back to about page">About</div>
        <div class="card" id="blog" tabindex="0" aria-label="Go back to blog page">Blog</div>
        <div class="card" id="projects" tabindex="0" aria-label="Go back to about page">Projects</div>
    </div>
`;

export default class HomeView extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = template;
    this.selectedCard = null;
  }

  onItemClick(callback) {
    this.shadowRoot.querySelectorAll('.card').forEach((card) =>
      onPressed(card, (e) => {
        this.reset();
        card.classList.add('selected');
        this.selectedCard = card;
        callback(e, card.id);
      })
    );
  }

  setSelected(title) {
    let card = this.shadowRoot.getElementById(title);
    card.classList.add('selected');
    this.selectedCard = card;
  }

  reset() {
    if(this.selectedCard) {
        this.selectedCard.classList.remove('selected'); 
    }
  }
}

customElements.define('home-view', HomeView);
