import { store } from '../../..'
import { containerValueBasket } from '../../../constants'

class ProductInBasket {
  constructor() {
    this.render()
  }

  render() {
    const state = store.getState()
    const containerValueBasket = document.getElementById('name-and-value-id')
    const html = `<div class="quantity-and-name-one-product">
        <div class="main-name-product" id="main-name-product-id">${state.cartInitialValues.name}</div>
        <div class="order-name-and-quantity" id="total-order-quantity">
          ${state.cartInitialValues.count}
        </div>
        </div>`
    // containerValueBasket.innerHTML = ''
    console.log('store', state)
    containerValueBasket.insertAdjacentHTML('beforeend', html)
  }
}

export default ProductInBasket
