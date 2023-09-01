import { store } from '../..'
import { titleList } from '../../constants'

class ModalTitle {
  constructor() {
    this.render()
  }

  render() {
    const modalTitleContainer = document.getElementById('modalTitleContainer')
    const state = store.getState()
    modalTitleContainer.innerHTML = titleList[state.orderCategoryIndex]
  }
}

export default ModalTitle
