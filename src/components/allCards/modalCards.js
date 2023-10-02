import { v4 as uuidv4 } from 'uuid'

class ModalCard {
  id = uuidv4()
  state = {
    item: '',
    container: undefined,
  }

  constructor(container, item, isActive, onClick) {
    if (item) {
      this.state.item = item
    }
    if (isActive) {
      this.isActive = isActive ? isActive : false
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
    const html = `
    <button class="${
      this.isActive
        ? 'product-size-card-buttons active-card-color'
        : 'product-size-card-buttons'
    }" id="${this.id}">
      <div class="options-background-little-bread">
        <img class="img-filling" src="/img${this.state.item.image}" />
      </div>
      <div class="the-final-filling-in-the-product">${
        this.state.item.name
      }</div>
      <div class="price-size-letters">
        <div class="price-size-letters">Цена:</div>
        <div class="price-filling">${this.state.item.price}</div>
        <div class="price-size-letters">руб.</div>
      </div>
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

export default ModalCard
