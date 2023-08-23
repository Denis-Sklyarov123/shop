import { v4 as uuidv4 } from 'uuid'
import ActiveCategory from '../dataActive/activeCategory'

class ItemMainMenu {
  id = uuidv4()
  state = {
    label: '',
    container: undefined,
  }

  constructor(container, label, onClick) {
    if (label) {
      this.state.label = label
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
    // new ActiveCategory()
    const html = `<button class="menu-item" id="${this.id}">
        ${this.state.label}
      </button>`

    this.state.container.insertAdjacentHTML('beforeend', html)

    if (this.state.onClick) {
      this.element = document.getElementById(this.id)
      this.element.addEventListener('click', () => {
        // new ActiveCategory()
        this.state.onClick()
      })
    }
  }
}

export default ItemMainMenu
