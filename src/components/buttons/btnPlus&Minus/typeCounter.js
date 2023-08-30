import { store } from '../../..'
import {
  arrNameInBasket,
  containerSum,
  productCount,
  objBasketData,
} from '../../../constants'

class TypeCounter {
  counter() {
    return action => {
      let counter = document.querySelector('.input-in-modal-window')
      if (action === 'minus' && productCount > 1) {
        productCount = --productCount
      } else if (action != 'minus') {
        productCount = ++productCount
      }
      let currentPrice = arrNameInBasket.sizes.price
      const finalSum =
        (currentPrice + arrNameInBasket.fillings.price) * productCount
      containerSum.innerHTML = finalSum
      this.price = finalSum
      const state = store.getState()
      let finalPriceInBasket =
        state.cartInitialValues.keyFinalPriceInBasket + this.price
      // console.log('finalPriceInBasket', finalPriceInBasket)
      // console.log('1234', state.cartInitialValues.keyFinalPriceInBasket)
      objBasketData = {
        name: 'Овощной',
        keyFinalPriceInBasket: finalPriceInBasket,
        count: productCount,
      }
      counter.innerHTML = productCount
    }
  }
}

export default TypeCounter
