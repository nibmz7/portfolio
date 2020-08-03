import { Info } from './ui/about-view/AboutView.js';
import { Post } from './ui/blog-view/BlogView.js';
import { Project } from './ui/projects-view/ProjectsView.js';

const AboutContent = `
    ${Info('Where am I from?', `I'm from a tiny tropical island in the Southeastern region of Asia with an absolute location of 1.3521° North (latitude) and 103.8198° East (longitude) a.k.a. Singapore.`)}
    ${Info('Alma mater', 'Diploma in Computer Engineering<br>@ Singapore Polytechnic')}
    ${Info('What am I currently doing?', `I'm serving in the army as a conscript until the 1st of February 2021. I try to learn as much as I can in my spare time.`)}
    ${Info('What am I planning to do after this National Service?', `NS has given me a buffer period to prepare for adulthood and I am very much thankful for it. What I plan to do right away is to kickstart a career as a professional software developer/engineer and if possible, pursue a part-time degree in computer science.`)}
    ${Info('Do I have any previous work experiences?', `No, I have none but I am itching and yearning to make my debut as a professional developer working alongside like-minded individuals who have strong passion for developing software and are keen to share their wealth of knowledge as I learn the ropes.`)}
    ${Info('How did I start out coding?', `You may have heard of people starting out with HTML. Funny thing, I started mine with XML about 4 years ago when one day I decided to install Android Studio without knowing a single concept of programming. I built an app with just XML then and after some time of tinkering I discovered what Java was and it all set off from there.`)}
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
