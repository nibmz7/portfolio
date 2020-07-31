const ScreenshotReducer = (accumulator, data) => accumulator + `
    <img src="${data.src}" alt="${data.alt}">
`;

const TagReducer = (accumulator, tag) => accumulator + `
    <p class="tag>${tag}</p>
`;

const Project = (title, description, tags, screenshots) => `
    <div class="project">
        <div class="screenshots">
            ${screenshots.reduce(ScreenshotReducer,'')}
            <p class="padding-end">a</p>
        </div>
        <h4 class="title">${title}</h4>
        <p class="description">${description}</p>
        <div class="tags">${tags.reduce(TagReducer, '')}</div>
    </div>
`;

const template = `

    <style>
        
        #root {
            width: 100%;
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
        .screenshots > img {
            height: 15rem;
            border-radius: 5px;
            margin-right: 1rem;
            box-shadow: 0 0 6px 0px var(--color-shadow-box);
        }
        .screenshots > img:last-of-type {
            margin-right: 0;
        }
        /*https://stackoverflow.com/questions/57471277/overflow-x-scrolling-with-display-flex-last-child-item-not-showing-parent-div*/
        .screenshots > .padding-end {
            opacity: 0;
            font-size: 1.5rem;
        }

        .title {

        }

        .description {

        }

        .tags {

        }
        
    </style>

    <div id="root">
        ${Project(
          'DIY Fitness',
          'This was an old Android app I made back when I was still in school and this was prior to me discovering git version control. The source code is long gone but I managed to salvage some screenshots.',
          ['Android', 'Java'],
          [
            { src: 'assets/diy_fitness_app/webp/screenshot_1.webp', alt: '' },
            { src: 'assets/diy_fitness_app/webp/screenshot_2.webp', alt: '' },
            { src: 'assets/diy_fitness_app/webp/screenshot_3.webp', alt: '' },
          ]
        )}
    </div>
`;

export default class ProjectsView extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = template;
  }
}

customElements.define('projects-view', ProjectsView);
