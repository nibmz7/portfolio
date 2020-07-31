const item = (title, description, tags) => `

`;

const template = `

    <style>

    </style>

    <div id="root">



    </div>
`;

export default class ProjectsView extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = template;
  }
}
