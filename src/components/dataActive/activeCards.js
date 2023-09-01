import BtnBackAndForward from '../buttons/btnBack&Forward/btnBackAndForward'
import RenderReady from '../menu/renderReady'
import BtnTypeBackAndForward from '../buttons/btnBack&Forward/btnTypeBackAndForward'
import ModalCard from '../allCards/modalCards'
import ItemAddCard from '../allCards/itemAddCard'
import { store } from '../..'
// import { fillingsContainer } from '../../constants'

class ActiveCards {
  constructor() {
    store.register(this.render)
  }

  render() {
    const fillingsContainer = document.getElementById('size-products')
    const containerBtnForwardBack = document.getElementById('size-menu')
    const state = store.getState()
    let btnTypeBackAndForward = new BtnTypeBackAndForward()
    if (state.currentCategoryModal === 'ready') {
      new BtnBackAndForward(
        containerBtnForwardBack,
        state.orderCategoryIndex,
        btnTypeBackAndForward.typeBackAndForth()
      )
      new RenderReady(fillingsContainer)
    } else {
      Object.values(state.data[state.currentCategoryModal]).map(item => {
        new BtnBackAndForward(
          containerBtnForwardBack,
          state.orderCategoryIndex,
          btnTypeBackAndForward.typeBackAndForth()
        )
        new ModalCard(fillingsContainer, item, () => {
          new ItemAddCard(item.name, item.price)
        })
      })
    }
  }
}

export default ActiveCards
