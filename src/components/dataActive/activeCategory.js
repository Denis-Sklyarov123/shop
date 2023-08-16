import { store } from '../..'
import Card from '../allCards/card'
import { productsContainer } from '../../constants'
class ActiveCategory {
  constructor() {
    store.subscribe(payload => {
      console.log('payload.setData.Category', payload.setData)
      console.log('payload.afterCategory', payload.afterCategory)
      this.setActiveCategory(payload.afterCategory, payload.setData)
    })
  }

  setActiveCategory(category, data) {
    data.menu
      .filter(item => item.category == category)
      .map(item => {
        new Card(productsContainer, item)
      })
  }
}

export default ActiveCategory
