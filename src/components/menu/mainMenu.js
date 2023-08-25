import { store } from '../..'
import { containerMenu, gta } from '../../constants'
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

    // store.register(this.render())
    this.render()
  }

  render() {
    const items = store.getState()
    items.arrMenuItems.map(element => {
      new ItemMainMenu(this.container, element.nameCategory, () => {
        this.prodContainer.innerHTML = ''
        store.setState('currentCattegory', element.keyCategory)
      })
    })
  }
}

export default MainMenu
