document.addEventListener('click', function (e) {
  if (e.target.classList.contains('in-basket')) {
    document.getElementById('my-modal').classList.add('open')
  }
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
      .getElementById('invisibilityOfTheInitialCardsWindow')
      .classList.add('open')
  })
// ==============================================================================Блины======================

document
  .getElementById('open-pancakes-menu')
  .addEventListener('click', function () {
    document.getElementById('pizzaMenuRevealButton').classList.add('open')
  })

document
  .getElementById('open-burger-menu')
  .addEventListener('click', function () {
    document.getElementById('pizzaMenuRevealButton').classList.remove('open')
  })
document
  .getElementById('open-shawarma-menu')
  .addEventListener('click', function () {
    document.getElementById('pizzaMenuRevealButton').classList.remove('open')
  })
document
  .getElementById('open-sandwiches-menu')
  .addEventListener('click', function () {
    document.getElementById('pizzaMenuRevealButton').classList.remove('open')
  })
document
  .getElementById('open-chicken-and-potato-menu')
  .addEventListener('click', function () {
    document.getElementById('pizzaMenuRevealButton').classList.remove('open')
  })
document
  .getElementById('open-tortilla-and-salads-menu')
  .addEventListener('click', function () {
    document.getElementById('pizzaMenuRevealButton').classList.remove('open')
  })
document
  .getElementById('open-drinks-and-desserts-menu')
  .addEventListener('click', function () {
    document.getElementById('pizzaMenuRevealButton').classList.remove('open')
  })

document
  .getElementById('open-pancakes-menu')
  .addEventListener('click', function () {
    document
      .getElementById('invisibilityOfTheInitialCardsWindow')
      .classList.add('open')
  })
// ==============================================================================Шаурма==========================

document
  .getElementById('open-shawarma-menu')
  .addEventListener('click', function () {
    document.getElementById('shawarmaMenuMevealButton').classList.add('open')
  })

document
  .getElementById('open-burger-menu')
  .addEventListener('click', function () {
    document.getElementById('shawarmaMenuMevealButton').classList.remove('open')
  })

document
  .getElementById('open-pancakes-menu')
  .addEventListener('click', function () {
    document.getElementById('shawarmaMenuMevealButton').classList.remove('open')
  })
document
  .getElementById('open-sandwiches-menu')
  .addEventListener('click', function () {
    document.getElementById('shawarmaMenuMevealButton').classList.remove('open')
  })
document
  .getElementById('open-chicken-and-potato-menu')
  .addEventListener('click', function () {
    document.getElementById('shawarmaMenuMevealButton').classList.remove('open')
  })
document
  .getElementById('open-tortilla-and-salads-menu')
  .addEventListener('click', function () {
    document.getElementById('shawarmaMenuMevealButton').classList.remove('open')
  })
document
  .getElementById('open-drinks-and-desserts-menu')
  .addEventListener('click', function () {
    document.getElementById('shawarmaMenuMevealButton').classList.remove('open')
  })

document
  .getElementById('open-shawarma-menu')
  .addEventListener('click', function () {
    document
      .getElementById('invisibilityOfTheInitialCardsWindow')
      .classList.add('open')
  })
// ==================================================================================Бургеры==========================

document
  .getElementById('open-sandwiches-menu')
  .addEventListener('click', function () {
    document.getElementById('sandwichesMenuRevealButton').classList.add('open')
  })

document
  .getElementById('open-burger-menu')
  .addEventListener('click', function () {
    document
      .getElementById('sandwichesMenuRevealButton')
      .classList.remove('open')
  })

document
  .getElementById('open-pancakes-menu')
  .addEventListener('click', function () {
    document
      .getElementById('sandwichesMenuRevealButton')
      .classList.remove('open')
  })
document
  .getElementById('open-shawarma-menu')
  .addEventListener('click', function () {
    document
      .getElementById('sandwichesMenuRevealButton')
      .classList.remove('open')
  })
document
  .getElementById('open-chicken-and-potato-menu')
  .addEventListener('click', function () {
    document
      .getElementById('sandwichesMenuRevealButton')
      .classList.remove('open')
  })
document
  .getElementById('open-tortilla-and-salads-menu')
  .addEventListener('click', function () {
    document
      .getElementById('sandwichesMenuRevealButton')
      .classList.remove('open')
  })
document
  .getElementById('open-drinks-and-desserts-menu')
  .addEventListener('click', function () {
    document
      .getElementById('sandwichesMenuRevealButton')
      .classList.remove('open')
  })

document
  .getElementById('open-sandwiches-menu')
  .addEventListener('click', function () {
    document
      .getElementById('invisibilityOfTheInitialCardsWindow')
      .classList.add('open')
  })
// ======================================================================================Курица и Картошка=========================

document
  .getElementById('open-chicken-and-potato-menu')
  .addEventListener('click', function () {
    document
      .getElementById('chickenAndPotatoMenuRevealButton')
      .classList.add('open')
  })

document
  .getElementById('open-burger-menu')
  .addEventListener('click', function () {
    document
      .getElementById('chickenAndPotatoMenuRevealButton')
      .classList.remove('open')
  })

document
  .getElementById('open-pancakes-menu')
  .addEventListener('click', function () {
    document
      .getElementById('chickenAndPotatoMenuRevealButton')
      .classList.remove('open')
  })
document
  .getElementById('open-shawarma-menu')
  .addEventListener('click', function () {
    document
      .getElementById('chickenAndPotatoMenuRevealButton')
      .classList.remove('open')
  })
document
  .getElementById('open-sandwiches-menu')
  .addEventListener('click', function () {
    document
      .getElementById('chickenAndPotatoMenuRevealButton')
      .classList.remove('open')
  })
document
  .getElementById('open-tortilla-and-salads-menu')
  .addEventListener('click', function () {
    document
      .getElementById('chickenAndPotatoMenuRevealButton')
      .classList.remove('open')
  })
document
  .getElementById('open-drinks-and-desserts-menu')
  .addEventListener('click', function () {
    document
      .getElementById('chickenAndPotatoMenuRevealButton')
      .classList.remove('open')
  })

document
  .getElementById('open-chicken-and-potato-menu')
  .addEventListener('click', function () {
    document
      .getElementById('invisibilityOfTheInitialCardsWindow')
      .classList.add('open')
  })
// =================================================================================Тортилья и Салаты================================

document
  .getElementById('open-tortilla-and-salads-menu')
  .addEventListener('click', function () {
    document
      .getElementById('tortillaAndSaladsMenuRevealButton')
      .classList.add('open')
  })

document
  .getElementById('open-burger-menu')
  .addEventListener('click', function () {
    document
      .getElementById('tortillaAndSaladsMenuRevealButton')
      .classList.remove('open')
  })

document
  .getElementById('open-pancakes-menu')
  .addEventListener('click', function () {
    document
      .getElementById('tortillaAndSaladsMenuRevealButton')
      .classList.remove('open')
  })
document
  .getElementById('open-shawarma-menu')
  .addEventListener('click', function () {
    document
      .getElementById('tortillaAndSaladsMenuRevealButton')
      .classList.remove('open')
  })
document
  .getElementById('open-sandwiches-menu')
  .addEventListener('click', function () {
    document
      .getElementById('tortillaAndSaladsMenuRevealButton')
      .classList.remove('open')
  })
document
  .getElementById('open-chicken-and-potato-menu')
  .addEventListener('click', function () {
    document
      .getElementById('tortillaAndSaladsMenuRevealButton')
      .classList.remove('open')
  })
document
  .getElementById('open-drinks-and-desserts-menu')
  .addEventListener('click', function () {
    document
      .getElementById('tortillaAndSaladsMenuRevealButton')
      .classList.remove('open')
  })

document
  .getElementById('open-tortilla-and-salads-menu')
  .addEventListener('click', function () {
    document
      .getElementById('invisibilityOfTheInitialCardsWindow')
      .classList.add('open')
  })
// =====================================================================================Напитки и Десерты===============================

document
  .getElementById('open-drinks-and-desserts-menu')
  .addEventListener('click', function () {
    document
      .getElementById('drinksAndDessertsMenuRevealButton')
      .classList.add('open')
  })

document
  .getElementById('open-burger-menu')
  .addEventListener('click', function () {
    document
      .getElementById('drinksAndDessertsMenuRevealButton')
      .classList.remove('open')
  })

document
  .getElementById('open-pancakes-menu')
  .addEventListener('click', function () {
    document
      .getElementById('drinksAndDessertsMenuRevealButton')
      .classList.remove('open')
  })
document
  .getElementById('open-shawarma-menu')
  .addEventListener('click', function () {
    document
      .getElementById('drinksAndDessertsMenuRevealButton')
      .classList.remove('open')
  })
document
  .getElementById('open-sandwiches-menu')
  .addEventListener('click', function () {
    document
      .getElementById('drinksAndDessertsMenuRevealButton')
      .classList.remove('open')
  })
document
  .getElementById('open-chicken-and-potato-menu')
  .addEventListener('click', function () {
    document
      .getElementById('drinksAndDessertsMenuRevealButton')
      .classList.remove('open')
  })
document
  .getElementById('open-tortilla-and-salads-menu')
  .addEventListener('click', function () {
    document
      .getElementById('drinksAndDessertsMenuRevealButton')
      .classList.remove('open')
  })

document
  .getElementById('open-drinks-and-desserts-menu')
  .addEventListener('click', function () {
    document
      .getElementById('invisibilityOfTheInitialCardsWindow')
      .classList.add('open')
  })
// =======================================================================================================================

async function getCustomerId() {
  window.data = []
  let response = await fetch('/data.json')
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

//==========================================================================================================
var categorys = [
  'sandwiches',
  'drinks',
  'chicken',
  'salads',
  'shaurma',
  'pizza',
  'burgers',
]

// function changeArray(someArray) {
//   for (i = 0; i < someArray.length; ++i) {
//     return someArray[i]
//   }
// }
// console.log(changeArray(categorys)) //Выдаёт первый элемент

// function changeArray(someArray) {
//   var arrEmpty = []
//   for (i = 0; i < someArray.length; ++i) {
//     arrEmpty.push(someArray[i])
//   }
//   return arrEmpty
// }
// console.log(changeArray(categorys)) //выдаёт тот же массив

function createTree(container, obj) {
  container.innerHTML = createTreeText(obj, 'sandwiches')
}

function createTreeText(obj, category) {
  let arrMenu = obj.menu
  let cardsSandwiches = arrMenu
    .filter(item => item.category == category)
    .map(
      item => `
      <div class="card-product">
      <img class="subway" src="img/SUBWAY1.png" />
      <img class="opptions-background-img" src="/img${item.image}" />
      <div class="names">${item.name}</div>
      <div class="ingredients">${item.description}</div>
      <div class="price">Цена: ${item.price} руб.</div>
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
      <button class="in-basket">
        В КОРЗИНУ
      </button>
    </div>`
    )
    .join('')
  return cardsSandwiches
}

//=======================================================================================================

function createTree1(container, obj) {
  container.innerHTML = createTreeText(obj, 'drinks')
}

//========================================================================================================

function createTree2(container, obj) {
  container.innerHTML = createTreeText(obj, 'chicken')
}

//========================================================================================================

function createTree3(container, obj) {
  container.innerHTML = createTreeText(obj, 'salads')
}

//========================================================================================================

function createTree4(container, obj) {
  container.innerHTML = createTreeText(obj, 'shaurma')
}

//========================================================================================================

function createTree5(container, obj) {
  container.innerHTML = createTreeText(obj, 'pizza')
}
//=======================================================================================================

function createTree7(container, obj) {
  container.innerHTML = createTreeText(obj, 'burgers')
}

//========================================================================================================

function createTree6(container, obj) {
  container.innerHTML = createTreeText6(obj)
}

function createTreeText6(obj) {
  let arrMenu = obj.menu
  let cardsSandwiches = arrMenu
    .filter(item => item.category == 'pizza')
    .map(
      item => `
      <div class="card-product">
      <img class="subway" src="img/SUBWAY1.png" />
      <img class="opptions-background-img" src="/img${item.image}" />
      <div class="names">${item.name}</div>
      <div class="ingredients">${item.description}</div>
      <div class="price">Цена: ${item.price} руб.</div>
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
      <button class="in-basket" id="open-modal-btn-1">
        В КОРЗИНУ
      </button>
    </div>`
    )
    .join('')
  return cardsSandwiches
}

//========================================================================================================
getCustomerId().then(data => {
  createTree7(document.getElementById('burger-menu-reveal-button'), data)
  createTree6(
    document.getElementById('invisibilityOfTheInitialCardsWindow'),
    data
  )
  createTree5(document.getElementById('pizzaMenuRevealButton'), data)
  createTree4(document.getElementById('shawarmaMenuMevealButton'), data)
  createTree3(
    document.getElementById('tortillaAndSaladsMenuRevealButton'),
    data
  )
  createTree2(document.getElementById('chickenAndPotatoMenuRevealButton'), data)
  createTree1(
    document.getElementById('drinksAndDessertsMenuRevealButton'),
    data
  )
  createTree(document.getElementById('sandwichesMenuRevealButton'), data)
})
