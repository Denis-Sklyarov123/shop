import BtnBackAndForward from '../buttons/btnBack&Forward/btnBackAndForward'
import RenderReady from '../menu/renderReady'
import BtnTypeBackandForward from '../buttons/btnBack&Forward/btnTypeBackandForward'
import ModalCard from '../allCards/modalCards'
import ItemAddCard from '../allCards/itemAddCard'

class ActiveCards {
  constructor(category, index) {
    const test = new BtnTypeBackandForward()
    containerCategory = category
    if (category === 'ready') {
      new BtnBackAndForward(btnContainer, index, test.BackAndForth())
      new RenderReady(cardContainer)
    } else {
      Object.values(store.state.data[category]).map(item => {
        new BtnBackAndForward(btnContainer, index, test.BackAndForth())
        return new ModalCard(cardContainer, item, () => {
          new ItemAddCard(item.name, item.price)
        })
      })
    }
  }
}

export default ActiveCards
