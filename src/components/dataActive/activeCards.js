import BtnBackAndForward from '../buttons/btnBack&Forward/btnBackAndForward'
import RenderReady from '../menu/renderReady'
import BtnTypeBackAndForward from '../buttons/btnBack&Forward/btnTypeBackAndForward'
import ModalCard from '../allCards/modalCards'
import ItemAddCard from '../allCards/itemAddCard'
import { store } from '../..'
import ModalFillingColor from '../menu/modalFillingColor'
import ModalSaucesColor from '../menu/modalSaucesColor'
import { arrSaucesIndex, arrVegetablesIndex } from '../../constants'
import ModalVegetablesColor from '../menu/modalVegetablesColor'
// import { fillingsContainer } from '../../constants'

class ActiveCards {
  constructor() {
    store.register(this.renderCards)
  }

  renderCards() {
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
    } else if (
      state.currentCategoryModal === 'sizes' ||
      state.currentCategoryModal === 'breads' ||
      state.currentCategoryModal === 'fillings'
    ) {
      Object.values(state.data[state.currentCategoryModal]).map(
        (item, index) => {
          new BtnBackAndForward(
            containerBtnForwardBack,
            state.orderCategoryIndex,
            btnTypeBackAndForward.typeBackAndForth()
          )
          new ModalCard(fillingsContainer, item, () => {
            new ModalFillingColor(index)
            new ItemAddCard(item.name, item.price)
          })
        }
      )
    } else if (state.currentCategoryModal === 'vegetables') {
      arrVegetablesIndex = []
      Object.values(state.data[state.currentCategoryModal]).map(
        (item, index) => {
          new BtnBackAndForward(
            containerBtnForwardBack,
            state.orderCategoryIndex,
            btnTypeBackAndForward.typeBackAndForth()
          )
          new ModalCard(fillingsContainer, item, () => {
            new ModalVegetablesColor(index)
            new ItemAddCard(item.name, item.price)
          })
        }
      )
    } else if (state.currentCategoryModal === 'sauces') {
      arrSaucesIndex = []
      Object.values(state.data[state.currentCategoryModal]).map(
        (item, index) => {
          new BtnBackAndForward(
            containerBtnForwardBack,
            state.orderCategoryIndex,
            btnTypeBackAndForward.typeBackAndForth()
          )
          new ModalCard(fillingsContainer, item, () => {
            new ModalSaucesColor(index)
            new ItemAddCard(item.name, item.price)
          })
        }
      )
    } //vot//
  }
}

export default ActiveCards
