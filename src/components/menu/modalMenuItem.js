import { v4 as uuidv4 } from 'uuid'

class ModalMenuItem {
  id = uuidv4()
  state = {
    label: '',
    container: undefined,
  }

  constructor(container, label, onClick) {
    if (container) {
      this.state.container = container
    }
    if (label) {
      this.state.label = label
    }
    if (onClick) {
      this.state.onClick = onClick
    }

    this.render()
  }

  render() {
    const html = `<button class="item-modal-window-menu" id="${this.id}">
    ${this.state.label}
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
