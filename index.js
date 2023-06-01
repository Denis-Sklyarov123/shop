document
  .getElementById('open-modal-btn-1')
  .addEventListener('click', function () {
    document.getElementById('my-modal').classList.add('open')
  })

document
  .getElementById('close-my-modal-btn')
  .addEventListener('click', function () {
    document.getElementById('my-modal').classList.remove('open')
  })

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.getElementById('my-modal').classList.remove('open')
  }
})

document
  .querySelector('#my-modal .modal-box')
  .addEventListener('click', event => {
    event._isClickWithInModal = true
  })
document.getElementById('my-modal').addEventListener('click', event => {
  if (event._isClickWithInModal) return
  event.currentTarget.classList.remove('open')
})

document
  .getElementById('open-modal-btn-2')
  .addEventListener('click', function () {
    document.getElementById('my-modal').classList.add('open')
  })

document
  .getElementById('open-modal-btn-3')
  .addEventListener('click', function () {
    document.getElementById('my-modal').classList.add('open')
  })

document
  .getElementById('open-modal-btn-4')
  .addEventListener('click', function () {
    document.getElementById('my-modal').classList.add('open')
  })

document
  .getElementById('open-modal-btn-5')
  .addEventListener('click', function () {
    document.getElementById('my-modal').classList.add('open')
  })

document
  .getElementById('open-modal-btn-6')
  .addEventListener('click', function () {
    document.getElementById('my-modal').classList.add('open')
  })

// =========================Смена карточек ингридиентов в модальном окне==============================

document.getElementById('open-size').addEventListener('click', function () {
  document.getElementById('size-menu').classList.add('open')
})

document
  .getElementById('close-my-modal-btn')
  .addEventListener('click', function () {
    document.getElementById('size-menu').classList.remove('open')
  })

// =======================Смена карточек продуктов в главном меню===============Сендвичи====================

document
  .getElementById('open-burger-menu')
  .addEventListener('click', function () {
    document.getElementById('burger-menu-reveal-button').classList.add('open')
  })

document
  .getElementById('open-pancakes-menu')
  .addEventListener('click', function () {
    document
      .getElementById('burger-menu-reveal-button')
      .classList.remove('open')
  })

document
  .getElementById('open-shawarma-menu')
  .addEventListener('click', function () {
    document
      .getElementById('burger-menu-reveal-button')
      .classList.remove('open')
  })
document
  .getElementById('open-sandwiches-menu')
  .addEventListener('click', function () {
    document
      .getElementById('burger-menu-reveal-button')
      .classList.remove('open')
  })
document
  .getElementById('open-chicken-and-potato-menu')
  .addEventListener('click', function () {
    document
      .getElementById('burger-menu-reveal-button')
      .classList.remove('open')
  })
document
  .getElementById('open-tortilla-and-salads-menu')
  .addEventListener('click', function () {
    document
      .getElementById('burger-menu-reveal-button')
      .classList.remove('open')
  })
document
  .getElementById('open-drinks-and-desserts-menu')
  .addEventListener('click', function () {
    document
      .getElementById('burger-menu-reveal-button')
      .classList.remove('open')
  })

document
  .getElementById('open-burger-menu')
  .addEventListener('click', function () {
    document
      .getElementById('invisibility of the initial cards window')
      .classList.add('open')
  })
// ==============================================================================Блины======================

document
  .getElementById('open-pancakes-menu')
  .addEventListener('click', function () {
    document.getElementById('pancakesMenuRevealButton').classList.add('open')
  })

document
  .getElementById('open-burger-menu')
  .addEventListener('click', function () {
    document.getElementById('pancakesMenuRevealButton').classList.remove('open')
  })
document
  .getElementById('open-shawarma-menu')
  .addEventListener('click', function () {
    document.getElementById('pancakesMenuRevealButton').classList.remove('open')
  })
document
  .getElementById('open-sandwiches-menu')
  .addEventListener('click', function () {
    document.getElementById('pancakesMenuRevealButton').classList.remove('open')
  })
document
  .getElementById('open-chicken-and-potato-menu')
  .addEventListener('click', function () {
    document.getElementById('pancakesMenuRevealButton').classList.remove('open')
  })
document
  .getElementById('open-tortilla-and-salads-menu')
  .addEventListener('click', function () {
    document.getElementById('pancakesMenuRevealButton').classList.remove('open')
  })
document
  .getElementById('open-drinks-and-desserts-menu')
  .addEventListener('click', function () {
    document.getElementById('pancakesMenuRevealButton').classList.remove('open')
  })

document
  .getElementById('open-pancakes-menu')
  .addEventListener('click', function () {
    document
      .getElementById('invisibility of the initial cards window')
      .classList.add('open')
  })
// ==============================================================================Шаурма==========================

document
  .getElementById('open-shawarma-menu')
  .addEventListener('click', function () {
    document.getElementById('shawarma-menu-reveal-button').classList.add('open')
  })

document
  .getElementById('open-burger-menu')
  .addEventListener('click', function () {
    document
      .getElementById('shawarma-menu-reveal-button')
      .classList.remove('open')
  })

document
  .getElementById('open-pancakes-menu')
  .addEventListener('click', function () {
    document
      .getElementById('shawarma-menu-reveal-button')
      .classList.remove('open')
  })
document
  .getElementById('open-sandwiches-menu')
  .addEventListener('click', function () {
    document
      .getElementById('shawarma-menu-reveal-button')
      .classList.remove('open')
  })
document
  .getElementById('open-chicken-and-potato-menu')
  .addEventListener('click', function () {
    document
      .getElementById('shawarma-menu-reveal-button')
      .classList.remove('open')
  })
document
  .getElementById('open-tortilla-and-salads-menu')
  .addEventListener('click', function () {
    document
      .getElementById('shawarma-menu-reveal-button')
      .classList.remove('open')
  })
document
  .getElementById('open-drinks-and-desserts-menu')
  .addEventListener('click', function () {
    document
      .getElementById('shawarma-menu-reveal-button')
      .classList.remove('open')
  })

document
  .getElementById('open-shawarma-menu')
  .addEventListener('click', function () {
    document
      .getElementById('invisibility of the initial cards window')
      .classList.add('open')
  })
// ==================================================================================Бургеры==========================

document
  .getElementById('open-sandwiches-menu')
  .addEventListener('click', function () {
    document
      .getElementById('sandwiches-menu-reveal-button')
      .classList.add('open')
  })

document
  .getElementById('open-burger-menu')
  .addEventListener('click', function () {
    document
      .getElementById('sandwiches-menu-reveal-button')
      .classList.remove('open')
  })

document
  .getElementById('open-pancakes-menu')
  .addEventListener('click', function () {
    document
      .getElementById('sandwiches-menu-reveal-button')
      .classList.remove('open')
  })
document
  .getElementById('open-shawarma-menu')
  .addEventListener('click', function () {
    document
      .getElementById('sandwiches-menu-reveal-button')
      .classList.remove('open')
  })
document
  .getElementById('open-chicken-and-potato-menu')
  .addEventListener('click', function () {
    document
      .getElementById('sandwiches-menu-reveal-button')
      .classList.remove('open')
  })
document
  .getElementById('open-tortilla-and-salads-menu')
  .addEventListener('click', function () {
    document
      .getElementById('sandwiches-menu-reveal-button')
      .classList.remove('open')
  })
document
  .getElementById('open-drinks-and-desserts-menu')
  .addEventListener('click', function () {
    document
      .getElementById('sandwiches-menu-reveal-button')
      .classList.remove('open')
  })

document
  .getElementById('open-sandwiches-menu')
  .addEventListener('click', function () {
    document
      .getElementById('invisibility of the initial cards window')
      .classList.add('open')
  })
// ======================================================================================Курица и Картошка=========================

document
  .getElementById('open-chicken-and-potato-menu')
  .addEventListener('click', function () {
    document
      .getElementById('chicken-and-potato-menu-reveal-button')
      .classList.add('open')
  })

document
  .getElementById('open-burger-menu')
  .addEventListener('click', function () {
    document
      .getElementById('chicken-and-potato-menu-reveal-button')
      .classList.remove('open')
  })

document
  .getElementById('open-pancakes-menu')
  .addEventListener('click', function () {
    document
      .getElementById('chicken-and-potato-menu-reveal-button')
      .classList.remove('open')
  })
document
  .getElementById('open-shawarma-menu')
  .addEventListener('click', function () {
    document
      .getElementById('chicken-and-potato-menu-reveal-button')
      .classList.remove('open')
  })
document
  .getElementById('open-sandwiches-menu')
  .addEventListener('click', function () {
    document
      .getElementById('chicken-and-potato-menu-reveal-button')
      .classList.remove('open')
  })
document
  .getElementById('open-tortilla-and-salads-menu')
  .addEventListener('click', function () {
    document
      .getElementById('chicken-and-potato-menu-reveal-button')
      .classList.remove('open')
  })
document
  .getElementById('open-drinks-and-desserts-menu')
  .addEventListener('click', function () {
    document
      .getElementById('chicken-and-potato-menu-reveal-button')
      .classList.remove('open')
  })

document
  .getElementById('open-chicken-and-potato-menu')
  .addEventListener('click', function () {
    document
      .getElementById('invisibility of the initial cards window')
      .classList.add('open')
  })
// =================================================================================Тортилья и Салаты================================

document
  .getElementById('open-tortilla-and-salads-menu')
  .addEventListener('click', function () {
    document
      .getElementById('tortilla-and-salads-menu-reveal-button')
      .classList.add('open')
  })

document
  .getElementById('open-burger-menu')
  .addEventListener('click', function () {
    document
      .getElementById('tortilla-and-salads-menu-reveal-button')
      .classList.remove('open')
  })

document
  .getElementById('open-pancakes-menu')
  .addEventListener('click', function () {
    document
      .getElementById('tortilla-and-salads-menu-reveal-button')
      .classList.remove('open')
  })
document
  .getElementById('open-shawarma-menu')
  .addEventListener('click', function () {
    document
      .getElementById('tortilla-and-salads-menu-reveal-button')
      .classList.remove('open')
  })
document
  .getElementById('open-sandwiches-menu')
  .addEventListener('click', function () {
    document
      .getElementById('tortilla-and-salads-menu-reveal-button')
      .classList.remove('open')
  })
document
  .getElementById('open-chicken-and-potato-menu')
  .addEventListener('click', function () {
    document
      .getElementById('tortilla-and-salads-menu-reveal-button')
      .classList.remove('open')
  })
document
  .getElementById('open-drinks-and-desserts-menu')
  .addEventListener('click', function () {
    document
      .getElementById('tortilla-and-salads-menu-reveal-button')
      .classList.remove('open')
  })

document
  .getElementById('open-tortilla-and-salads-menu')
  .addEventListener('click', function () {
    document
      .getElementById('invisibility of the initial cards window')
      .classList.add('open')
  })
// =====================================================================================Напитки и Десерты===============================

document
  .getElementById('open-drinks-and-desserts-menu')
  .addEventListener('click', function () {
    document
      .getElementById('drinks-and-desserts-menu-reveal-button')
      .classList.add('open')
  })

document
  .getElementById('open-burger-menu')
  .addEventListener('click', function () {
    document
      .getElementById('drinks-and-desserts-menu-reveal-button')
      .classList.remove('open')
  })

document
  .getElementById('open-pancakes-menu')
  .addEventListener('click', function () {
    document
      .getElementById('drinks-and-desserts-menu-reveal-button')
      .classList.remove('open')
  })
document
  .getElementById('open-shawarma-menu')
  .addEventListener('click', function () {
    document
      .getElementById('drinks-and-desserts-menu-reveal-button')
      .classList.remove('open')
  })
document
  .getElementById('open-sandwiches-menu')
  .addEventListener('click', function () {
    document
      .getElementById('drinks-and-desserts-menu-reveal-button')
      .classList.remove('open')
  })
document
  .getElementById('open-chicken-and-potato-menu')
  .addEventListener('click', function () {
    document
      .getElementById('drinks-and-desserts-menu-reveal-button')
      .classList.remove('open')
  })
document
  .getElementById('open-tortilla-and-salads-menu')
  .addEventListener('click', function () {
    document
      .getElementById('drinks-and-desserts-menu-reveal-button')
      .classList.remove('open')
  })

document
  .getElementById('open-drinks-and-desserts-menu')
  .addEventListener('click', function () {
    document
      .getElementById('invisibility of the initial cards window')
      .classList.add('open')
  })
// =======================================================================================================================

async function getCustomerId() {
  window.data = []
  let response = await fetch('http://127.0.0.1:5500/dataTasks.json')
  if (response.status !== 200) {
    console.log(
      'Looks like there was a problem. Status Code: ' + response.status
    )
  } else {
    const data = await response.json()
    window.data = data
  }
  return window.data
}

function createTree(container, obj) {
  container.innerHTML = createTreeText(obj)
}

function createTreeText(obj) {
  // отдельная рекурсивная функция
  //   let li = ''
  //   let ul
  //   for (let key in obj) {
  //     li += '<li>' + key + '</li>'
  //   }
  //   if (li) {

  //     ul = '<ul>' + li + '</ul>'
  //   }
  //   return ul || ''
  let html
  for (let value in obj) {
    if (value == 'sandwiches') {
      obj.forEach(element => {
        const html = `<div class="card-product">
          <img class="subway" src="img/SUBWAY1.png" />
          <img class="burgers" src=${element.image} />
          <div class="names">${element.name}</div>
          <div class="ingredients">${element.description}</div>
          <div class="price">${element.price}</div>
          <div class="quantity">КОЛИЧЕСТВО</div>
          <div class="buttons">
            <img
              class="minus"
              src="/home/vyacheslav/Projects/shop/img/minus.svg"
            />
            <input value="1" maxlength="3" class="input" />
            <img
              class="plus"
              src="/home/vyacheslav/Projects/shop/img/plus.svg"
            />
          </div>
          <button class="in-basket" id="open-modal-btn-1">
            В КОРЗИНУ
          </button>
        </div>`
      })
    }
  }
  return html
}

getCustomerId().then(data => {
  console.log(data)
  createTree(pancakesMenuRevealButton, data)
})
