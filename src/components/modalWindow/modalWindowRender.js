import { store } from '../..'
import { arrReadyOrders, objBasketData } from '../../constants'
import InBasketBtnModal from '../buttons/btnLastInModal/inBasketBtnModal'
import ProductInBasket from '../buttons/btnLastInModal/productInBasket'
import Counter from '../buttons/counter/counter'
import TypeCounter from '../buttons/counter/typeCounter'
import InitialDataSetting from '../initialDataSetting'
import ModalMenu from '../menu/modalMenu'
import ModalWindow from './modalWindow'

class ModalWindowRender {
  constructor() {
    this.initialization()
  }
  initialization() {
    const initialDataSetting = new InitialDataSetting()
    const containerModalWindow = document.getElementById(
      'container-modal-window'
    )
    const typeCounter = new TypeCounter()
    new ModalWindow(containerModalWindow)
    new ModalMenu()
    new Counter(typeCounter.counter())
    new InBasketBtnModal(() => {
      arrReadyOrders.push(objBasketData)
      store.setState('arrAllOrders', arrReadyOrders)
      store.setState('cartInitialValues', objBasketData)
      console.log('state', store.getState())
      initialDataSetting.useInitialDataSetting()
    })
    document
      .getElementById('close-my-modal-btn')
      .addEventListener('click', function () {
        initialDataSetting.useInitialDataSetting()
      })
  }
}

export default ModalWindowRender
