import { arrNameInBasket, productount } from '../constants'
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
    counterFinal.innerHTML = productount
    newFinalSum.innerHTML = newSum
    let containerLastNewCards = document.getElementById('size-products')
    containerLastNewCards.innerHTML = ''
    api.getCustomerId({}).then(() => {
      new ActiveCards('sizes', 0)
    })
  }
}

export default InitialDataSetting
