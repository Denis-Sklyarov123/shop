import { v4 as uuidv4 } from 'uuid'
import { titleList } from '../../../constants'
import { store } from '../../..'

class BtnBackAndForward {
  list = titleList
  id = uuidv4()
  state = {
    index: 0,
    container: undefined,
  }

  constructor(container, index, onClick) {
    if (container) {
      this.state.container = container
    }
    if (index) {
      this.state.index = index
    }
    if (onClick) {
      this.state.onClick = onClick
    }
    this.render()
  }

  render() {
    const state = store.getState()
    if (state.orderCategoryIndex == 0) {
      document.getElementById('size-menu').classList.add('one-button')
      this.state.container.innerHTML = `<button class="forward-button" id="go-to-sauce-block">
      <div class="indent-for-word-forward">ВПЕРЕД</div>
      <img
        class="arrow"
        src="img/keyboard-right-arrow-button-1_icon-icons.com_72690.svg"
      />
    </button>`
      this.element = document.getElementById('go-to-sauce-block')
      this.element.addEventListener('click', () => {
        this.state.onClick('forward')
      })
    } else if (state.orderCategoryIndex > 0 && state.orderCategoryIndex < 5) {
      this.state.container.innerHTML = `<button class="back-button" id="go-to-back-bread-block">
      <img class="arrow" src="img/left_icon-icons.com_61213.svg" />
      <div class="indent-for-word-back">НАЗАД</div>
    </button>
    <button class="forward-button" id="go-to-sauce-block">
      <div class="indent-for-word-forward">ВПЕРЕД</div>
      <img
        class="arrow"
        src="img/keyboard-right-arrow-button-1_icon-icons.com_72690.svg"
      />
    </button>`
      document.getElementById('size-menu').classList.remove('one-button')
      this.item = document.getElementById('go-to-back-bread-block')
      this.item.addEventListener('click', () => {
        this.state.onClick('back')
      })
      this.element = document.getElementById('go-to-sauce-block')
      this.element.addEventListener('click', () => {
        this.state.onClick('forward')
      })
    } else if (state.orderCategoryIndex == 5) {
      document.getElementById('size-menu').classList.remove('one-button')
      this.state.container.innerHTML = `<button class="back-button" id="go-to-back-bread-block">
          <img class="arrow" src="img/left_icon-icons.com_61213.svg" />
          <div class="indent-for-word-back">НАЗАД</div>
        </button>`
      this.element = document.getElementById('go-to-back-bread-block')
      this.element.addEventListener('click', () => {
        this.state.onClick('back')
      })
    }
    document.querySelector('p').textContent =
      this.list[state.orderCategoryIndex]
  }
}

export default BtnBackAndForward
