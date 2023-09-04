import { store } from '../..'

class ResultSum {
  constructor() {
    store.register(this.render)
  }

  render() {
    const state = store.getState()
    document.getElementById('id-final-purchase-price').innerHTML =
      state.cartInitialValues.keyFinalPriceInBasket
  }
}

export default ResultSum
