import ModalMenuItem from './modalMenuItem'
import { titleList } from '../../constants/index'
import { store } from '../..'
import ModalTitle from './modalTitle'
import ModalMenuItemColor from './modalMenuItemColor'

class ModalMenu {
  constructor() {
    this.render()
  }

  render() {
    const fillingsContainer = document.getElementById('size-products')
    const containerModalMenu = document.getElementById('modal-menu')
    const state = store.getState()
    state.arrModalMenuItems.map((item, index) => {
      new ModalMenuItem(containerModalMenu, item.nameCategory, () => {
        fillingsContainer.innerHTML = ''
        new ModalTitle()
        store.setState('orderCategoryIndex', index)
        fillingsContainer.innerHTML = ''
        store.setState('currentCategoryModal', item.keyCategory)
        new ModalMenuItemColor(index)
      })
    })
  }
}

export default ModalMenu
