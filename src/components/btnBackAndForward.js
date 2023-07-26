import { v4 as uuidv4 } from 'uuid'

class BtnBackAndForward {
  id = uuidv4()
  state = {
    label: '',
    container: undefined,
  }

  constructor(container, label, onClick) {
    if (label) {
      this.state.label = label
    }
    if (container) {
      this.state.container = container
    }
    if (onClick) {
      this.state.onClick = onClick
    }

    this.render(this.state.label)
  }

  containerIndex = 0

  BackAndForth(type) {
    if (type === 'forward') {
      containerIndex = ++containerIndex
    } else {
      containerIndex = --containerIndex
    }
    const category = arrModalMenuItems[containerIndex].keyCategory
    setActiveBtn(containerIndex)
    setActiveCards(category)
  }

  render(indexCategory) {
    containerIndex = indexCategory

    if (indexCategory == 0) {
      document.getElementById('size-menu').classList.add('one-button')
      btnContainer.innerHTML = `<button onClick="BackAndForth('forward')" class="forward-button" id="go-to-sauce-block">
          <div class="indent-for-word-forward">ВПЕРЕД</div>
          <img
            class="arrow"
            src="img/keyboard-right-arrow-button-1_icon-icons.com_72690.svg"
          />
        </button>`
    } else if (indexCategory > 0 && indexCategory < 5) {
      document.getElementById('size-menu').classList.remove('one-button')
      btnContainer.innerHTML = `<button onClick="BackAndForth('back')" class="back-button" id="go-to-back-bread-block">
          <img class="arrow" src="img/left_icon-icons.com_61213.svg" />
          <div class="indent-for-word-back">НАЗАД</div>
        </button>
        <button onClick="BackAndForth('forward')" class="forward-button" id="go-to-sauce-block">
          <div class="indent-for-word-forward">ВПЕРЕД</div>
          <img
            class="arrow"
            src="img/keyboard-right-arrow-button-1_icon-icons.com_72690.svg"
          />
        </button>`
    } else if (indexCategory == 5) {
      btnContainer.innerHTML = `<button onClick="BackAndForth('back')" class="back-button" id="go-to-back-bread-block">
          <img class="arrow" src="img/left_icon-icons.com_61213.svg" />
          <div class="indent-for-word-back">НАЗАД</div>
        </button>`
    }
    document.querySelector('p').textContent = titleList[indexCategory]
  }
}

export default BtnBackAndForward
