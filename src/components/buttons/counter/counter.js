import { containerCounter } from '../../../constants'

class Counter {
  state = {
    container: undefined,
  }

  constructor(container, onClick) {
    if (container) {
      this.container = container
    }
    if (onClick) {
      this.state.onClick = onClick
    }

    this.render()
  }

  render() {
    // const containerCounter = document.getElementById('id-buttons-and-quantity')
    const html = `<div class="buttons-and-quantity">
    <div class="quantity-in-modal">КОЛИЧЕСТВО</div>

    <div class="price-buttons">
      <img
        id="id-minus-in-modal-window"
        class="minus-in-modal-window"
        src="img/minus.svg"
      />

      <div class="input-in-modal-window">1</div>

      <img
        id="id-plus-in-modal-window"
        class="plus-in-modal-window"
        src="img/plus.svg"
      />
    </div>
    </div>`

    containerCounter.insertAdjacentHTML('afterbegin', html)

    if (this.state.onClick) {
      this.element = document.getElementById('id-minus-in-modal-window')
      this.element.addEventListener('click', () => {
        this.state.onClick('minus')
      })

      this.item = document.getElementById('id-plus-in-modal-window')
      this.item.addEventListener('click', () => {
        this.state.onClick('plus')
      })
    }
  }
}

export default Counter
