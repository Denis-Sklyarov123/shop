import { arrMenuItems, arrModalMenuItems, cartInitialValues } from './constants'
import Api from './api/api'
import ActiveCategory from './components/dataActive/activeCategory'
import Store from './store/index'
import MainMenu from './components/menu/mainMenu'
import ActiveCards from './components/dataActive/activeCards'
import ResultSum from './components/dataActive/resultSum'
import ModalWindowInitialization from './components/modalWindow/modalWindowInitialization'
import ActiveModal from './components/dataActive/activeModal'
import Basket from './components/basket/basket'

export const store = new Store({
  arrMenuItems,
  currentCategory: 'sandwiches',
  arrModalMenuItems,
  orderCategoryIndex: 0,
  currentCategoryModal: 'sizes',
  cartInitialValues,
  isOpen: false,
})
export const api = new Api()

new ActiveCategory() //Регистрация событий
new ActiveCards()
new ResultSum()
new ActiveModal()

new MainMenu() // Создания главного и карточек в нём.
new Basket() // Создание корзины.
new ModalWindowInitialization() //Cоздание модального окна, меню и карточек в нём.

api //Получение данных с JSON файла.
  .getData()
  .then(data => {
    store.setState('data', data)
  })
  .catch(error => {
    alert(error, 'Error 404')
  })
