import Card from '../allCards/card'
import { store } from '../..'

class ActiveCategory {
  constructor() {
    store.register(this.renderCategory)
  }

  renderCategory() {
    const productsContainer = document.getElementById('productsContainer')
    const state = store.getState()
    state.data.menu
      .filter(item => item.category == state.currentCategory)
      .map(item => {
        new Card(productsContainer, item)
      })
  }
}

export default ActiveCategory
