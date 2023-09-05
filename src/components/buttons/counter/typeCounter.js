import { store } from '../../..'
import {
  arrNameInBasket,
  productCount,
  objBasketData,
  // containerSum,
} from '../../../constants'

class TypeCounter {
  constructor() {
    this.counter()
  }
  counter() {
    return action => {
      if (action === 'minus' && productCount > 1) {
        productCount = --productCount
      } else if (action != 'minus') {
        productCount = ++productCount
      }

      const fillingsContainer = document.getElementById('size-products')
      fillingsContainer.innerHTML = ''
      store.setState('arrNameInBasket', arrNameInBasket)
    }
  }
}

export default TypeCounter
