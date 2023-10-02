import { initialDataSetting, store } from '../..'
import ModalWindowRender from '../modalWindow/modalWindowRender'

class ActiveModal {
  constructor() {
    store.register(this.render)
  }
  render() {
    const state = store.getState()
    if (state.isOpen) {
      document.getElementById('body-id').classList.add('modal-open')
    } else {
      document.getElementById('body-id').classList.remove('modal-open')
    }
    new ModalWindowRender()
  }
}

export default ActiveModal
