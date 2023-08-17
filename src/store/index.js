class Store {
  constructor() {
    this.subscribers = []
  }

  subscribe(subscriber) {
    this.subscribers = [...this.subscribers, subscriber]
  }

  unsubscribe(subscriber) {
    this.subscribers = this.subscribers.filter(sub => sub !== subscriber)
  }

  publish(payload) {
    this.subscribers.forEach(subscriber => subscriber(payload))
  }

  getData() {
    return this.subscribers
  }
}

//   constructor(initState = {}) {
//     this.state = {
//       ...initState,
//     }
//     this.actions = []
//   }
//   setState(key, value) {
//     this.state = {
//       ...this.state,
//       [key]: value,
//     }
//     this.notifyAll()
//   }
//   notifyAll() {
//     return this.actions.forEach(subs => subs.render?.({ ...this.state }))
//   }
//   register(observer) {
//     this.actions.push(observer)
//   }
//   unregister(observer) {
//     this.actions = this.actions.filter(el => !(el instanceof observer))
//   }
// }
export default Store
