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

    store.register(this.render())
  }

  render() {
    const items = store.getState()
    console.log('items', items)
    items.arrMenuItems.map(element => {
      new ItemMainMenu(this.container, element.nameCategory, () => {
        // gta = element.keyCategory
        // containerMenu.innerHTML = ''
        // this.prodContainer.innerHTML = ''
        // store.deleteСategory(items)
        // new ActiveCategory()
        store.swapCategory(items, element.keyCategory)
        console.log('items2222', items)

        const qweqwe1 = store.getState()
        console.log('qweqwe1', qweqwe1)
        // new ActiveCategory()
        // store.setState('afterCategory', element.keyCategory)
        // new ActiveCategory()
        const qweqwe2 = store.getState()
        console.log('qweqwe2', qweqwe2)
        // return gta
      })
    })
  }
}

export default MainMenu
