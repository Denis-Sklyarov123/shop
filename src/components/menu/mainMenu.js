import { store } from '../..'
// import { fillingsContainer } from '../../constants'
import ItemMainMenu from './ItemMainMenu'

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
    state.arrMenuItems.map(item => {
      new ItemMainMenu(this.container, item.nameCategory, () => {
        productsContainer.innerHTML = ''
        fillingsContainer.innerHTML = ''
        store.setState('currentCategory', item.keyCategory)
      })
    })
  }
}

export default MainMenu
