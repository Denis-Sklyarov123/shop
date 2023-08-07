import MainMenu from '../components/mainMenu'
// import SetActiveCategory from '../components/setActiveCategory'

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
  }

  inform(message) {
    message.news.map(element => {
      new MainMenu(this.container, element.nameCategory, () => {
        this.prodContainer.innerHTML = ''
        this.setActiveCategory(element.keyCategory)
      })
    })
  }
}

export default ActionMainMenu
