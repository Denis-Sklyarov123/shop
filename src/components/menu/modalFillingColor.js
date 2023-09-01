class ModalFillingColor {
  constructor(index) {
    this.index = index
    this.changeColor()
  }
  changeColor() {
    const items = document.querySelectorAll('.product-size-card-buttons')
    items.forEach(elem => elem.classList.remove('active-card-color'))
    items[this.index].classList.add('active-card-color')
  }
}

export default ModalFillingColor
