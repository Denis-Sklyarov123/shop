import BtnBackAndForward from '../buttons/btnBack&Forward/btnBackAndForward'
import RenderReady from '../menu/renderReady'
import BtnTypeBackAndForward from '../buttons/btnBack&Forward/btnTypeBackAndForward'
import ModalCard from '../allCards/modalCards'
import ItemAddCard from '../allCards/itemAddCard'
import { store } from '../..'
import ModalFillingColor from '../menu/modalFillingColor'
import ModalSaucesColor from '../menu/modalSaucesColor'
import {
  arrSaucesIndex,
  arrVegetablesIndex,
  categoryIndexSelectedCard,
} from '../../constants'
import ModalVegetablesColor from '../menu/modalVegetablesColor'

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
      const containerCard = document.getElementById('size-products')
      containerCard.innerHTML = ''
      Object.values(state.data[state.currentCategoryModal]).map(
        (item, index) => {
          new BtnBackAndForward(
            containerBtnForwardBack,
            state.orderCategoryIndex,
            btnTypeBackAndForward.typeBackAndForth()
          )
          const isActive =
            categoryIndexSelectedCard[state.currentCategoryModal] === index

          new ModalCard(fillingsContainer, item, isActive, () => {
            new ItemAddCard(item.name, item.price)
            categoryIndexSelectedCard[state.currentCategoryModal] = index
            store.setState(
              'categoryIndexSelectedCard',
              categoryIndexSelectedCard
            )
          })
        }
      )
    } else if (state.currentCategoryModal === 'vegetables') {
      const containerCard = document.getElementById('size-products')
      containerCard.innerHTML = ''
      Object.values(state.data[state.currentCategoryModal]).map(
        (item, index) => {
          new BtnBackAndForward(
            containerBtnForwardBack,
            state.orderCategoryIndex,
            btnTypeBackAndForward.typeBackAndForth()
          )
          const isActive =
            categoryIndexSelectedCard[state.currentCategoryModal].includes(
              index
            )

          new ModalCard(fillingsContainer, item, isActive, () => {
            new ItemAddCard(item.name, item.price)
            if (
              (categoryIndexSelectedCard[state.currentCategoryModal].length = 3)
            ) {
              categoryIndexSelectedCard[state.currentCategoryModal].shift()
            }
            categoryIndexSelectedCard[state.currentCategoryModal].push(index)
            store.setState(
              'categoryIndexSelectedCard',
              categoryIndexSelectedCard
            )
          })
        }
      )
    } else if (state.currentCategoryModal === 'sauces') {
      const containerCard = document.getElementById('size-products')
      containerCard.innerHTML = ''
      Object.values(state.data[state.currentCategoryModal]).map(
        (item, index) => {
          new BtnBackAndForward(
            containerBtnForwardBack,
            state.orderCategoryIndex,
            btnTypeBackAndForward.typeBackAndForth()
          )
          const isActive =
            categoryIndexSelectedCard[state.currentCategoryModal].includes(
              index
            )
          new ModalCard(fillingsContainer, item, isActive, () => {
            new ItemAddCard(item.name, item.price)
            if (
              (categoryIndexSelectedCard[state.currentCategoryModal].length = 3)
            ) {
              categoryIndexSelectedCard[state.currentCategoryModal].shift()
            }
            categoryIndexSelectedCard[state.currentCategoryModal].push(index)
            store.setState(
              'categoryIndexSelectedCard',
              categoryIndexSelectedCard
            )
          })
        }
      )
    } //vot//
  }
}

export default ActiveCards
