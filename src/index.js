import {
  arrMenuItems,
  arrModalMenuItems,
  containerMenu,
  productsContainer,
  containerModalMenu,
  cardContainer,
  containerPlusAndMinus,
  containerPriceAndBtnBasket,
  arrFinalBasket,
  objBasketData,
  containerValueBasket,
} from './constants'
import PlusAndMinus from './components/buttons/btnPlus&Minus/plusAndMinus'
import LastBtnInModal from './components/buttons/btnLastInModal/lastBtnInModal'
import Api from './api/api'
import ActiveCategory from './components/dataActive/activeCategory'
import TypePlusAndMinus from './components/buttons/btnPlus&Minus/typePlusAndMinus'
import FinalBtnModal from './components/buttons/btnLastInModal/finalBtnModal'
import InitialDataSetting from './components/initialDataSetting'
import Store from './store/index'
import MainMenu from './components/menu/mainMenu'
import ActiveCards from './components/dataActive/activeCards'
import ModalMenu from './components/menu/modalMenu'
// import NameAndNumberInBasket from './components/buttons/btnLastInModal/nameAndNumberInBasket'
import ResultSum from './components/dataActive/resultSum'

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('in-basket')) {
    document.getElementById('my-modal').classList.add('open')
    document.getElementById('body-id').classList.add('modal-open')
  }
})

document
  .getElementById('close-my-modal-btn')
  .addEventListener('click', function () {
    now.useInitialDataSetting()
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

export const store = new Store()
export const api = new Api()
export const now = new InitialDataSetting()

const typePlusAndMinus = new TypePlusAndMinus()

api.getCustomerId().then(data => {
  store.setState('data', data)
  store.setState('arrMenuItems', arrMenuItems)
  store.setState('currentCattegory', 'sandwiches')
  store.setState('arrModalMenuItems', arrModalMenuItems)

  new ActiveCategory()
  new MainMenu(containerMenu, productsContainer)

  store.setState('indexName', 0)
  store.setState('currentCattegoryModal', 'sizes')

  new ActiveCards()
  store.setState('arrFinalBasket', arrFinalBasket)
  new ModalMenu(containerModalMenu, cardContainer)

  new PlusAndMinus(containerPlusAndMinus, typePlusAndMinus.plusAndMinus())

  new ResultSum()
  new LastBtnInModal(containerPriceAndBtnBasket, () => {
    store.setState('arrFinalBasket', objBasketData)
    now.useInitialDataSetting()
  })
})
