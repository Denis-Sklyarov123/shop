class ModalWindow {
  constructor(container) {
    if (container) {
      this.container = container
    }
    this.render()
  }
  render() {
    const html = `<section class="all-product-card-windows">
          <div class="main-pancakes-content" id="productsContainer"></div>
        </section>

        <div class="modal" id="my-modal">
          <div class="modal-box">
            <button class="modal-close-btn" id="close-my-modal-btn">
              <img
                class="closse"
                src="img/4115230-cancel-close-cross-delete_114048.png"
              />
            </button>

            <p class="modal-window-text" id="modalTitleContainer"></p>

            <div class="modal-window-menu">
              <div class="items-menu" id="modal-menu"></div>

              <div class="menu-products" id="size-menu"></div>

              <div class="size-cards" id="size-products"></div>
            </div>

            <div class="price-quantity-in-basket" id="id-buttons-and-quantity">
              <div class="price-and-basket" id="id-price-and-basket">
                <div class="price-in-basket-letters">Цена:</div>

                <div
                  class="price-in-the-basket"
                  id="the-final-price-of-the-product-in-the-modal-window"
                >
                  0
                </div>

                <div class="price-in-basket-letters">руб.</div>
              </div>
            </div>
          </div>
        </div>`
    this.container.innerHTML = html
  }
}

export default ModalWindow