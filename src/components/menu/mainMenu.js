import { store } from '../..'
// import { fillingsContainer } from '../../constants'
import ItemMainMenu from './ItemMainMenu'
import MenuItemColor from './menuItemColor'

class MainMenu {
  constructor(container) {
    if (container) {
      this.container = container
    }

    this.render()
  }

  render() {
    const fillingsContainer = document.getElementById('size-products')
    const productsContainer = document.getElementById('productsContainer')
    const state = store.getState()
    state.arrMenuItems.map((item, index) => {
      new ItemMainMenu(this.container, item.nameCategory, () => {
        productsContainer.innerHTML = ''
        fillingsContainer.innerHTML = ''
        store.setState('currentCategory', item.keyCategory)
        new MenuItemColor(index)
      })
    })
  }
}

export default MainMenu
