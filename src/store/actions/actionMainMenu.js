import { store } from '../..'
import MainMenu from '../../components/menu/mainMenu'

class ActionMainMenu {
  constructor(container, prodContainer, setActiveCategory) {
    if (container) {
      this.container = container
    }
    if (prodContainer) {
      this.prodContainer = prodContainer
    }
    if (setActiveCategory) {
      this.setActiveCategory = setActiveCategory
    }

    store.register(store => {
      // this.state.items = store.items
      //

      this.render()
    })
  }

  render() {
    const items = store.state.items
    console.log('items', items)
    this.state.items.map(element => {
      new MainMenu(this.container, element.nameCategory, () => {
        this.prodContainer.innerHTML = ''
        this.setActiveCategory(element.keyCategory)
      })
    })
  }
}

export default ActionMainMenu
