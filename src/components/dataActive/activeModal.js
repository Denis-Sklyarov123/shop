import { initialDataSetting, store } from '../..'

class ActiveModal {
  constructor() {
    store.register(this.render)
  }
  render() {
    const state = store.getState()
    if (state.isOpen) {
      document.getElementById('my-modal').classList.add('open')
      document.getElementById('body-id').classList.add('modal-open')
    } else {
      document.getElementById('my-modal').classList.remove('open')
      document.getElementById('body-id').classList.remove('modal-open')
    }
  }
}

export default ActiveModal
