import { store } from '../..'
// import { fillingsContainer } from '../../constants'
import ItemMainMenu from './ItemMainMenu'
import MenuItemColor from './menuItemColor'

class MainMenu {
  constructor() {
    this.render()
  }

  render() {
    const containerMenu = document.getElementById('products-menu')
    const fillingsContainer = document.getElementById('size-products')
    const productsContainer = document.getElementById('productsContainer')
    const state = store.getState()
    state.arrMenuItems.map((item, index) => {
      new ItemMainMenu(containerMenu, item, () => {
        productsContainer.innerHTML = ''
        fillingsContainer.innerHTML = ''
        store.setState('currentCategory', item.keyCategory)
        new MenuItemColor(index)
      })
    })
  }
}

export default MainMenu
