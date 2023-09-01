import BtnBackAndForward from '../buttons/btnBack&Forward/btnBackAndForward'
import RenderReady from '../menu/renderReady'
import BtnTypeBackAndForward from '../buttons/btnBack&Forward/btnTypeBackAndForward'
import ModalCard from '../allCards/modalCards'
import ItemAddCard from '../allCards/itemAddCard'
import { store } from '../..'
import ModalFillingColor from '../menu/modalFillingColor'
import ModalSaucesColor from '../menu/modalSaucesColor'
import { arrIndexCategory } from '../../constants'
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
    } else if (
      state.currentCategoryModal === 'sauces' ||
      state.currentCategoryModal === 'vegetables'
    ) {
      Object.values(state.data[state.currentCategoryModal]).map(
        (item, index) => {
          new BtnBackAndForward(
            containerBtnForwardBack,
            state.orderCategoryIndex,
            btnTypeBackAndForward.typeBackAndForth()
          )
          new ModalCard(fillingsContainer, item, () => {
            new ModalSaucesColor(index)
            arrIndexCategory.push(index)
            console.log('arrIndexCategory', arrIndexCategory)
            new ItemAddCard(item.name, item.price)
          })
        }
      )
    } //vot//
  }
}

export default ActiveCards
