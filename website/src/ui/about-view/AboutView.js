import { replaceFocusStyle } from '../../Utils.js';

const Info = (question, answer) => `
  <div class="info">
    <p class="question">${question}</p>
    <p class="answer">${answer}</p>
  </div>
`;

const template = `

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
            color: #EC4141;
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

        ${Info('Alma mater', 'Computer Engineering<br>@ Singapore Polytechnic')}
        ${Info('Where am I now?', 'Serving in the army as a conscript until 30 Jan 2021.')}
        ${Info('Have I worked before?', 'No, I have not but I am itching and yearning to work as a developer or a software engineer. I really want to work alongside peers who share the same passion and I want to know what it is like to collobarate with other developers in a professional setting.')}

    </div>
`;

export default class AboutView extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = template;
  }
}

customElements.define('about-view', AboutView);
