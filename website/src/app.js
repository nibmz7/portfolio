import './ui/widgets/AppBar.js';
import './ui/widgets/Footer.js';
import './ui/home-view/HomeView.js';
import './ui/about-view/AboutView.js';
import './ui/widgets/DynamicScreen.js';

let appBar = document.querySelector('app-bar');
let dynamicScreen = document.querySelector('dynamic-screen');

appBar.onBackPressed(() => {
    dynamicScreen.closeDetailFragment();
});

dynamicScreen.onItemClick(item => {
    appBar.showTitle(item);
});

