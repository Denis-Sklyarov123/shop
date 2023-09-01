import {
  arrNameInBasket,
  // fillingsContainer,
  objBasketData,
  productCount,
} from '../constants'
import { store } from '..'

class InitialDataSetting {
  useInitialDataSetting() {
    const fillingsContainer = document.getElementById('size-products')
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
    productCount = 1
    let counterFinal = document.querySelector('.input-in-modal-window')
    let newFinalSum = document.getElementById(
      'the-final-price-of-the-product-in-the-modal-window'
    )
    objBasketData = {}
    counterFinal.innerHTML = productCount
    newFinalSum.innerHTML = newSum
    store.setState('orderCategoryIndex', 0)
    fillingsContainer.innerHTML = ''
    store.setState('currentCategoryModal', 'sizes')
  }
}

export default InitialDataSetting
