import ModalMenuItem from './modalMenuItem'
import { titleList } from '../../constants/index'
import { store } from '../..'
import ModalTitle from './modalTitle'

class ModalMenu {
  constructor(container, prodContainer) {
    if (container) {
      this.container = container
    }
    if (prodContainer) {
      this.prodContainer = prodContainer
    }

    this.render()
  }

  render() {
    const state = store.getState()
    state.arrModalMenuItems.map((item, index) => {
      new ModalMenuItem(this.container, item.nameCategory, () => {
        this.prodContainer.innerHTML = ''
        new ModalTitle()
        store.setState('orderCategoryIndex', index)
        this.prodContainer.innerHTML = ''
        store.setState('currentCategoryModal', item.keyCategory)
      })
    })
  }
}

export default ModalMenu
