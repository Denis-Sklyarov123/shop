import { store } from '../..'
import { objBasketData } from '../../constants'
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
      store.setState('cartInitialValues', objBasketData) // Считает objBasketData в typeCounter тут записываем новые данные в стор. Это тригирит добавление этих данных в корзину. Если так не сделать, то при записи в стор при посчёте выполнится событие, что делать в той функцие нам не нужно.
      new ProductInBasket()
      store.setState('isOpen', false)
      initialDataSetting.useInitialDataSetting()
    })
    document
      .getElementById('close-my-modal-btn')
      .addEventListener('click', function () {
        store.setState('isOpen', false)
        initialDataSetting.useInitialDataSetting()
      })
  }
}

export default ModalWindowRender
