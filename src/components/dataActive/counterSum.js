import { store } from '../..'
import { objBasketData, productCount } from '../../constants'

class CounterSum {
  constructor() {
    store.register(this.counterSum)
  }
  counterSum() {
    const state = store.getState()
    const containerSum = document.getElementById(
      'the-final-price-of-the-product-in-the-modal-window'
    )
    let counter = document.querySelector('.input-in-modal-window')
    let currentPrice = state.arrNameInBasket.sizes.price
    const finalSum =
      (currentPrice + state.arrNameInBasket.fillings.price) * productCount
    containerSum.innerHTML = finalSum
    counter.innerHTML = productCount
    let finalPriceInBasket =
      state.cartInitialValues.keyFinalPriceInBasket + finalSum
    objBasketData = {
      name: 'Овощной',
      keyFinalPriceInBasket: finalPriceInBasket,
      count: productCount,
    }
    counter.innerHTML = productCount
  }
}

export default CounterSum
