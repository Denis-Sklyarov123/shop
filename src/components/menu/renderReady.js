import { arrNameInBasket } from '../../constants'

class RenderReady {
  constructor(container) {
    this.container = container

    this.render()
  }

  render() {
    const sectionReady = `
        <div class="selection-columns">
          <div class="container-img">
            <div class="options-background-img-card">
              <img class="img-filling-final" src="img/i/result_sandwich.jpg" </img>
            </div>
          </div>
          <div class="selection-columns-in-modal">
          <div class="your-product-is-ready">Ваш сендвич готов!</div>
          <div class="name-of-final-products" id="container-all-toppings"></div>
          <div class="name-final-product">Овощной</div>
          </div>
        </div>`
    this.container.innerHTML = sectionReady

    let listItemsCart = Object.values(arrNameInBasket)
      .map(item => {
        if (item.stuffing) {
          const category = item.nameСhapter
          if (item.stuffing.length) {
            const arrNames = item.stuffing.map(element => {
              return element.name
            })
            return `<div
                    class="size-of-the-final-product"
                    >
                    ${category}: ${arrNames.join(', ')}
                    </div>`
          } else {
            return `<div
                class="size-of-the-final-product"
                id="sizes-products"
                >
                ${category}:
                </div>`
          }
        } else {
          return `<div
              class="size-of-the-final-product"
              id="sizes-products"
              >
              ${item.nameСhapter}: ${item.name}
              </div>`
        }
      })
      .join('')

    const containerAllToppings = document.getElementById(
      'container-all-toppings'
    )
    containerAllToppings.innerHTML = listItemsCart
  }
}

export default RenderReady
