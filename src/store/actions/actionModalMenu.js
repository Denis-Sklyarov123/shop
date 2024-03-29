import ModalMenu from '../../components/menu/modalMenu'
import { titleList } from '../../constants/index'
import { store } from '../..'
import ActiveCards from '../../components/dataActive/activeCards'

class ActionModalMenu {
  constructor(container, prodContainer, setActiveCards) {
    if (container) {
      this.container = container
    }
    if (prodContainer) {
      this.prodContainer = prodContainer
    }
    if (setActiveCards) {
      this.setActiveCards = setActiveCards
    }

    store.subscribe(payload => {
      this.render(payload.modalItem)
    })
  }

  render(message) {
    message.map((item, index) => {
      new ModalMenu(this.container, item.nameCategory, () => {
        this.prodContainer.innerHTML = ''
        new ActiveCards(item.keyCategory, index)
        document.querySelector('p').textContent = titleList[index]
      })
    })
  }
}

export default ActionModalMenu
