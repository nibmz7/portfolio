import { Info } from './ui/about-view/AboutView.js';
import { Post } from './ui/blog-view/BlogView.js';
import { Project } from './ui/projects-view/ProjectsView.js';

const AboutContent = `
    ${Info('Alma mater', 'Computer Engineering<br>@ Singapore Polytechnic')}
    ${Info('Where am I now?', 'Serving in the army as a conscript until 30 Jan 2021.')}
    ${Info('Have I worked before?', 'No, I have not but I am itching and yearning to work as a developer or a software engineer. I really want to work alongside peers who share the same passion and I want to know what it is like to collobarate with other developers in a professional setting.')}
`;

const BlogContent = `
${Post('Basics of Linux GUI Stack', 'From Windows to Linux','https://www.google.com')}
  ${Post('UEFI & GPT', 'From Windows to Linux')}
  ${Post('Basics of Linux GUI Stack', 'From Windows to Linux')}
  ${Post('UEFI & GPT', 'From Windows to Linux')}
  ${Post('Basics of Linux GUI Stack', 'From Windows to Linux')}
  ${Post('UEFI & GPT', 'From Windows to Linux')}
  ${Post('Basics of Linux GUI Stack', 'From Windows to Linux')}
  ${Post('UEFI & GPT', 'From Windows to Linux')}
`;

const ProjectsContent = `
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
`;

export { AboutContent, BlogContent, ProjectsContent };
