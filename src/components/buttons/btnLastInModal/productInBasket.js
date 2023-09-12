import { store } from '../../..'

class ProductInBasket {
  constructor(item) {
    this.item = item
    this.render()
  }

  render() {
    const containerValueBasket = document.getElementById('name-and-value-id')
    const html = `<div class="quantity-and-name-one-product">
        <div class="main-name-product" id="main-name-product-id">${this.item.name}</div>
        <div class="order-name-and-quantity" id="total-order-quantity">
          ${this.item.count}
        </div>
        </div>`
    if (this.item.count == 0) {
      return
    } else {
      containerValueBasket.insertAdjacentHTML('beforeend', html)
    }
  }
}

export default ProductInBasket
