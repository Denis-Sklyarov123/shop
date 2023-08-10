import ModalMenu from '../../components/menu/modalMenu'
import { titleList } from '../../constants/index'

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
  }

  inform(message) {
    message.news.map((item, index) => {
      new ModalMenu(this.container, item.nameCategory, () => {
        this.prodContainer.innerHTML = ''
        this.setActiveCards(item.keyCategory, index)
        document.querySelector('p').textContent = titleList[index]
      })
    })
  }
}

export default ActionModalMenu
