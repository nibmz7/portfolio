import { replaceFocusStyle, onPressed } from "../../Utils.js";

const Post = (title, seriesTitle = null, link) => `
    <div class="post" tabindex="0" aria-label="Post on ${title}" data-link="${link}">
        <p class="title">${title}</p>
        ${seriesTitle ? `<p class="series">${seriesTitle}</p>` : ''}
    </div>

    <div class="line"></div>

`;

const template = `

    <style>

        #root {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0 1rem;
        }

        .post {
            width: 100%;
            padding: 0 1rem;
            box-sizing: border-box;
            border-radius: 5px;
            cursor: pointer;
            transition: background .4s ease-out;
        }

        ${replaceFocusStyle('.post', 'background: #71717152;')}

        .title {
            color: var(--color-text);
            font-weight: 500;
            font-size: 1.4rem;
        }

        .series {
            color: var(--color-text-secondary);
        }

        .line {
            width: calc(100% - 2rem);
            height: 5px;
            margin-bottom: 5px;
            border-bottom: 2px dotted #c4c0c0;
        }

    </style>

    <div id="root">
        
        ${Post('Basics of Linux GUI Stack', 'From Windows to Linux', 'https://www.google.com')}
        ${Post('UEFI & GPT', 'From Windows to Linux')}
        ${Post('Basics of Linux GUI Stack', 'From Windows to Linux')}
        ${Post('UEFI & GPT', 'From Windows to Linux')}
        ${Post('Basics of Linux GUI Stack', 'From Windows to Linux')}
        ${Post('UEFI & GPT', 'From Windows to Linux')}
        ${Post('Basics of Linux GUI Stack', 'From Windows to Linux')}
        ${Post('UEFI & GPT', 'From Windows to Linux')}
    </div>
`;

export default class BlogView extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = template;
    let posts = this.shadowRoot.querySelectorAll('.post');
    posts.forEach((post) => {
      onPressed(post, (e) => {
        window.open(post.dataset.link, '_blank');
      });
    });
  }
}

customElements.define('blog-view', BlogView);