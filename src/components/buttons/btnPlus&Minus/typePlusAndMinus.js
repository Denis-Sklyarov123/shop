import {
  arrNameInBasket,
  containerSum,
  varPrice,
  productount,
} from '../../../constants'

class TypePlusAndMinus {
  plusAndMinus() {
    return action => {
      let counterPAM = document.querySelector('.input-in-modal-window')
      if (action === 'minus' && productount > 1) {
        productount = --productount
      } else if (action != 'minus') {
        productount = ++productount
      }
      let priceSize = arrNameInBasket.sizes.price
      const finalSum =
        (priceSize + arrNameInBasket.fillings.price) * productount
      containerSum.innerHTML = finalSum
      this.price = finalSum
      varPrice = this.price
      counterPAM.innerHTML = productount
    }
  }
}

export default TypePlusAndMinus
