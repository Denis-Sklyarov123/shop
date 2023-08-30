import {
  arrMenuItems,
  arrModalMenuItems,
  containerMenu,
  productsContainer,
  containerModalMenu,
  fillingsContainer,
  containerCounter,
  containerPriceAndBtnBasket,
  cartInitialValues,
  objBasketData,
} from './constants'
import Counter from './components/buttons/btnPlus&Minus/counter'
import InBasketModal from './components/buttons/btnLastInModal/lastBtnInModal'
import Api from './api/api'
import ActiveCategory from './components/dataActive/activeCategory'
import TypeCounter from './components/buttons/btnPlus&Minus/typeCounter'
import InitialDataSetting from './components/initialDataSetting'
import Store from './store/index'
import MainMenu from './components/menu/mainMenu'
import ActiveCards from './components/dataActive/activeCards'
import ModalMenu from './components/menu/modalMenu'
import ResultSum from './components/dataActive/resultSum'
import QuantityAndName from './components/buttons/btnLastInModal/quantityAndName'

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('in-basket')) {
    document.getElementById('my-modal').classList.add('open')
    document.getElementById('body-id').classList.add('modal-open')
  }
})

document
  .getElementById('close-my-modal-btn')
  .addEventListener('click', function () {
    initialDataSetting.useInitialDataSetting()
  })
window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.getElementById('my-modal').classList.remove('open')
    document.getElementById('body-id').classList.remove('modal-open')
  }
})

document
  .querySelector('#my-modal .modal-box')
  .addEventListener('click', event => {
    event._isClickWithInModal = true
  })
document.getElementById('my-modal').addEventListener('click', event => {
  if (event._isClickWithInModal) return
  event.currentTarget.classList.remove('open')
  document.getElementById('body-id').classList.remove('modal-open')
})

export const store = new Store({
  arrMenuItems,
  currentCategory: 'sandwiches',
  arrModalMenuItems,
  orderCategoryIndex: 0,
  currentCategoryModal: 'sizes',
  cartInitialValues,
})

export const api = new Api()
export const initialDataSetting = new InitialDataSetting()

const typeCounter = new TypeCounter()

new ActiveCategory()
new MainMenu(containerMenu, productsContainer)

new ActiveCards()

new ModalMenu(containerModalMenu, fillingsContainer)
new Counter(containerCounter, typeCounter.counter())

new ResultSum()
new InBasketModal(containerPriceAndBtnBasket, () => {
  store.setState('cartInitialValues', objBasketData)
  new QuantityAndName()
  initialDataSetting.useInitialDataSetting()
})

api
  .getData()
  .then(data => {
    store.setState('data', data)
  })
  .catch(error => {
    alert(error, 'Error 404')
  })
