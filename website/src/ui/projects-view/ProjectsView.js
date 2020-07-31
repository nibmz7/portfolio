const ScreenshotReducer = (accumulator, data) =>
  accumulator +
  `<a href="${data.src}" target="_blank">
    <img src="${data.src}" alt="${data.alt}" loading="lazy">
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

const template = `

    <style>
        
        #root {
            width: 100%;
        }

        .line {
            width: calc(100% - 2rem);
            margin: auto;
            height: 5px;
            margin-bottom: 5px;
            border-bottom: 2px dotted #c4c0c0;
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

        .screenshots > a > img {
            height: 15rem;
            border-radius: 5px;
            box-shadow: 0 0 6px 0px var(--color-shadow-box);
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
            color: var(--color-text-secondary);
        }

        .tag {
            display: flex;
            padding: 0.15rem 0.5rem 0.25rem;
            font-weight: 600;
            border: 1px solid var(--color-text-secondary);
            border-radius: 30px;
            margin-right: 0.5rem;
        }
        
    </style>

    <div id="root">
        ${Project(
          'Live Parade State - <a href="https://github.com/nibmz7/live-parade-state" target="blank">source code</a>',
          `This was my first proper web app and this played a big part in my learning journey. Firebase allowed me to focus on the front-end portion whilst also exposing me to the various cloud services. This army-style attendance taking system is now used by my unit which has over 50+ personells and I believe it can be used by the whole SAF organization but that's a tall order.`,
          ['HTML', 'CSS', 'JS', 'Firebase', 'Node.js'],
          [
            {
              src: 'assets/live_parade_state/webp/screenshot_1.webp',
              alt: 'Live parade state web app user home screen',
            },
            {
              src: 'assets/live_parade_state/webp/screenshot_2.webp',
              alt: 'Live parade state web app user attendance input dialogue',
            },
            {
              src: 'assets/live_parade_state/webp/screenshot_3.webp',
              alt: 'Live parade state web app admin home screen',
            },
            {
              src: 'assets/live_parade_state/webp/screenshot_4.webp',
              alt: 'Live parade state web app admin edit user dialogue',
            },
            {
              src: 'assets/live_parade_state/webp/screenshot_5.webp',
              alt: 'Live parade state web app sign out dialogue',
            },
            {
              src: 'assets/live_parade_state/webp/screenshot_6.webp',
              alt: 'Live parade state web app sign in screen',
            },
          ]
        )}

        ${Project(
          'SG Prayer Times - <a href="https://github.com/nibmz7/sgprayertimes" target="blank">source code</a>',
          `This is a utility app that was rewritten 2 years ago to make use of Kotlin. Built for the Muslim community in Singapore. I am very out of touch with Android development nowadays and with things like jetpack compose coming up, I'd say my source code is pretty much outdated and it isn't good to begin with. I no longer update the app but I upload the prayer times database file onto the server every december so the app can 'refresh' itself for the start of the new year.`,
          ['Android', 'Kotlin'],
          [
            {
              src: 'assets/sg_prayer_times/webp/screenshot_1.webp',
              alt: 'SG Prayer times app home screen',
            },
            {
              src: 'assets/sg_prayer_times/webp/screenshot_2.webp',
              alt: 'SG Prayer times app widget',
            },
            {
              src: 'assets/sg_prayer_times/webp/screenshot_3.webp',
              alt: 'SG Prayer times app qibla compass',
            },
            {
              src: 'assets/sg_prayer_times/webp/screenshot_4.webp',
              alt: 'SG Prayer times app nearby mosques list',
            },
          ]
        )}

        ${Project(
          'DIY Fitness',
          'This was an old Android app I made back when I was still in school and this was prior to me discovering git version control. The source code is long gone but I managed to salvage some screenshots.',
          ['Android', 'Java'],
          [
            {
              src: 'assets/diy_fitness_app/webp/screenshot_1.webp',
              alt: 'DIY Fitness app home screen',
            },
            {
              src: 'assets/diy_fitness_app/webp/screenshot_2.webp',
              alt: 'DIY Fitness app workout regime screen',
            },
            {
              src: 'assets/diy_fitness_app/webp/screenshot_3.webp',
              alt: 'DIY Fitness app meal plan screen',
            },
          ]
        )}

        ${Project(
          'FIFA helper',
          'This was the first Android app that I published a few years ago when I was still studying for my diploma. It got over 20k downloads over the course of the 2 years before I took it off the play store. I added an in-app purchase feature for a team planner just before it got unpublished and that surprisingly generated a profit of just under 200 bucks.',
          ['Android', 'Java'],
          [
            {
              src: 'assets/fifa_app/webp/screenshot_1.webp',
              alt: 'FIFA app screenshots',
            },
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
