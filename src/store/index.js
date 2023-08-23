class Store {
  constructor(initState = {}) {
    this.state = {
      ...initState,
    }

    this.actions = []
  }

  getState() {
    return { ...this.state }
  }

  deleteСategory(items) {
    delete items.afterCategory
    this.state = items
    return items
  }

  swapCategory(items, category) {
    items.afterCategory = category
    this.state = items
    // this.notifyAll()
    return items
  }

  setState(key, value) {
    this.state = {
      ...this.state,
      [key]: value,
    }
    this.notifyAll()
  }

  notifyAll() {
    return this.actions.forEach(subs => subs.render?.({ ...this.state }))
  }

  register(observer) {
    this.actions.push(observer)
  }

  unregister(observer) {
    this.actions = this.actions.filter(el => !(el instanceof observer))
  }
}

export default Store
