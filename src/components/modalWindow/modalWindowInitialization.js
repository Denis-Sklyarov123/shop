import { initialDataSetting, store } from '../..'
import ModalWindow from './modalWindow'

class ModalWindowInitialization {
  constructor() {
    this.initialization()
  }
  initialization() {
    const containerModalWindow = document.getElementById(
      'container-modal-window'
    )
    new ModalWindow(containerModalWindow)

    document
      .getElementById('close-my-modal-btn')
      .addEventListener('click', function () {
        store.setState('isOpen', false)
      })
  }
}

export default ModalWindowInitialization
