const ScreenshotReducer = (accumulator, currentValue) => accumulator + `
    <img src="${currentValue.src}" alt="${currentValue.alt}">
`;

const TagReducer = (accumulator, tag) => accumulator + `
    <p class="tag>${tag}</p>
`;

const Project = (title, description, tags, screenshots) => `
    <div class="item">
        <div class="screenshots">${screenshots.reduce(
          ScreenshotReducer,
          ''
        )}</div>
        <h4 class="title">${title}</h4>
        <p class="description">${description}</p>
        <div class="tags">${tags.reduce(TagReducer, '')}</div>
    </div>
`;

const template = `

    <style>

    </style>

    <div id="root">
        ${Project(
          'DIY Fitness',
          'This was an old Android app I made back when I was still in school and this was prior to me discovering git version control. The source code is long gone but I managed to salvage some screenshots.',
          ['Android', 'Java'],
          [
            { src: 'assets/diy_fitness_app/png/screenshot_1.png', alt: '' },
            { src: 'assets/diy_fitness_app/png/screenshot_2.png', alt: '' },
            { src: 'assets/diy_fitness_app/png/screenshot_3.png', alt: '' },
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
