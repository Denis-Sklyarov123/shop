import MainMenuItems from './mainMenuItems'
import { store } from '../..'
class MainMenu {
  constructor(container, prodContainer) {
    if (container) {
      this.container = container
    }
    if (prodContainer) {
      this.prodContainer = prodContainer
    }
    store.subscribe(payload => {
      console.log('payload.item', payload.item)
      this.render(payload.item)
    })
  }

  render(data) {
    data.map(element => {
      new MainMenuItems(this.container, element.nameCategory, () => {
        this.prodContainer.innerHTML = ''
        store.publish({ afterCategory: element.keyCategory })
      })
    })
  }
}

export default MainMenu
