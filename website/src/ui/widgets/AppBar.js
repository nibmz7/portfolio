import { onPressed } from '../../Utils.js';

const moonSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="18px" height="18px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 4c4.41 0 8 3.59 8 8s-3.59 8-8 8c-.34 0-.68-.02-1.01-.07C10.9 17.77 12 14.95 12 12s-1.1-5.77-3.01-7.93C9.32 4.02 9.66 4 10 4m0-2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z"/></svg>`;
const sunSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="18px" height="18px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z"/></svg>`;
const arrowSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"/></svg>`;

const template = `

    <style>

        #root {
            max-width: 30rem;
            height: 3rem;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-left: auto;
            margin-right: auto;
            padding: 0 18px;
            font-size: 1.5rem;
            font-weight: 400;
        }

        h4 {
            margin: 0;
            font-weight: 400;
        }

        #header-box {
            height: 6rem;
            transform: translateY(2rem);
            transition: transform .4s ease-out;
        }

        #header-box > h4 {
            height: 3rem;
        }

        #header-box.show {
            transform: translateY(-1.5rem);
        }

        #title-box {
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            height: 2rem;
            margin: 0.5rem;
            padding: 0 8px;
            border-radius: 30px;
            transition: .5s background;
        }

        #title-box:hover,  #title-box:focus{
            background: #d4d4d4;
            outline: none;
        }

        #dark-mode-toggle {
            position: relative;
            display: flex;
            align-items: center;
            width: 4rem;
            height: 2rem;
            background: #939090;
            border-radius: 30px;
            cursor: pointer;
        }

        #dark-mode-toggle > svg {
            height: 80%;
            width: 50%;
        }

        #dark-mode-toggle > svg:nth-of-type(1) {
            margin-left: 5px;       
        }
        #dark-mode-toggle > svg:nth-of-type(2) {
            margin-right: 5px;       
        }

        #dark-mode-toggle:focus{
            outline: none;
        }

        #dark-mode-toggle:hover > .toggle, #dark-mode-toggle:focus > .toggle {
            box-shadow: 0px 0px 7px 4px #948383;
        }

        .toggle {
            position: absolute;
            left: 0;
            top: 0;
            background: #ffffff;
            width: 50%;
            height: 100%;
            border-radius: 30px;
            box-shadow: 0px 0px 3px 1px #948383;
            transform: translateX(0);
            transition: all .5s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .enabled > .toggle {
            transform: translateX(100%);
        }

    </style>

    <div id="root">
        <div id="header-box" class="show">
            <h4>NIMZ</h4>
            <div id="title-box" tabindex="-0" aria-label="Go back to home screen">
                ${arrowSVG}
                <h4 id="title-text">About</h4>
            </div>
        </div>
        <div id="dark-mode-toggle" tabindex="0" aria-label="Toggle dark mode">
            ${moonSVG}
            ${sunSVG}
            <div class="toggle"></div>
        </div>
    </div>
`;

export default class AppBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = template;
    let toggleDarkMode = this.shadowRoot.getElementById('dark-mode-toggle');
    this.headerBox = this.shadowRoot.getElementById('header-box');
    this.titleBox = this.shadowRoot.getElementById('title-box');

    onPressed(toggleDarkMode, (e) => {
      toggleDarkMode.classList.toggle('enabled');
    });

    onPressed(this.titleBox, (e) => {
        this.hideTitle();
    });
  }

  showTitle(title) {
    this.titleText.textContent = title;
    this.headerBox.classList.add('show');
    this.titleBox.tabIndex = 0;
  }

  hideTitle() {
    this.headerBox.classList.remove('show');
    this.titleBox.tabIndex = -1;
  }
}

customElements.define('app-bar', AppBar);
