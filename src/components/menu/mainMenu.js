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
    // console.log(store.getState())
    const state = store.getState()
    state.arrMenuItems.map(item => {
      new ItemMainMenu(this.container, item.nameCategory, () => {
        this.prodContainer.innerHTML = ''
        state.setState('currentCattegory', item.keyCategory)
      })
    })
  }
}

export default MainMenu
