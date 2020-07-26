import DynamicScreen from './ui/widgets/DynamicScreen.js';
import AppBar from './ui/widgets/AppBar.js';

class Application {

}

let dynamicScreen = new DynamicScreen();
let appBar = new AppBar();
document.body.appendChild(appBar);
document.body.appendChild(dynamicScreen);