import { store } from '../../..'
import {
  arrNameInBasket,
  productCount,
  objBasketData,
  containerSum,
} from '../../../constants'

class TypeCounter {
  constructor() {
    this.counter()
  }
  counter() {
    // const containerSum = document.getElementById(
    //   'the-final-price-of-the-product-in-the-modal-window'
    // )
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
