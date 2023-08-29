import { store } from '../..'
import { containerValueBasket } from '../../constants'

class ResultSum {
  constructor() {
    // if (finalSum) {
    //   this.state.finalSum = finalSum
    // }

    store.register(this.render)
  }

  render() {
    const items = store.getState()
    const html = `<div class="quantity-and-name-one-product">
        <div class="main-name-product" id="main-name-product-id">${items.arrFinalBasket.name}</div>
        <div class="order-name-and-quantity" id="total-order-quantity">
          ${items.arrFinalBasket.count}
        </div>
        </div>`

    // containerValueBasket.innerHTML = ''
    document.getElementById('id-final-purchase-price').innerHTML =
      items.arrFinalBasket.keyFinalPriceInBasket
    console.log('hyhy')
    containerValueBasket.insertAdjacentHTML('beforeend', html)
  }
}

export default ResultSum
