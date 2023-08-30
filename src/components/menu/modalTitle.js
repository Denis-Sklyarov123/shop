import { store } from '../..'
import { modalTitleContainer, titleList } from '../../constants'

class ModalTitle {
  constructor() {
    this.render()
  }

  render() {
    const state = store.getState()
    modalTitleContainer.innerHTML = titleList[state.orderCategoryIndex]
  }
}

export default ModalTitle
