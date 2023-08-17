class ResultSum {
  state = {
    container: undefined,
  }

  constructor(container, label) {
    if (container) {
      this.state.container = container
    }
    if (label) {
      this.state.label = label
    }
    // if (finalSum) {
    //   this.state.finalSum = finalSum
    // }

    this.render()
  }

  render() {
    const html = `<div class="quantity-and-name-one-product">
        <div class="main-name-product" id="main-name-product-id">${this.state.label.name}</div>
        <div class="order-name-and-quantity" id="total-order-quantity">
          ${this.state.label.count}
        </div>
        </div>`

    // this.state.finalSum += this.state.label.price
    // document.getElementById('id-final-purchase-price').innerHTML = this.state.finalSum
    this.state.container.insertAdjacentHTML('beforeend', html)
  }
}

export default ResultSum
