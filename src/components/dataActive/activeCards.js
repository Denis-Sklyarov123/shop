import { store } from '../..'
import BtnBackAndForward from '../buttons/btnBack&Forward/btnBackAndForward'
import ModalCard from '../allCards/modalCards'
import RenderReady from '../menu/renderReady'
import { btnContainer } from '../../constants'
import ItemAddCard from '../allCards/itemAddCard'
import { cardContainer } from '../../constants'
import BtnTypeBackandForward from '../buttons/btnBack&Forward/btnTypeBackandForward'
import { containerCategory } from '../../constants'
class ActiveCards {
  constructor(category, index) {
    this.category = category
    this.index = index
    store.subscribe(payload => {
      console.log('payload.setData.Cards', payload.setData)
      this.setActiveCards(this.category, this.index, payload.setData)
    })
  }

  setActiveCards(category, index, data) {
    const test = new BtnTypeBackandForward()
    containerCategory = category
    if (category === 'ready') {
      new BtnBackAndForward(btnContainer, index, test.BackAndForth())
      new RenderReady(cardContainer)
    } else {
      Object.values(data[category]).map(item => {
        new BtnBackAndForward(btnContainer, index, test.BackAndForth())
        return new ModalCard(cardContainer, item, () => {
          new ItemAddCard(item.name, item.price)
        })
      })
    }
  }
}

export default ActiveCards
