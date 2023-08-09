import { autoData } from '..'
import Card from './card'
import BtnBackAndForward from './btnBackAndForward'
import ModalCard from './modalCards'
import RenderReady from './renderReady'
import { btnContainer } from '../constants'
import ItemAddCart from './itemAddCart'
import { cardContainer } from '../constants'
import BtnTypeBackandForward from './btnTypeBackandForward'
import { containerCategory } from '..'

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
