import { initialDataSetting } from '../..'
import ModalWindow from './modalWindow'

class ModalWindowInitialization {
  constructor() {
    this.initialization()
  }
  initialization() {
    // const containerModalWindow = document.getElementById(
    //   'container-modal-window'
    // )
    // new ModalWindow(containerModalWindow)
    document.addEventListener('click', e => {
      if (e.target.classList.contains('in-basket')) {
        document.getElementById('my-modal').classList.add('open')
        document.getElementById('body-id').classList.add('modal-open')
      }
    })

    document
      .getElementById('close-my-modal-btn')
      .addEventListener('click', function () {
        initialDataSetting.useInitialDataSetting()
      })
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        document.getElementById('my-modal').classList.remove('open')
        document.getElementById('body-id').classList.remove('modal-open')
      }
    })

    document
      .querySelector('#my-modal .modal-box')
      .addEventListener('click', event => {
        event._isClickWithInModal = true
      })
    document.getElementById('my-modal').addEventListener('click', event => {
      if (event._isClickWithInModal) return
      event.currentTarget.classList.remove('open')
      document.getElementById('body-id').classList.remove('modal-open')
    })
  }
}

export default ModalWindowInitialization
