import { store } from '../..'
import { fillingsContainer } from '../../constants'
import ItemMainMenu from './ItemMainMenu'

class MainMenu {
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
    state.arrMenuItems.map(item => {
      new ItemMainMenu(this.container, item.nameCategory, () => {
        this.prodContainer.innerHTML = ''
        fillingsContainer.innerHTML = ''
        store.setState('currentCategory', item.keyCategory)
      })
    })
  }
}

export default MainMenu
