import ModalMenuItem from './modalMenuItem'
import { titleList } from '../../constants/index'
import { store } from '../..'

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
    const items = store.getState()
    items.arrModalMenuItems.map((item, index) => {
      new ModalMenuItem(this.container, item.nameCategory, () => {
        this.prodContainer.innerHTML = ''
        document.querySelector('p').textContent = titleList[index]
        // this.setActiveCards(item.keyCategory, index)
        store.setState('indexName', index)
        store.setState('currentCattegoryModal', item.keyCategory)
        console.log('items', items)
      })
    })
  }
}

export default ModalMenu
