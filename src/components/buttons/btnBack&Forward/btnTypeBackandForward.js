import { cardContainer } from '../../../constants'
import ActiveCards from '../../dataActive/activeCards'
import { arrModalMenuItems } from '../../../constants'
import { store } from '../../..'

class BtnTypeBackandForward {
  BackAndForth() {
    const items = store.getState()
    return type => {
      if (type === 'forward') {
        items.indexName = ++items.indexName
        store.setState('indexName', items.indexName)
      } else {
        items.indexName = --items.indexName
        store.setState('indexName', items.indexName)
      }

      if (items.indexName < 0 || items.indexName > arrModalMenuItems.length - 1)
        return

      cardContainer.innerHTML = ''
      let category = arrModalMenuItems[items.indexName].keyCategory
      store.setState('currentCattegoryModal', category)
    }
  }
}

export default BtnTypeBackandForward
