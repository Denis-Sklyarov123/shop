import {
  arrMenuItems,
  arrModalMenuItems,
  containerMenu,
  productsContainer,
  containerModalMenu,
  cardContainer,
  containerPlusAndMinus,
  containerPriceAndBtnBasket,
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
// export const autoNewsModal = new Store()
// export const autoData = new Store()

// export const activeCategory = new ActiveCategory()
export const api = new Api()
export const now = new InitialDataSetting()

const typePlusAndMinus = new TypePlusAndMinus()
const lastFinalBtnModal = new FinalBtnModal()

api.getCustomerId().then(data => {
  store.setState('data', data)

  console.log('arrMenuItems', arrMenuItems)
  store.setState('arrMenuItems', arrMenuItems)
  store.setState('afterCategory', 'sandwiches')
  store.setState('arrModalMenuItems', arrModalMenuItems)

  new MainMenu(containerMenu, productsContainer)

  new ActiveCategory()

  new PlusAndMinus(containerPlusAndMinus, typePlusAndMinus.plusAndMinus())

  new LastBtnInModal(
    containerPriceAndBtnBasket,
    lastFinalBtnModal.colculFinalBtnModal
  )
})

// autoNews.register(
//   new ActionMainMenu(
//     containerMenu,
//     productsContainer,
//     activeCategory.setActiveCategory
//   )
// )

// autoNewsModal.register(
//   new ActionModalMenu(
//     containerModalMenu,
//     cardContainer,
//     activeCategory.setActiveCards
//   )
// )
// console.log('arrMenuItems', arrMenuItems)
// store.setState('arrMenuItems', arrMenuItems)
// store.setState('afterCategory', 'sandwiches')
// store.setState('arrModalMenuItems', arrModalMenuItems)

// new MainMenu(containerMenu, productsContainer)

// // console.log('12123', store.getState())

// new PlusAndMinus(containerPlusAndMinus, typePlusAndMinus.plusAndMinus())

// new LastBtnInModal(
//   containerPriceAndBtnBasket,
//   lastFinalBtnModal.colculFinalBtnModal
// )
