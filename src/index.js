import {
  arrMenuItems,
  arrModalMenuItems,
  containerMenu,
  productsContainer,
  containerModalMenu,
  cardContainer,
} from './constants'
import PlusAndMinus from './components/plusAndMinus'
import LastBtnInModal from './components/lastBtnInModal'
import Store from './store'
import ActionMainMenu from './store/actionMainMenu'
import Fetch from './components/fetch'
import ActiveCategory from './components/activeCategory'
import ActionModalMenu from './store/actionModalMenu'
import TypePlusAndMinus from './components/typePlusAndMinus'
import FinalBtnModal from './components/finalBtnModal'
import InitialDataSetting from './components/initialDataSetting'

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

export const autoNews = new Store()
export const autoNewsModal = new Store()
export const autoData = new Store()
export const activeCategory = new ActiveCategory()
export const fetch = new Fetch()

fetch.getCustomerId(autoData).then(() => {
  activeCategory.setActiveCategory('sandwiches')
  activeCategory.setActiveCards('sizes', 0)
})

autoNews.register(
  new ActionMainMenu(
    containerMenu,
    productsContainer,
    activeCategory.setActiveCategory
  )
)

autoNewsModal.register(
  new ActionModalMenu(
    containerModalMenu,
    cardContainer,
    activeCategory.setActiveCards
  )
)

autoNews.setState('news', arrMenuItems)
autoNewsModal.setState('news', arrModalMenuItems)

// Сумма цен ингридиентов
export const containerSum = document.getElementById(
  'the-final-price-of-the-product-in-the-modal-window'
)

export let containerCategory

export let varPrice = 0

//Кноки плюс и минус
const containerPlusAndMinus = document.getElementById('id-buttons-and-quantity')
export let productount = 1

const typePlusAndMinus = new TypePlusAndMinus()

new PlusAndMinus(containerPlusAndMinus, typePlusAndMinus.plusAndMinus())

//Кнопка добавления заказа из модального окна на основную страницу
export const containerValueBasket = document.getElementById('name-and-value-id')
export let arrFinalBasket = []

const lastFinalBtnModal = new FinalBtnModal()

const containerPriceAndBtnBasket = document.getElementById(
  'id-price-and-basket'
)
new LastBtnInModal(
  containerPriceAndBtnBasket,
  lastFinalBtnModal.colculFinalBtnModal
)
export const now = new InitialDataSetting()

now.useInitialDataSetting()
