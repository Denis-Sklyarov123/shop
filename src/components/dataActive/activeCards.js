import BtnBackAndForward from '../buttons/btnBack&Forward/btnBackAndForward'
import RenderReady from '../menu/renderReady'
import BtnTypeBackandForward from '../buttons/btnBack&Forward/btnTypeBackandForward'
import ModalCard from '../allCards/modalCards'
import ItemAddCard from '../allCards/itemAddCard'
import { store } from '../..'
import { btnContainer, cardContainer } from '../../constants'

class ActiveCards {
  constructor() {
    store.register(this.render)
  }

  render() {
    const items = store.getState()
    const test = new BtnTypeBackandForward()
    if (items.currentCattegoryModal === 'ready') {
      new BtnBackAndForward(btnContainer, items.indexName, test.BackAndForth())
      new RenderReady(cardContainer)
    } else {
      Object.values(items.data[items.currentCattegoryModal]).map(item => {
        new BtnBackAndForward(
          btnContainer,
          items.indexName,
          test.BackAndForth()
        )
        return new ModalCard(cardContainer, item, () => {
          new ItemAddCard(item.name, item.price)
        })
      })
    }
  }
}

export default ActiveCards
