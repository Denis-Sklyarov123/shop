import { cardContainer } from '../../../constants'
import ActiveCards from '../../dataActive/activeCards'
import { arrModalMenuItems } from '../../../constants'

class BtnTypeBackandForward {
  BackAndForth() {
    return (type, index) => {
      cardContainer.innerHTML = ''
      if (type === 'forward') {
        index = ++index
      } else {
        index = --index
      }

      if (index < 0 || index > arrModalMenuItems.length - 1) return

      const category = arrModalMenuItems[index].keyCategory
      new ActiveCards(category, index)
    }
  }
}

export default BtnTypeBackandForward
