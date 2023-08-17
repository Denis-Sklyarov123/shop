import { v4 as uuidv4 } from 'uuid'

class Card {
  id = uuidv4()
  state = {
    item: '',
    container: undefined,
  }

  constructor(container, item) {
    if (item) {
      this.state.item = item
    }
    if (container) {
      this.state.container = container
    }
    this.render()
  }

  render() {
    const html = `
      <div class="card-product">
      <img class="subway" src="img/SUBWAY1.png" />
      <img class="opptions-background-img" src="/img${this.state.item.image}" />
      <div class="names">${this.state.item.name}</div>
      <div class="ingredients">${this.state.item.description}</div>
      <div class="price">Цена: ${this.state.item.price} руб.</div>
      <div class="quantity">КОЛИЧЕСТВО</div>
      <div class="buttons">
        <img
          class="minus"
          src="/img/minus.svg"
        />
        <input value="1" maxlength="3" class="input" />
        <img
          class="plus"
          src="/img/plus.svg"
        />
      </div>
      <button id="${this.id}" class="in-basket">
        В КОРЗИНУ
      </button>
    </div>`

    this.state.container.insertAdjacentHTML('beforeend', html)

    this.element = document.getElementById(this.id)
    this.element.addEventListener('click', () => {
      document.getElementById('my-modal').classList.add('open')
      document.getElementById('body-id').classList.add('modal-open')
    })
  }
}

export default Card
