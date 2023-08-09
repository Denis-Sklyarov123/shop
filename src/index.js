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
export const now = new InitialDataSetting()

const typePlusAndMinus = new TypePlusAndMinus()
const lastFinalBtnModal = new FinalBtnModal()

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

new PlusAndMinus(containerPlusAndMinus, typePlusAndMinus.plusAndMinus())

new LastBtnInModal(
  containerPriceAndBtnBasket,
  lastFinalBtnModal.colculFinalBtnModal
)
