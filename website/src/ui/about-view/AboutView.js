import { replaceFocusStyle } from '../../Utils.js';
import { AboutContent } from '../../content.js';

const Info = (question, answer) => `
  <div class="info">
    <p class="question">${question}</p>
    <p class="answer">${answer}</p>
  </div>
`;

export { Info };

const template = () => `

    <style>

        #root {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0 2rem;
            box-sizing: border-box;
        }

        p {
            color: var(--color-text);
            margin: 0;
            font-size: 1.3rem;
        }

        .intro-box {
            width: 100%;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
        }

        .tooltip {
            position: relative;
            position: relative;
            text-decoration: underline;
            color: var(--color-link);
            padding: 1rem;
        }

        ${replaceFocusStyle('.tooltip')}
        
        .tooltip::after {
            position: absolute;
            top: 0;
            left: 0;
            content: attr(data-tip);
            padding: 8px 12px;
            background-color: #4b4b4b;
            color: white;
            font-size: 0.9rem;
            border-radius: 5px;
            height: 100%;
            display: flex;
            align-items: center;
            opacity: 0;
            box-shadow: 0 0 4px 0px var(--color-shadow-box);
            transition: all .3s;
        }

        .tooltip:hover::after, .tooltip:focus::after {
            opacity: 1;
        }

        .info {
            width: 100%;
            margin: 15px;
        }

        .question {
            font-weight: 700;
            margin-bottom: 3px;
        }

        .answer {
            
        }

    </style>

    <div id="root">

        <div class="intro-box">
            <p style="font-weight: 500;">Greetings!<br>I'm Ilyas</p>
            <p 
              class="tooltip" 
              tabindex="0" aria-label="Name tooltip"
              data-tip="You may pronounce it the same way as its English spelling, 'Elias'.">
                How do<br>you<br>pronounce<br>that?
            </p>
        </div>

        ${AboutContent}
    </div>
`;

export default class AboutView extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = template();
  }
}

customElements.define('about-view', AboutView);
