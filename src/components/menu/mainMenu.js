<<<<<<< HEAD
import MainMenuItems from './mainMenuItems'
import { store } from '../..'
import { containerMenu } from '../../constants'
=======
import { v4 as uuidv4 } from 'uuid'

>>>>>>> parent of a419347 (working with classes)
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
