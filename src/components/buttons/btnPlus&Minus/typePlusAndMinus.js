import { store } from '../../..'
import {
  arrNameInBasket,
  containerSum,
  varPrice,
  productount,
  objBasketData,
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
      const items = store.getState()
      let finalPriceInBasket =
        items.arrFinalBasket.keyFinalPriceInBasket + this.price
      console.log('finalPriceInBasket', finalPriceInBasket)
      console.log('1234', items.arrFinalBasket.keyFinalPriceInBasket)
      objBasketData = {
        name: 'Овощной',
        keyFinalPriceInBasket: finalPriceInBasket,
        count: productount,
      }
      counterPAM.innerHTML = productount
    }
  }
}

export default TypePlusAndMinus
