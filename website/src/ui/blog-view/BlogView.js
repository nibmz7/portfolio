const Post = (title, seriesTitle = null) => `
    <div class="post">
        <p class="title">${title}</p>
        ${seriesTitle ? `<p class="series">${seriesTitle}</p>` : ''}
        <div class="line"></div>
    </div>
`;

const template = `

    <style>

        #root {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .post {
            width: 100%;
        }

        .title {
            color: var(--color-text);
            font-weight: 500;
            font-size: 1.4rem;
        }

        .series {
            color: var(--color-text-secondary);
        }

        .line {
            width: 100%;
            height: 5px;
            border-bottom: 2px dotted #c4c0c0;
        }

    </style>

    <div id="root">
        
        ${Post('Basics of Linux GUI Stack', 'From Windows to Linux')}
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
  }
}

customElements.define('blog-view', BlogView);