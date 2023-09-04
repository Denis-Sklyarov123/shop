import { arrVegetablesIndex } from '../../constants'

class ModalVegetablesColor {
  constructor(index) {
    this.index = index
    this.changeColor()
  }
  changeColor() {
    const items = document.querySelectorAll('.product-size-card-buttons')
    console.log(items)

    if (arrVegetablesIndex.length < 3) {
      arrVegetablesIndex.push(this.index)
      items[this.index].classList.add('active-card-color')
    } else if (arrVegetablesIndex.length >= 3) {
      const activeCards = document.querySelectorAll('.active-card-color')
      activeCards[0].classList.remove('active-card-color')

      arrVegetablesIndex.push(this.index)
      items[this.index].classList.add('active-card-color')
    }
  }
}

export default ModalVegetablesColor
