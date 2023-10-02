import { v4 as uuidv4 } from 'uuid'
import { store } from '../..'

class ModalMenuItem {
  id = uuidv4()
  state = {
    label: '',
    container: undefined,
  }

  constructor(container, item, onClick) {
    if (container) {
      this.state.container = container
    }
    if (item) {
      this.state.item = item
    }
    if (onClick) {
      this.state.onClick = onClick
    }

    this.render()
  }

  render() {
    const state = store.getState()
    const html = `<button class="item-modal-window-menu ${
      state.currentCategoryModal === this.state.item.keyCategory
        ? 'active-modal-color'
        : ''
    }" id="${this.id}">
    ${this.state.item.nameCategory}
    </button>`

    this.state.container.insertAdjacentHTML('beforeend', html)

    if (this.state.onClick) {
      this.element = document.getElementById(this.id)
      this.element.addEventListener('click', () => {
        this.state.onClick()
      })
    }
  }
}

export default ModalMenuItem
