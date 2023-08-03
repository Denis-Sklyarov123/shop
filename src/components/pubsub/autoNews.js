class AutoNews {
  
	constructor() {
		this.news = '';
		this.actions = [];
	}

	setNews(text) {
		this.news = text;
		this.notifyAll();
	}

	notifyAll() {
		return this.actions.forEach(subs => subs.inform(this));
	}

	register(observer) {
		this.actions.push(observer);
	}

	unregister(observer) {
		this.actions = this.actions.filter(el => !(el instanceof observer));
	}
};