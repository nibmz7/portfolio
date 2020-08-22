import { replaceFocusStyle, onPressed } from '../../Utils.js';
import { BlogContent } from '../../content.js';

const Post = (title, seriesTitle = null, link) => `
    <a class="post" href="${link}" target="_blank" tabindex="0" aria-label="Post on ${title}">
        <p class="title">${title}</p>
        ${seriesTitle ? `<p class="series">${seriesTitle}</p>` : ''}
    </a>

    <div class="line"></div>

`;

export { Post };

const template = () => `

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
            text-decoration: none;
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
            border-bottom: 2px dotted var(--color-border);
        }

    </style>

    <div id="root">
        ${BlogContent}
    </div>
`;

export default class BlogView extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = template();
  }
}

customElements.define('blog-view', BlogView);
