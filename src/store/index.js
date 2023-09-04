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

  setState(key, value) {
    console.log(this.state)
    this.state = {
      ...this.state,
      [key]: value,
    }
    this.notifyAll()
  }

  notifyAll() {
    console.log('this.actions', this.actions)
    return this.actions.forEach(action => action())
  }

  register(observer) {
    this.actions.push(observer)
  }

  unregister(observer) {
    this.actions = this.actions.filter(el => !(el instanceof observer))
  }
}

export default Store
