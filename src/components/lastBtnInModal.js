class LastBtnInModal {
  state = {
    label: '',
    container: undefined,
  }

  constructor(container, onClick) {
    if (container) {
      this.state.container = container
    }
    if (onClick) {
      this.state.onClick = onClick
    }

    this.render()
  }

  render() {
    const html = `<button
      class="add-to-final-price"
      id="id-add-to-final-price">
      В КОРЗИНУ
      </button>`

    this.state.container.insertAdjacentHTML('beforeend', html)

    if (this.state.onClick) {
      this.element = document.getElementById('id-add-to-final-price')
      this.element.addEventListener('click', () => {
        
        this.state.onClick()
      })
    }
  }
}

export default LastBtnInModal
