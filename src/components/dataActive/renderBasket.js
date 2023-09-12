import { store } from '../..'
import ProductInBasket from '../buttons/btnLastInModal/productInBasket'

class RenderBasket {
  constructor() {
    store.register(this.render)
  }
  render() {
    const containerBasket = document.getElementById('container-basket')
    const html = `<div class="basket-icon">
            <img class="icon" src="img/krytaia-korzinka.png" />Корзина
          </div>

          <div class="container-values-basket" id="container-final-values">
            <div class="container-quantity-and-name-in-basket">
              <div class="order-name-and-quantity" id="total-order-name">
                <div id="main-name-product">Название:</div>
                <div
                  class="order-name-and-quantit-value"
                  id="total-order-name-value"
                ></div>
              </div>

              <div class="order-name-and-quantity" id="total-order-quantity">
                Количество:
                <div
                  class="order-name-and-quantity-value"
                  id="total-order-quantity-value"
                ></div>
              </div>
            </div>
            <div id="name-and-value-id"></div>
            <div class="total">
              <div class="final-purchase-price">Итого:</div>

              <div class="final-purchase-price" id="id-final-purchase-price">
                0
              </div>

              <div class="final-purchase-price">руб.</div>
            </div>
          </div>
          <div class="order-button">
            <button class="ordering-food">ОФОРМИТЬ ЗАКАЗ</button>
          </div>`
    containerBasket.innerHTML = html
    const state = store.getState()
    state.arrAllOrders.map(item => {
      new ProductInBasket(item)
    })
  }
}

export default RenderBasket
