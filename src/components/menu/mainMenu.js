import { store } from '../..'
import { containerMenu } from '../../constants'
import ActiveCategory from '../dataActive/activeCategory'
import ItemMainMenu from './ItemMainMenu'

class MainMenu {
  constructor(container, prodContainer) {
    if (container) {
      this.container = container
    }
    if (prodContainer) {
      this.prodContainer = prodContainer
    }

    store.register(this.render())
  }

  render() {
    const items = store.getState()
    console.log('items', items)
    items.arrMenuItems.map(element => {
      new ItemMainMenu(this.container, element.nameCategory, () => {
        // containerMenu.innerHTML = ''
        // this.prodContainer.innerHTML = ''
        // store.changingСategoryСards(element.keyCategory)
        store.setState('afterCategory', element.keyCategory)
      })
    })
  }
}

export default MainMenu
