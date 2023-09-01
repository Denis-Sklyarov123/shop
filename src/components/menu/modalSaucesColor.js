import { arrIndexCategory } from '../../constants'

class ModalSaucesColor {
  constructor(index) {
    this.index = index
    this.changeColor()
  }
  changeColor() {
    const items = document.querySelectorAll('.product-size-card-buttons')
    if (arrIndexCategory.length < 3) {
      // items.forEach(elem => elem.classList.remove('active-card-color'))
      items[this.index].classList.add('active-card-color')
    } else {
      items.forEach(elem => elem.classList.remove('active-card-color'))
      items[this.index].classList.add('active-card-color')
    }
  }
}

export default ModalSaucesColor
