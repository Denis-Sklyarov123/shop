import { initialDataSetting, store } from '../..'
import { objBasketData } from '../../constants'

class CloseModal {
  constructor() {
    store.register(this.render)
  }
  render() {
    const state = store.getState()
    if (!state.isOpen) {
      document.getElementById('my-modal').classList.remove('open')
      document.getElementById('body-id').classList.remove('modal-open')
    }
  }
}

export default CloseModal
