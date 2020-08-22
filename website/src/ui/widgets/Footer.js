import { replaceFocusStyle, onPressed } from '../../Utils.js';

const template = `

    <style>

        #root {
            position: absolute;
            display: flex;
            bottom: 0;
            left: 0;
            right: 0;
            padding-bottom: 30px;
            padding-top: 10px;
            justify-content: center;
            z-index: 10;
        }

        .item {
            background: rgb(100 100 100 / 40%);
            backdrop-filter: blur(1px);
            height: 2.5rem;
            width: 2.5rem;
            margin: 0 8px;
            border-radius: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: none;
            transition: background .3s, box-shadow .3s;
            cursor: pointer;
        }

        #linkedin {
            --bg-color: #0E76A8;;
        }

        #github {
            --bg-color: #211F1F;
        }

        #twitter {
            --bg-color: #00ACEE;
        }

        #devto {
            --bg-color: #706fd3;
        }

        #email {
            --bg-color: #27ae60;
        }

        ${replaceFocusStyle(
          '.item',
          `background: var(--bg-color);
           box-shadow: 0 0 4px var(--bg-color);`
        )}

        .item > svg {
            fill: #ffffff;
            height: 50%;
            width: 50%;
        }

        #github > svg, #email > svg {
            height: 60%;
            width: 60%;
        }
        
        #twitter > svg {
            height: 80%;
            width: 80%;
        }

        @media all and (min-width: 50rem) {
            #root {
                padding-bottom: 10px;
                border-top: 1px dashed var(--color-border);
                backdrop-filter: blur(2px);
            }
        }

    </style>

    <div id="root">

        <div class="item" id="linkedin" tabindex="0" aria-label="Open Linkedln profile" data-link="https://www.linkedin.com/in/nur-ilyas-827544133/">
            <svg xmlns="http://www.w3.org/2000/svg" id="Bold" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><g><path d="m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFFFFF"/><path d="m.396 7.977h4.976v16.023h-4.976z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFFFFF"/><path d="m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFFFFF"/></g> </svg>
        </div>

        <div class="item" id="github" tabindex="0" aria-label="Open Github page" data-link="https://github.com/nibmz7">
            <svg enable-background="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z"/></svg>
        </div>

        <div class="item" id="twitter" tabindex="0" aria-label="Open Twitter profile" data-link="https://twitter.com/_Nur_Ilyas_">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><path class="cls-2" d="M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"/></svg>        
        </div>

        <div class="item" id="devto" tabindex="0" aria-label="Open Dev.to blog" data-link="https://dev.to/_nur_ilyas_">  
            <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z"></path></svg>
        </div>

        <div class="item" id="email" tabindex="0" aria-label="Send email"+>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512px" height="512px" class=""><g transform="matrix(0.825921 0 0 0.825921 44.5642 44.5642)"><g><g><polygon points="339.392,258.624 512,367.744 512,144.896   " data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFFFFF"/></g></g><g><g><polygon points="0,144.896 0,367.744 172.608,258.624   " data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFFFFF"/></g></g><g><g><path d="M480,80H32C16.032,80,3.36,91.904,0.96,107.232L256,275.264l255.04-168.032C508.64,91.904,495.968,80,480,80z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFFFFF"/></g></g><g><g><path d="M310.08,277.952l-45.28,29.824c-2.688,1.76-5.728,2.624-8.8,2.624c-3.072,0-6.112-0.864-8.8-2.624l-45.28-29.856    L1.024,404.992C3.488,420.192,16.096,432,32,432h448c15.904,0,28.512-11.808,30.976-27.008L310.08,277.952z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFFFFF"/></g></g></g></svg>
        </div>

    </div>
`;

export default class Footer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = template;
    let items = this.shadowRoot.querySelectorAll('.item');
    items.forEach((item) => {
      onPressed(item, (e) => {
        if (item.id === 'email') {
          alert('nibmz7@gmail.com');
          return;
        }
        window.open(item.dataset.link, '_blank');
      });
    });
  }
}

customElements.define('wc-footer', Footer);
