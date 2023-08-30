import Card from '../allCards/card'
import { productsContainer } from '../../constants'
import { store } from '../..'

class ActiveCategory {
  constructor() {
    store.register(this.render)
  }

  render() {
    const state = store.getState()
    state.data.menu
      .filter(item => item.category == state.currentCategory)
      .map(item => {
        new Card(productsContainer, item)
      })
  }
}

export default ActiveCategory
