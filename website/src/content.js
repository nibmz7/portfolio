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
    ${Post('Basics of Linux GUI Stack', 'From Windows to Linux', 'https://dev.to/_nur_ilyas_/basics-of-linux-gui-stack-594o')}
    ${Post('UEFI & GPT', 'From Windows to Linux', 'https://dev.to/_nur_ilyas_/uefi-gpt-3af3')}
`;

const ProjectsContent = `
    ${Project(
    'Live Parade State - <a href="https://github.com/nibmz7/live-parade-state" target="blank">source code</a>',
    `This was my first proper web application. Firebase allowed me to develop and roll out this application within a short period of time. This army-style attendance taking system is an internal tool now used by my company (military unit) which has over 50+ personells. The backend of the app, by design, will allow it to be used by virtually an unlimited number of companies whilst having their data isolated from one another. But as of now, it remains an internal tool.`,
    ['HTML', 'CSS', 'JavaScript', 'Firebase', 'Node.js','NoSQL'],
    [
        {
        src: 'assets/live_parade_state/screenshot_1',
        alt: 'Live parade state web app user home screen',
        },
        {
        src: 'assets/live_parade_state/screenshot_2',
        alt: 'Live parade state web app user attendance input dialogue',
        },
        {
        src: 'assets/live_parade_state/screenshot_3',
        alt: 'Live parade state web app admin home screen',
        },
        {
        src: 'assets/live_parade_state/screenshot_4',
        alt: 'Live parade state web app admin edit user dialogue',
        },
        {
        src: 'assets/live_parade_state/screenshot_5',
        alt: 'Live parade state web app sign out dialogue',
        },
        {
        src: 'assets/live_parade_state/screenshot_6',
        alt: 'Live parade state web app sign in screen',
        },
    ]
    )}

    ${Project(
        'SG Prayer Times - <a href="https://github.com/nibmz7/sgprayertimes" target="blank">source code</a>',
        `This is a utility app that was rewritten 2 years ago to make use of Kotlin. Built for the Muslim community in Singapore. I am very out of touch with Android development nowadays and with things like jetpack compose coming up, I would assume my source code is pretty much outdated and am not saying it was good to begin with. I do not actively maintain the app now except that before the start of the every year, I will upload the new prayer times database onto a server and the app will refresh its data automatically.`,
        ['Android', 'Kotlin'],
        [
        {
            src: 'assets/sg_prayer_times/screenshot_1',
            alt: 'SG Prayer times app home screen',
        },
        {
            src: 'assets/sg_prayer_times/screenshot_2',
            alt: 'SG Prayer times app widget',
        },
        {
            src: 'assets/sg_prayer_times/screenshot_3',
            alt: 'SG Prayer times app qibla compass',
        },
        {
            src: 'assets/sg_prayer_times/screenshot_4',
            alt: 'SG Prayer times app nearby mosques list',
        },
        ]
    )}

    ${Project(
        'Portfolio website - <a href="https://github.com/nibmz7/portfolio" target="blank">source code</a>',
        `I wrote this website with a mobile first approach and wanted it took act and look like a mobile application. The layout readjusts when it is displayed on a screen big enough. This layout behavior is inspired by Android's own master-detail flow which was designed for tablets.`,
        ['HTML', 'CSS', 'JavaScript'],
        [
        {
            src: 'assets/portfolio_website/screenshot_1',
            alt: 'Portfolio website home screen'
        },
        {
            src: 'assets/portfolio_website/screenshot_2',
            alt: 'Portfolio website detail screen'
        },
        {
            src: 'assets/portfolio_website/screenshot_3',
            alt: 'Portfolio website desktop view'
        }
        ]
    )}

    ${Project(
        'DIY Fitness',
        'This was an old Android app I made back when I was still in school and this was prior to me discovering git version control. The source code is long gone but I managed to salvage some screenshots.',
        ['Android', 'Java'],
        [
        {
            src: 'assets/diy_fitness_app/screenshot_1',
            alt: 'DIY Fitness app home screen',
        },
        {
            src: 'assets/diy_fitness_app/screenshot_2',
            alt: 'DIY Fitness app workout regime screen',
        },
        {
            src: 'assets/diy_fitness_app/screenshot_3',
            alt: 'DIY Fitness app meal plan screen',
        },
        ]
    )}

    ${Project(
        'FIFA helper',
        'This was the first Android app that I published a few years ago. It got over 20k downloads over the course of the 2 years. I added an in-app purchase item for a team planning feature just before taking it off the play store and that surprisingly garnered a revenue of almost 200 bucks.',
        ['Android', 'Java'],
        [
        {
            src: 'assets/fifa_app/screenshot_1',
            alt: 'FIFA app screenshots',
        },
        ]
    )}
`;

export { AboutContent, BlogContent, ProjectsContent };
