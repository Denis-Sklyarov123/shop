import { store } from '../..'
import {
  arrNameInBasket,
  containerSum,
  objBasketData,
  productount,
} from '../../constants'

class ItemAddCard {
  price = 0

  constructor(nameProduct, priceProduct) {
    this.nameProduct = nameProduct
    this.priceProduct = priceProduct
    this.itemAddCard()
  }

  itemAddCard() {
    const items = store.getState()
    switch (items.currentCattegoryModal) {
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
    let counterPAM = document.querySelector('.input-in-modal-window')
    let priceSize = arrNameInBasket.sizes.price
    const finalSum = (priceSize + arrNameInBasket.fillings.price) * productount
    containerSum.innerHTML = finalSum
    this.price = finalSum
    counterPAM.innerHTML = productount
    let finalPriceInBasket =
      items.arrFinalBasket.keyFinalPriceInBasket + this.price
    objBasketData = {
      name: 'Овощной',
      keyFinalPriceInBasket: finalPriceInBasket,
      count: productount,
    }
  }
}

export default ItemAddCard
