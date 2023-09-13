import { store } from '../..'

class ModalFillingColor {
  constructor() {
    store.register(this.changeColor)
  }
  changeColor() {
    const state = store.setState()
    const items = document.querySelectorAll('.product-size-card-buttons')
    // items.forEach(elem => elem.classList.remove('active-card-color'))
    console.log(
      items[state.categoryIndexSelectedCard[state.currentCategoryModal]]
    )
    console.log(
      items[state.categoryIndexSelectedCard[state.currentCategoryModal]]
        .classList
    )
    // items[
    //   state.categoryIndexSelectedCard[state.currentCategoryModal]
    // ]?.classList?.add('active-card-color')
  }
}

export default ModalFillingColor
