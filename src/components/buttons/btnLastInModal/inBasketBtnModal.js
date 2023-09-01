class InBasketBtnModal {
  state = {
    label: '',
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
    // const containerPriceAndBtnBasket = document.getElementById(
    //   'id-price-and-basket'
    // )
    const html = `<button
      class="add-to-final-price"
      id="id-add-to-final-price">
      В КОРЗИНУ
      </button>`

    this.container.insertAdjacentHTML('beforeend', html)

    if (this.state.onClick) {
      this.element = document.getElementById('id-add-to-final-price')
      this.element.addEventListener('click', () => {
        this.state.onClick()
      })
    }
  }
}

export default InBasketBtnModal