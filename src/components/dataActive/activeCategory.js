import { autoData } from '../..'
import Card from '../allCards/card'
import BtnBackAndForward from '../buttons/btnBack&Forward/btnBackAndForward'
import ModalCard from '../allCards/modalCards'
import RenderReady from '../menu/renderReady'
import { btnContainer } from '../../constants'
import ItemAddCart from '../allCards/itemAddCart'
import { cardContainer } from '../../constants'
import BtnTypeBackandForward from '../buttons/btnBack&Forward/btnTypeBackandForward'
import { containerCategory } from '../../constants'

class ActiveCategory {
  setActiveCategory(category) {
    const arrMenu = autoData.state.data.menu
    arrMenu
      .filter(item => item.category == category)
      .map(item => {
        new Card(productsContainer, item)
      })
  }

  setActiveCards(category, index) {
    const test = new BtnTypeBackandForward()
    containerCategory = category
    if (category === 'ready') {
      new BtnBackAndForward(btnContainer, index, test.BackAndForth())
      new RenderReady(cardContainer)
    } else {
      Object.values(autoData.state.data[category]).map(item => {
        new BtnBackAndForward(btnContainer, index, test.BackAndForth())
        return new ModalCard(cardContainer, item, () => {
          new ItemAddCart(item.name, item.price)
        })
      })
    }
  }
}

export default ActiveCategory
