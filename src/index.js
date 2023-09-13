import {
  arrMenuItems,
  arrModalMenuItems,
  cartInitialValues,
  arrNameInBasket,
  arrAllOrders,
  categoryIndexSelectedCard,
} from './constants'
import Api from './api/api'
import ActiveCategory from './components/dataActive/activeCategory'
import Store from './store/index'
import MainMenu from './components/menu/mainMenu'
import ActiveCards from './components/dataActive/activeCards'
import ResultSum from './components/dataActive/resultSum'
import ModalWindowRender from './components/modalWindow/modalWindowRender'
import ActiveModal from './components/dataActive/activeModal'
import CounterSum from './components/dataActive/counterSum'
import RenderBasket from './components/dataActive/renderBasket'
import ModalFillingColor from './components/menu/modalFillingColor'

export const store = new Store({
  arrMenuItems,
  currentCategory: 'sandwiches',
  arrModalMenuItems,
  arrNameInBasket,
  orderCategoryIndex: 0,
  currentCategoryModal: 'sizes',
  cartInitialValues,
  isOpen: false,
  arrAllOrders,
  categoryIndexSelectedCard,
})
export const api = new Api()

new ActiveCategory() //Регистрация событий
new ActiveCards()
new ActiveModal()
new CounterSum()
new RenderBasket()
new ResultSum()
// new ModalFillingColor()

new ModalWindowRender() //Cоздание модального окна, меню и карточек в нём.
new MainMenu() // Создания главного и карточек в нём.

api //Получение данных с JSON файла.
  .getData()
  .then(data => {
    store.setState('data', data)
  })
  .catch(error => {
    alert(error, 'Error 404')
  })
