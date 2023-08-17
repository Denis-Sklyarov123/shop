import MainMenuItems from './mainMenuItems'
import { store } from '../..'
import { containerMenu } from '../../constants'
class MainMenu {
  constructor(container, prodContainer) {
    if (container) {
      this.container = container
    }
    if (prodContainer) {
      this.prodContainer = prodContainer
    }
    store.subscribe(payload => {
      console.log('data', payload.setData)
      console.log('payload.item', payload.item)
      this.render(payload)
    })
  }

  render(leftovers) {
    // const leftovers = store.getData()

    leftovers.item.map(element => {
      new MainMenuItems(this.container, element.nameCategory, () => {
        containerMenu.innerHTML = ''
        this.prodContainer.innerHTML = ''
        store.publish({ ...leftovers, afterCategory: element.keyCategory })
      })
    })
  }
}

export default MainMenu
