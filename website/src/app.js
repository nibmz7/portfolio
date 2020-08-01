import './ui/widgets/AppBar.js';
import './ui/widgets/Footer.js';
import './ui/home-view/HomeView.js';
import './ui/about-view/AboutView.js';
import './ui/blog-view/BlogView.js';
import './ui/projects-view/ProjectsView.js';
import './ui/widgets/DynamicScreen.js';
import Navigator from './Navigator.js';

let appBar = document.querySelector('app-bar');
let dynamicScreen = document.querySelector('dynamic-screen');
let navigator = new Navigator();

class Application {
  constructor() {
    appBar.onBackPressed(() => navigator.back());
    dynamicScreen.onItemClick((title) => this.showDetail(title));
    navigator.onBack(() => this.hideDetail());
    if (navigator.currentTitle !== 'home') {
      this.showDetail(navigator.currentTitle);
    }
  }

  hideDetail() {
    appBar.hideTitle();
    dynamicScreen.hideDetailFragment();
  }

  showDetail(title) {
    appBar.showTitle(title);
    dynamicScreen.showDetailFragment(title);
    navigator.go(title);
  }
}

new Application();

function checkHostName() {
  console.log(String.fromCharCode(110, 105, 109, 122, 46, 100, 101, 118));
  console.table(window.location);
}

function checkIfSameDomain() {
  let domain = String.fromCharCode(110, 105, 109, 122, 46, 100, 101, 118);
  // window.location.host.includes(domain) || window.location.replace('https://www.'+domain);
}

checkHostName();
checkIfSameDomain();
