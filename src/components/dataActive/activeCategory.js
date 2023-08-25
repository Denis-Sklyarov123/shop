import Card from '../allCards/card'
import { productsContainer } from '../../constants'
import { store } from '../..'

class ActiveCategory {
  constructor() {
    store.register(this.render)
  }

  render() {
    const items = store.getState()
    items.data.menu
      .filter(item => item.category == items.currentCattegory)
      .map(item => {
        new Card(productsContainer, item)
      })
  }
}

export default ActiveCategory
