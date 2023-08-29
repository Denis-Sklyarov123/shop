import {
  arrNameInBasket,
  cardContainer,
  objBasketData,
  productount,
} from '../constants'
import { store } from '..'
import { api } from '..'
import ActiveCards from './dataActive/activeCards'

class InitialDataSetting {
  useInitialDataSetting() {
    document.getElementById('my-modal').classList.remove('open')
    document.getElementById('body-id').classList.remove('modal-open')
    arrNameInBasket = {
      sizes: { name: '', price: 0, nameСhapter: 'Размер' },
      breads: { name: '', price: 0, nameСhapter: 'Хлеб' },
      vegetables: { nameСhapter: 'Овощи', id: '0', stuffing: [] },
      sauces: { nameСhapter: 'Соусы', id: '1', stuffing: [] },
      fillings: { name: '', price: 0, nameСhapter: 'Начинка' },
    }
    let newSum = 0
    productount = 1
    let counterFinal = document.querySelector('.input-in-modal-window')
    let newFinalSum = document.getElementById(
      'the-final-price-of-the-product-in-the-modal-window'
    )
    objBasketData = {}
    counterFinal.innerHTML = productount
    newFinalSum.innerHTML = newSum
    let containerLastNewCards = document.getElementById('size-products')
    containerLastNewCards.innerHTML = ''
    store.setState('indexName', 0)
    cardContainer.innerHTML = ''
    store.setState('currentCattegoryModal', 'sizes')
  }
}

export default InitialDataSetting
