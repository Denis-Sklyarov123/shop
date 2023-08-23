import Card from '../allCards/card'
import { productsContainer } from '../../constants'
import { store } from '../..'

// class ActiveCategory {
//   constructor(category) {
//     const arrMenu = store.state.data.menu
//     arrMenu
//       .filter(item => item.category == category)
//       .map(item => {
//         new Card(productsContainer, item)
//       })
//   }
// }

// export default ActiveCategory

class ActiveCategory {
  constructor() {
    // store.unregister(this.setActiveCategory)
    store.register(this.setActiveCategory())
  }

  setActiveCategory() {
    const items = store.getState()
    console.log('itemsinActiveCategory', items)
    items.data.menu
      .filter(item => item.category == items.afterCategory)
      .map(item => {
        new Card(productsContainer, item)
      })
  }
}

export default ActiveCategory
