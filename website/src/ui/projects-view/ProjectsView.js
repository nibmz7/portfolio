import { ProjectsContent } from '../../content.js';

const ScreenshotReducer = (accumulator, data) =>
  accumulator +
  `<a href="${data.src}.png" target="_blank">
    <picture>
        <source srcset="${data.src}.webp" type="image/webp">
        <img onload="this.className='loaded'" src="${data.src}.jpg" alt="${data.alt}" loading="lazy">
    </picture>
  </a>`;

const TagReducer = (accumulator, tag) =>
  accumulator + `<p class="tag">${tag}</p>`;

const Project = (title, description, tags, screenshots) => `
    <div class="project">
        <div class="screenshots">
            ${screenshots.reduce(ScreenshotReducer, '')}
            <p class="padding-end">a</p>
        </div>
        <div class="details">
            <h4 class="title">${title}</h4>
            <p class="description">${description}</p>
            <div class="tags">${tags.reduce(TagReducer, '')}</div>
        </div>
    </div>

    <div class="line"></div>
`;

export { Project };

const template = () => `

    <style>
        
        #root {
            width: 100%;
        }

        .line {
            width: calc(100% - 2rem);
            margin: auto;
            height: 5px;
            margin-bottom: 5px;
            border-bottom: 2px dotted var(--color-border);
        }

        .project {
            width: 100%;
        }

        .screenshots {
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
            display: flex;
            overflow-x: scroll;
            padding: 1rem;
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none;  /* IE 10+ */       
        }

        .screenshots::-webkit-scrollbar { 
            display: none;  /* Chrome Safari */
        }

        .screenshots img {
            opacity: 0;
            height: 15rem;
            border-radius: 5px;
            box-shadow: 0 0 6px 0px var(--color-shadow-box);
            transition: opacity ease 1s;
        }
        img.loaded {
            opacity: 1;
        }

        .screenshots > a {
            margin-right: 1rem;
        }

        .screenshots > a:last-of-type {
            margin-right: 0;
        }

        /*https://stackoverflow.com/questions/57471277/overflow-x-scrolling-with-display-flex-last-child-item-not-showing-parent-div*/
        .screenshots > .padding-end {
            opacity: 0;
            font-size: 1.5rem;
        }

        .details {
            padding: 0 1rem;
        }

        .title {
            color: var(--color-text);
        }

        .title > a {
            color: var(--color-link);
        }

        .description {
            color: var(--color-text-secondary);
        }

        .tags {
            display: flex;
            flex-wrap: wrap;
            margin: 1.5rem 0 0.5rem 0;
            color: var(--color-text-secondary);
        }

        .tag {
            display: flex;
            padding: 0.15rem 0.5rem 0.25rem;
            font-weight: 600;
            border: 1px solid var(--color-text-secondary);
            border-radius: 30px;
            margin: 0 0.5rem 0.5rem 0;
        }
        
    </style>

    <div id="root">
        ${ProjectsContent}
    </div>
`;

export default class ProjectsView extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = template();
  }
}

customElements.define('projects-view', ProjectsView);
