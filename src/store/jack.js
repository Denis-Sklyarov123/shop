import MainMenu from '../components/mainMenu'

class Jack {
  constructor(containerMenu, onClick, productsContainer, setActiveCategory) {
    this.state.containerMenu = containerMenu
    this.state.onClick = onClick
    this.state.productsContainer = productsContainer
    this.state.setActiveCategory = setActiveCategory

    this.inform(message)
  }
  inform(message) {
    message.news.map(element => {
      new MainMenu(this.state.containerMenu, this.state.onClick, () => {
        this.state.productsContainer.innerHTML = ''
        this.state.setActiveCategory(this.state.onClick)
      })
    })
  }
}

export default Jack
