import HomeView from './ui/home-view/HomeView.js';
import './ui/widgets/AppBar.js';
import './ui/widgets/DynamicScreen.js';

class Application {

}

let dynamicScreen = document.querySelector('dynamic-screen');
dynamicScreen.showList(new HomeView());