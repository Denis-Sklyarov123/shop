import { v4 as uuidv4 } from 'uuid'
import { store } from '../..'

class ItemMainMenu {
  id = uuidv4()
  state = {
    label: '',
    container: undefined,
  }

  constructor(container, item, onClick) {
    if (item) {
      this.state.item = item
    }
    if (container) {
      this.state.container = container
    }
    if (onClick) {
      this.state.onClick = onClick
    }

    this.render()
  }

  render() {
    const state = store.getState()
    // console.log(state.currentCategory)
    const html = `<button class="menu-item ${
      state.currentCategory === this.state.item.keyCategory ? 'active' : ''
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

export default ItemMainMenu
