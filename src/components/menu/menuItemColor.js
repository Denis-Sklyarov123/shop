class MenuItemColor {
  constructor(index) {
    this.index = index
    this.changeColor()
  }
  changeColor() {
    const items = document.querySelectorAll('.menu-item')

    items.forEach(elem => elem.classList.remove('active'))
    items[this.index].classList.add('active')
  }
}

export default MenuItemColor
