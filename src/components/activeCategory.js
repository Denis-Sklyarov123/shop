import { autoData } from '..'
import Card from './card'
import BtnBackAndForward from './btnBackAndForward'
import ModalCard from './modalCards'

class ActiveCategory {
  setActiveCategory(category) {
    const arrMenu = autoData.state.data.menu
    arrMenu
      .filter(item => item.category == category)
      .map(item => {
        new Card(productsContainer, item)
      })
  }

  setActiveCards(category, index, data) {
    if (category === 'ready') {
      new BtnBackAndForward(btnContainer, index, BackAndForth)
      renderReady()
    } else {
      Object.values(data[category]).map(item => {
        new BtnBackAndForward(btnContainer, index, BackAndForth)
        return new ModalCard(cardContainer, item, () => {
          itemAddCart(item.name, item.price)
        })
      })
    }
  }
}

export default ActiveCategory
