class ModalMenuItemColor {
  constructor(index) {
    this.index = index
    this.changeColor()
  }
  changeColor() {
    const items = document.querySelectorAll('.item-modal-window-menu')

    items.forEach(elem => elem.classList.remove('active-modal-color'))
    items[this.index].classList.add('active-modal-color')
  }
}

export default ModalMenuItemColor
