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

        #box-header {
            height: 6rem;
            transform: translateY(2rem);
            transition: transform .4s ease-out;
        }

        #box-header > * {
            height: 3rem;
        }

        #box-header.show {
            transform: translateY(-1.5rem);
        }

        #title {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        #dark-mode-toggle {
            position: relative;
            display: flex;
            align-items: center;
            width: 4rem;
            height: 2rem;
            background: #939090;
            border-radius: 30px;
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
        <div id="box-header">
            <h4>NIMZ</h4>
            <div id="title">
                ${arrowSVG}
                <h4>About</h4>
            </div>
        </div>
        <div id="dark-mode-toggle">
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
    this.boxHeader = this.shadowRoot.getElementById('box-header');
    this.titleText = this.shadowRoot.getElementById('title');
    toggleDarkMode.onclick = (e) => {
        toggleDarkMode.classList.toggle('enabled');
    };
  }

  setTitle(title) {
    this.titleText.textContent = title;
    this.boxHeader.classList.add('show');
  }

  hideTitle() {
    this.boxHeader.classList.remove('show');
  }
}

customElements.define('app-bar', AppBar);