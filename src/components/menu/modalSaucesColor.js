import { arrSaucesIndex } from '../../constants'

class ModalSaucesColor {
  constructor(index) {
    this.index = index
    this.changeColor()
  }
  changeColor() {
    const items = document.querySelectorAll('.product-size-card-buttons')
    // console.log(items)

    if (arrSaucesIndex.length < 3) {
      arrSaucesIndex.push(this.index)
      items[this.index].classList.add('active-card-color')
    } else if (arrSaucesIndex.length >= 3) {
      const activeCards = document.querySelectorAll('.active-card-color')
      activeCards[0].classList.remove('active-card-color')

      arrSaucesIndex.push(this.index)
      items[this.index].classList.add('active-card-color')
    }
  }
}

export default ModalSaucesColor
