// import { fillingsContainer } from '../../../constants'
import { arrModalMenuItems } from '../../../constants'
import { store } from '../../..'

class BtnTypeBackAndForward {
  typeBackAndForth() {
    const fillingsContainer = document.getElementById('size-products')
    const state = store.getState()
    return type => {
      if (type === 'forward') {
        state.orderCategoryIndex = ++state.orderCategoryIndex
        store.setState('orderCategoryIndex', state.orderCategoryIndex)
      } else {
        state.orderCategoryIndex = --state.orderCategoryIndex
        store.setState('orderCategoryIndex', state.orderCategoryIndex)
      }

      if (
        state.orderCategoryIndex < 0 ||
        state.orderCategoryIndex > arrModalMenuItems.length - 1
      )
        return

      fillingsContainer.innerHTML = ''
      let category = arrModalMenuItems[state.orderCategoryIndex].keyCategory
      store.setState('currentCategoryModal', category)
    }
  }
}

export default BtnTypeBackAndForward
