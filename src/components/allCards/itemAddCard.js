import { store } from '../..'
import {
  arrNameInBasket,
  // containerSum,
  objBasketData,
  productCount,
} from '../../constants'

class ItemAddCard {
  price = 0

  constructor(nameProduct, priceProduct) {
    this.nameProduct = nameProduct
    this.priceProduct = priceProduct
    this.itemAddCard()
  }

  itemAddCard() {
    // const containerSum = document.getElementById(
    //   'the-final-price-of-the-product-in-the-modal-window'
    // )
    const state = store.getState()
    switch (state.currentCategoryModal) {
      case 'sizes':
        arrNameInBasket.sizes.name = this.nameProduct
        arrNameInBasket.sizes.price = this.priceProduct
        break
      case 'breads':
        arrNameInBasket.breads.name = this.nameProduct
        arrNameInBasket.breads.price = this.priceProduct
        break
      case 'vegetables':
        arrNameInBasket.vegetables.stuffing.push({
          name: this.nameProduct,
          price: this.priceProduct,
        })
        if (arrNameInBasket.vegetables.stuffing.length > 3) {
          arrNameInBasket.vegetables.stuffing.shift()
        }
        break
      case 'sauces':
        arrNameInBasket.sauces.stuffing.push({
          name: this.nameProduct,
          price: this.priceProduct,
        })
        if (arrNameInBasket.sauces.stuffing.length > 3) {
          arrNameInBasket.sauces.stuffing.shift()
        }
        break
      case 'fillings':
        arrNameInBasket.fillings.name = this.nameProduct
        arrNameInBasket.fillings.price = this.priceProduct
        break
    }
    const fillingsContainer = document.getElementById('size-products')
    fillingsContainer.innerHTML = ''
    store.setState('arrNameInBasket', arrNameInBasket)
  }
}

export default ItemAddCard
