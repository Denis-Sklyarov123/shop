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
//===========================Размер=============================================================
document.getElementById('open-size').addEventListener('click', function () {
  document.getElementById('size-menu').classList.add('open')
})

document
  .getElementById('close-my-modal-btn')
  .addEventListener('click', function () {
    document.getElementById('size-menu').classList.remove('open')
  })
//===========================================Закрытие других разделов по нажатию на "Размер"==========================================================

document.getElementById('open-size').addEventListener('click', function () {
  document.getElementById('bread-menu').classList.remove('open')
})

document.getElementById('open-size').addEventListener('click', function () {
  document.getElementById('vegetable-menu').classList.remove('open')
})

document.getElementById('open-size').addEventListener('click', function () {
  document.getElementById('sauces-menu').classList.remove('open')
})

document.getElementById('open-size').addEventListener('click', function () {
  document.getElementById('stuffing-menu').classList.remove('open')
})

document.getElementById('open-size').addEventListener('click', function () {
  document.getElementById('ready-menu').classList.remove('open')
})
//==============================================Хлеб=======================================================
document
  .getElementById('is-open-bread-menu')
  .addEventListener('click', function () {
    document.getElementById('bread-menu').classList.add('open')
  })

document
  .getElementById('close-my-modal-btn')
  .addEventListener('click', function () {
    document.getElementById('bread-menu').classList.remove('open')
  })
//===========================================Закрытие других разделов по нажатию на "Хлеб"==================

document
  .getElementById('is-open-bread-menu')
  .addEventListener('click', function () {
    document.getElementById('size-menu').classList.remove('open')
  })

document
  .getElementById('is-open-bread-menu')
  .addEventListener('click', function () {
    document.getElementById('vegetable-menu').classList.remove('open')
  })

document
  .getElementById('is-open-bread-menu')
  .addEventListener('click', function () {
    document.getElementById('sauces-menu').classList.remove('open')
  })
document
  .getElementById('is-open-bread-menu')
  .addEventListener('click', function () {
    document.getElementById('stuffing-menu').classList.remove('open')
  })

document
  .getElementById('is-open-bread-menu')
  .addEventListener('click', function () {
    document.getElementById('ready-menu').classList.remove('open')
  })
//========================Овощи=============================================================================

document
  .getElementById('vegetable-open-menu')
  .addEventListener('click', function () {
    document.getElementById('vegetable-menu').classList.add('open')
  })

document
  .getElementById('close-my-modal-btn')
  .addEventListener('click', function () {
    document.getElementById('vegetable-menu').classList.remove('open')
  })
//===========================================Закрытие других разделов по нажатию на "Овощи"==================
document
  .getElementById('vegetable-open-menu')
  .addEventListener('click', function () {
    document.getElementById('size-menu').classList.remove('open')
  })

document
  .getElementById('vegetable-open-menu')
  .addEventListener('click', function () {
    document.getElementById('bread-menu').classList.remove('open')
  })

document
  .getElementById('vegetable-open-menu')
  .addEventListener('click', function () {
    document.getElementById('sauces-menu').classList.remove('open')
  })
document
  .getElementById('vegetable-open-menu')
  .addEventListener('click', function () {
    document.getElementById('stuffing-menu').classList.remove('open')
  })

document
  .getElementById('vegetable-open-menu')
  .addEventListener('click', function () {
    document.getElementById('ready-menu').classList.remove('open')
  })
//========================Соусы=============================================================================
document
  .getElementById('sauces-open-menu')
  .addEventListener('click', function () {
    document.getElementById('sauces-menu').classList.add('open')
  })

document
  .getElementById('close-my-modal-btn')
  .addEventListener('click', function () {
    document.getElementById('sauces-menu').classList.remove('open')
  })
//===========================================Закрытие других разделов по нажатию на "Соусы"=================
document
  .getElementById('sauces-open-menu')
  .addEventListener('click', function () {
    document.getElementById('stuffing-menu').classList.remove('open')
  })
document
  .getElementById('sauces-open-menu')
  .addEventListener('click', function () {
    document.getElementById('ready-menu').classList.remove('open')
  })
//========================Начинка===========================================================================
document
  .getElementById('stuffing-open-menu')
  .addEventListener('click', function () {
    document.getElementById('stuffing-menu').classList.add('open')
  })

document
  .getElementById('close-my-modal-btn')
  .addEventListener('click', function () {
    document.getElementById('stuffing-menu').classList.remove('open')
  })
//===========================================Закрытие других разделов по нажатию на "Начинка"===============
document
  .getElementById('stuffing-open-menu')
  .addEventListener('click', function () {
    document.getElementById('size-menu').classList.remove('open')
  })

document
  .getElementById('stuffing-open-menu')
  .addEventListener('click', function () {
    document.getElementById('bread-menu').classList.remove('open')
  })

document
  .getElementById('stuffing-open-menu')
  .addEventListener('click', function () {
    document.getElementById('sauces-menu').classList.remove('open')
  })
document
  .getElementById('stuffing-open-menu')
  .addEventListener('click', function () {
    document.getElementById('ready-menu').classList.remove('open')
  })
//========================Готово!===========================================================================
document
  .getElementById('open-menu-ready')
  .addEventListener('click', function () {
    document.getElementById('ready-menu').classList.add('open')
  })

document
  .getElementById('close-my-modal-btn')
  .addEventListener('click', function () {
    document.getElementById('ready-menu').classList.remove('open')
  })
//===========================================Закрытие других разделов по нажатию на "Готово"===============
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
// function allProduct(arrProduct) {
//   arrProduct.forEach(element => {
//     console.log(element)
//   })
// }
// allProduct(categorys) //выдаёт все элементы

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

// function allProduct(arrProduct) {
//   arrProduct.forEach(element => {
//     return element
//   })
// }
// console.log(allProduct(categorys))

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

//================================================================================================================
// function drawingModalWindowElements(container, obj) {
//   container.innerHTML = settingHtmlLayoutForRendering(obj)
// }

// function settingHtmlLayoutForRendering(obj) {
//   var objFillings = obj.fillings
//   for (let key in objFillings) {
//     if (objFillings.hasOwnProperty(key)) {
//       var text = ''
//       text += `
//         <button class="product-size-card-buttons">
//           <div class="opptions-background-little-bread">
//             <img class="little-bread" src="/img${objFillings[key].image}" />
//           </div>
//           <div class="size-bread">${objFillings[key].name}</div>
//           <div class="price-bread">Цена:${objFillings[key].price}</div>
//         </button>`
//       // console.log(text)
//     }
//     return text
//   }
// }
//===============================================================================================================
function drawingModalWindowElements(container, obj) {
  container.innerHTML = settingHtmlLayoutForRendering(obj)
}

function settingHtmlLayoutForRendering(obj) {
  var objFillings = obj.fillings
  var result = Object.values(objFillings)
    .map(
      v => `
          <button class="product-size-card-buttons">
            <div class="opptions-background-little-bread">
              <img class="little-bread" src="/img${v.image}" />
            </div>
            <div class="size-bread">${v.name}</div>
            <div class="price-bread">Цена:${v.price}</div>
          </button>`
    )
    .join('')
  return result
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
  drawingModalWindowElements(document.getElementById('stuffing-content'), data)
})
//==============================================Переключение между ячейками меню создания блюда============
// let width = 130 // ширина картинки
// let count = 3 // видимое количество изображений

// let list = carousel.querySelector('.gallery')
// let listElems = carousel.querySelectorAll('.bread-selection-menu')

// let position = 0 // положение ленты прокрутки

// carousel.querySelector('.back-button').onclick = function () {
//   // сдвиг влево
//   position += width * count
//   // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
//   position = Math.min(position, 0)
//   list.style.marginLeft = position + 'px'
// }

// carousel.querySelector('.forward-button').onclick = function () {
//   // сдвиг вправо
//   position -= width * count
//   // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
//   position = Math.max(position, -width * (listElems.length - count))
//   list.style.marginLeft = position + 'px'
// }
//=========================================================================================================
