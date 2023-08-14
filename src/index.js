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
import Store from './store'
import ActionMainMenu from './store/actions/actionMainMenu'
import Api from './api/api'
import ActiveCategory from './components/dataActive/activeCategory'
import ActionModalMenu from './store/actions/actionModalMenu'
import TypePlusAndMinus from './components/buttons/btnPlus&Minus/typePlusAndMinus'
import FinalBtnModal from './components/buttons/btnLastInModal/finalBtnModal'
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
export const api = new Api()
export const now = new InitialDataSetting()

const typePlusAndMinus = new TypePlusAndMinus()
const lastFinalBtnModal = new FinalBtnModal()

api.getCustomerId().then((data) => {
  autoData.setState('data',data)
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
