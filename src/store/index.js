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

  // changingСategoryСards(category) {
  //   let stateData = { ...this.state }
  //   stateData.afterCategory = category
  //   return stateData
  // }

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
