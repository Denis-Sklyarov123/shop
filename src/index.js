import {
  arrMenuItems,
  arrModalMenuItems,
  containerMenu,
  cartInitialValues,
  objBasketData,
} from './constants'
import Counter from './components/buttons/counter/counter'
import InBasketBtnModal from './components/buttons/btnLastInModal/inBasketBtnModal'
import Api from './api/api'
import ActiveCategory from './components/dataActive/activeCategory'
import TypeCounter from './components/buttons/counter/typeCounter'
import InitialDataSetting from './components/initialDataSetting'
import Store from './store/index'
import MainMenu from './components/menu/mainMenu'
import ActiveCards from './components/dataActive/activeCards'
import ModalMenu from './components/menu/modalMenu'
import ResultSum from './components/dataActive/resultSum'
import ProductInBasket from './components/buttons/btnLastInModal/productInBasket'
import Basket from './components/basket/basket'
import ModalWindowInitialization from './components/modalWindow/modalWindowInitialization'

new ModalWindowInitialization()

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
new MainMenu(containerMenu)

new ActiveCards()

new ModalMenu()
new Counter(typeCounter.counter())

new ResultSum()
new Basket()

new InBasketBtnModal(() => {
  store.setState('cartInitialValues', objBasketData)
  new ProductInBasket()
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
