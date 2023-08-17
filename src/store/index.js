class Store {
  constructor(initState = {}) {
    this.state = {
      ...initState,
    }

    this.actions = []
  }

  get state() {
    return { ...this.state }
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
