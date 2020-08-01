const pages = ['about', 'blog', 'projects'];

export default class Navigator {
  constructor() {
    let title = window.location.search.replace('?goto=', '');
    this.reset();
    if (pages.some((page) => title.includes(page))) {
      this.go(title);
    }
  }

  go(title) {
    this.currentTitle = title;
    history.pushState({ title }, null, title);
  }

  back() {
    history.back();
  }

  reset() {
    this.currentTitle = 'home';
    history.replaceState({ title: 'home' }, null, '/');
  }

  onBack(callback) {
    window.onpopstate = (event) => {
      let title = event.state.title;
      if (title !== 'home') {
        if (this.currentTitle !== 'home') {
          callback();
        }
        this.reset();
      } else {
        if (this.currentTitle === 'home') this.back();
        else {
          this.currentTitle = 'home';
          callback();
        }
      }
    };
  }
}
