document.addEventListener('click', function (e) {
  if (e.target.classList.contains('in-basket')) {
    document.getElementById('my-modal').classList.add('open')
  }
})

document
  .getElementById('close-my-modal-btn')
  .addEventListener('click', function () {
    document.getElementById('my-modal').classList.remove('open')
    document.getElementById('ready-menu').classList.remove('open')
    document.getElementById('stuffing-menu').classList.remove('open')
    document.getElementById('sauces-menu').classList.remove('open')
    document.getElementById('vegetable-menu').classList.remove('open')
    document.getElementById('bread-menu').classList.remove('open')
    document.getElementById('size-menu').classList.remove('open')
    document.querySelector('p').textContent = 'Проверьте и добавьте в корзину'
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

//==================================Кнопки назад/вперёд в модальном окне======================================
//==============================с размера на хлеб=============================================================
document
  .getElementById('from-size-block-to-block-of-bread')
  .addEventListener('click', function () {
    document.getElementById('size-menu').classList.remove('open')
    document.getElementById('bread-menu').classList.add('open')
    document.querySelector('p').textContent = 'Хлеб для сендвича на выбор'
  })
//============================<-- хлеб -->====================================================================
document
  .getElementById('go-to-back-size-block')
  .addEventListener('click', function () {
    document.getElementById('bread-menu').classList.remove('open')
    document.getElementById('size-menu').classList.add('open')
    document.querySelector('p').textContent = 'Выберите размер сендвича'
  })
//=============================================================================================================
document
  .getElementById('go-to-vegetable-block')
  .addEventListener('click', function () {
    document.getElementById('bread-menu').classList.remove('open')
    document.getElementById('vegetable-menu').classList.add('open')
    document.querySelector('p').textContent = 'Дополнительные овощи бесплатно'
  })
//==============================<-- овощи -->=================================================================
document
  .getElementById('go-to-back-bread-block')
  .addEventListener('click', function () {
    document.getElementById('vegetable-menu').classList.remove('open')
    document.getElementById('bread-menu').classList.add('open')
    document.querySelector('p').textContent = 'Хлеб для сендвича на выбор'
  })
//============================================================================================================
document
  .getElementById('go-to-sauce-block')
  .addEventListener('click', function () {
    document.getElementById('vegetable-menu').classList.remove('open')
    document.getElementById('sauces-menu').classList.add('open')
    document.querySelector('p').textContent =
      'Выберите 3 бесплатных соуса по вкусу'
  })
//==================================<-- Соусы -->=============================================================
document
  .getElementById('go-to-back-vegetable-block')
  .addEventListener('click', function () {
    document.getElementById('sauces-menu').classList.remove('open')
    document.getElementById('vegetable-menu').classList.add('open')
    document.querySelector('p').textContent = 'Дополнительные овощи бесплатно'
  })
//============================================================================================================
document
  .getElementById('go-to-stuffing-block')
  .addEventListener('click', function () {
    document.getElementById('sauces-menu').classList.remove('open')
    document.getElementById('stuffing-menu').classList.add('open')
    document.querySelector('p').textContent = 'Добавьте начинку по вкусу'
  })
//==============================<-- Начинка -->===============================================================
document
  .getElementById('go-to-back-in-sauce-block')
  .addEventListener('click', function () {
    document.getElementById('stuffing-menu').classList.remove('open')
    document.getElementById('sauces-menu').classList.add('open')
    document.querySelector('p').textContent =
      'Выберите 3 бесплатных соуса по вкусу'
  })
//============================================================================================================
document
  .getElementById('proceed-to-complete-purchase')
  .addEventListener('click', function () {
    document.getElementById('stuffing-menu').classList.remove('open')
    document.getElementById('ready-menu').classList.add('open')
  })
//=========================Смена карточек ингридиентов в модальном окне======================================
//===========================Размер===========================================================================
document.getElementById('open-size').addEventListener('click', function () {
  document.getElementById('size-menu').classList.add('open')
  document.getElementById('bread-menu').classList.remove('open')
  document.getElementById('vegetable-menu').classList.remove('open')
  document.getElementById('sauces-menu').classList.remove('open')
  document.getElementById('stuffing-menu').classList.remove('open')
  document.getElementById('ready-menu').classList.remove('open')
  document.querySelector('p').textContent = 'Выберите размер сендвича'
})
//==============================================Хлеб=======================================================
document
  .getElementById('is-open-bread-menu')
  .addEventListener('click', function () {
    document.getElementById('bread-menu').classList.add('open')
    document.getElementById('size-menu').classList.remove('open')
    document.getElementById('vegetable-menu').classList.remove('open')
    document.getElementById('sauces-menu').classList.remove('open')
    document.getElementById('stuffing-menu').classList.remove('open')
    document.getElementById('ready-menu').classList.remove('open')
    document.querySelector('p').textContent = 'Хлеб для сендвича на выбор'
  })
//========================Овощи=============================================================================
document
  .getElementById('vegetable-open-menu')
  .addEventListener('click', function () {
    document.getElementById('vegetable-menu').classList.add('open')
    document.getElementById('size-menu').classList.remove('open')
    document.getElementById('bread-menu').classList.remove('open')
    document.getElementById('sauces-menu').classList.remove('open')
    document.getElementById('stuffing-menu').classList.remove('open')
    document.getElementById('ready-menu').classList.remove('open')
    document.querySelector('p').textContent = 'Дополнительные овощи бесплатно'
  })
//========================Соусы=============================================================================
document
  .getElementById('sauces-open-menu')
  .addEventListener('click', function () {
    document.getElementById('sauces-menu').classList.add('open')
    document.getElementById('stuffing-menu').classList.remove('open')
    document.getElementById('ready-menu').classList.remove('open')
    document.querySelector('p').textContent =
      'Выберите 3 бесплатных соуса по вкусу'
  })
//========================Начинка===========================================================================
document
  .getElementById('stuffing-open-menu')
  .addEventListener('click', function () {
    document.getElementById('stuffing-menu').classList.add('open')
    document.getElementById('size-menu').classList.remove('open')
    document.getElementById('bread-menu').classList.remove('open')
    document.getElementById('sauces-menu').classList.remove('open')
    document.getElementById('ready-menu').classList.remove('open')
    document.querySelector('p').textContent = 'Добавьте начинку по вкусу'
  })
//========================Готово!===========================================================================
document
  .getElementById('open-menu-ready')
  .addEventListener('click', function () {
    document.getElementById('ready-menu').classList.add('open')
    document.querySelector('p').textContent = 'Проверьте и добавьте в корзину'
  })
// =======================Смена карточек продуктов в главном меню============================================
//=====================================Сендвичи==============================================================
document
  .getElementById('open-burger-menu')
  .addEventListener('click', function () {
    document.getElementById('burger-menu-reveal-button').classList.add('open')
    document
      .getElementById('invisibilityOfTheInitialCardsWindow')
      .classList.add('open')
    document.getElementById('pizzaMenuRevealButton').classList.remove('open')
    document.getElementById('shawarmaMenuMevealButton').classList.remove('open')
    document
      .getElementById('sandwichesMenuRevealButton')
      .classList.remove('open')
    document
      .getElementById('chickenAndPotatoMenuRevealButton')
      .classList.remove('open')
    document
      .getElementById('tortillaAndSaladsMenuRevealButton')
      .classList.remove('open')
    document
      .getElementById('drinksAndDessertsMenuRevealButton')
      .classList.remove('open')
  })
// ==============================================Блины========================================================

document
  .getElementById('open-pancakes-menu')
  .addEventListener('click', function () {
    document.getElementById('pizzaMenuRevealButton').classList.add('open')
    document
      .getElementById('burger-menu-reveal-button')
      .classList.remove('open')
    document
      .getElementById('invisibilityOfTheInitialCardsWindow')
      .classList.add('open')
    document.getElementById('shawarmaMenuMevealButton').classList.remove('open')
    document
      .getElementById('sandwichesMenuRevealButton')
      .classList.remove('open')
    document
      .getElementById('chickenAndPotatoMenuRevealButton')
      .classList.remove('open')
    document
      .getElementById('tortillaAndSaladsMenuRevealButton')
      .classList.remove('open')
    document
      .getElementById('drinksAndDessertsMenuRevealButton')
      .classList.remove('open')
  })
// ==============================================================================Шаурма==========================

document
  .getElementById('open-shawarma-menu')
  .addEventListener('click', function () {
    document.getElementById('shawarmaMenuMevealButton').classList.add('open')
    document
      .getElementById('invisibilityOfTheInitialCardsWindow')
      .classList.add('open')
    document
      .getElementById('burger-menu-reveal-button')
      .classList.remove('open')
    document.getElementById('pizzaMenuRevealButton').classList.remove('open')
    document
      .getElementById('sandwichesMenuRevealButton')
      .classList.remove('open')
    document
      .getElementById('chickenAndPotatoMenuRevealButton')
      .classList.remove('open')
    document
      .getElementById('tortillaAndSaladsMenuRevealButton')
      .classList.remove('open')
    document
      .getElementById('drinksAndDessertsMenuRevealButton')
      .classList.remove('open')
  })
// =================================================================================Бургеры==========================

document
  .getElementById('open-sandwiches-menu')
  .addEventListener('click', function () {
    document.getElementById('sandwichesMenuRevealButton').classList.add('open')
    document.getElementById('shawarmaMenuMevealButton').classList.remove('open')
    document.getElementById('pizzaMenuRevealButton').classList.remove('open')
    document
      .getElementById('burger-menu-reveal-button')
      .classList.remove('open')
    document
      .getElementById('invisibilityOfTheInitialCardsWindow')
      .classList.add('open')
    document
      .getElementById('chickenAndPotatoMenuRevealButton')
      .classList.remove('open')
    document
      .getElementById('tortillaAndSaladsMenuRevealButton')
      .classList.remove('open')
    document
      .getElementById('drinksAndDessertsMenuRevealButton')
      .classList.remove('open')
  })
// ======================================================================================Курица и Картошка=========================

document
  .getElementById('open-chicken-and-potato-menu')
  .addEventListener('click', function () {
    document
      .getElementById('chickenAndPotatoMenuRevealButton')
      .classList.add('open')
    document
      .getElementById('sandwichesMenuRevealButton')
      .classList.remove('open')
    document.getElementById('shawarmaMenuMevealButton').classList.remove('open')
    document.getElementById('pizzaMenuRevealButton').classList.remove('open')
    document
      .getElementById('burger-menu-reveal-button')
      .classList.remove('open')
    document
      .getElementById('invisibilityOfTheInitialCardsWindow')
      .classList.add('open')
    document
      .getElementById('tortillaAndSaladsMenuRevealButton')
      .classList.remove('open')
    document
      .getElementById('drinksAndDessertsMenuRevealButton')
      .classList.remove('open')
  })
// =================================================================================Тортилья и Салаты================================

document
  .getElementById('open-tortilla-and-salads-menu')
  .addEventListener('click', function () {
    document
      .getElementById('tortillaAndSaladsMenuRevealButton')
      .classList.add('open')
    document
      .getElementById('invisibilityOfTheInitialCardsWindow')
      .classList.add('open')
    document
      .getElementById('drinksAndDessertsMenuRevealButton')
      .classList.remove('open')
    document
      .getElementById('chickenAndPotatoMenuRevealButton')
      .classList.remove('open')
    document
      .getElementById('sandwichesMenuRevealButton')
      .classList.remove('open')
    document.getElementById('shawarmaMenuMevealButton').classList.remove('open')
    document.getElementById('pizzaMenuRevealButton').classList.remove('open')
    document
      .getElementById('burger-menu-reveal-button')
      .classList.remove('open')
  })
// =====================================================================================Напитки и Десерты===============================

document
  .getElementById('open-drinks-and-desserts-menu')
  .addEventListener('click', function () {
    document
      .getElementById('drinksAndDessertsMenuRevealButton')
      .classList.add('open')
    document
      .getElementById('invisibilityOfTheInitialCardsWindow')
      .classList.add('open')
    document
      .getElementById('tortillaAndSaladsMenuRevealButton')
      .classList.remove('open')
    document
      .getElementById('chickenAndPotatoMenuRevealButton')
      .classList.remove('open')
    document
      .getElementById('burger-menu-reveal-button')
      .classList.remove('open')
    document.getElementById('pizzaMenuRevealButton').classList.remove('open')
    document.getElementById('shawarmaMenuMevealButton').classList.remove('open')
    document
      .getElementById('sandwichesMenuRevealButton')
      .classList.remove('open')
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
// var categorys = [
//   'sandwiches',
//   'drinks',
//   'chicken',
//   'salads',
//   'shaurma',
//   'pizza',
//   'burgers',
// ]
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

function sendingDataToTheDesiredHtmlBlock(container, obj) {
  container.innerHTML = convertingDataToHtml(obj, 'sandwiches')
}

function convertingDataToHtml(obj, category) {
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
// function createTree88(container, obj, label) {
//   container.innerHTML = convertingDataToHtml(obj, label)
//   } // пример помошника
//=======================================================================================================
function sendingDataToTheDesiredHtmlBlock1(container, obj) {
  container.innerHTML = convertingDataToHtml(obj, 'drinks')
}

//========================================================================================================

function sendingDataToTheDesiredHtmlBlock2(container, obj) {
  container.innerHTML = convertingDataToHtml(obj, 'chicken')
}

//========================================================================================================

function sendingDataToTheDesiredHtmlBlock3(container, obj) {
  container.innerHTML = convertingDataToHtml(obj, 'salads')
}

//========================================================================================================

function sendingDataToTheDesiredHtmlBlock4(container, obj) {
  container.innerHTML = convertingDataToHtml(obj, 'shaurma')
}

//========================================================================================================

function sendingDataToTheDesiredHtmlBlock5(container, obj) {
  container.innerHTML = convertingDataToHtml(obj, 'pizza')
}
//=======================================================================================================

function sendingDataToTheDesiredHtmlBlock7(container, obj) {
  container.innerHTML = convertingDataToHtml(obj, 'burgers')
}

//========================================================================================================

function sendingDataToTheDesiredHtmlBlock6(container, obj) {
  container.innerHTML = convertingDataToHtml6(obj)
}

function convertingDataToHtml6(obj) {
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
  container.innerHTML = settingHtmlLayoutForRendering(obj.fillings)
}

function settingHtmlLayoutForRendering(objectInObject) {
  var result = Object.values(objectInObject)
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
  //console.log(result)
}

// function changeArray(someArray) {
//   for (i = 0; i < someArray.length; ++i) {
//     return someArray[i]
//   }
// }
// console.log(changeArray(categorys)) //Выдаёт первый элемент

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('size-bread')) {
    document.getElementById(
      'sizes-products'
    ).innerHTML = `${e.target.innerHTML}`
    // var content = e.target.innerHTML
    // console.info(`Содержимое элемента: "${content}"!`)
    // console.log(e.target)
  }
})
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('size-bread')) {
    document.getElementById(
      'products-prices'
    ).innerHTML = `${e.target.innerHTML}`
    // var content = e.target.innerHTML
    // console.info(`Содержимое элемента: "${content}"!`)
    // console.log(e.target)
  }
})
//========================================================================================================
function drawingModalWindowElements2(container, obj) {
  container.innerHTML = settingHtmlLayoutForRendering(obj.sizes)
}
function drawingModalWindowElements3(container, obj) {
  container.innerHTML = settingHtmlLayoutForRendering(obj.breads)
}
function drawingModalWindowElements4(container, obj) {
  container.innerHTML = settingHtmlLayoutForRendering(obj.vegetables)
}
function drawingModalWindowElements5(container, obj) {
  container.innerHTML = settingHtmlLayoutForRendering(obj.sauces)
}
function drawingModalWindowElements6(container, obj) {
  container.innerHTML = settingHtmlLayoutForRendering(obj.fillings)
}
//========================================================================================================
getCustomerId().then(data => {
  //=================================================================================
  // categorys.forEach((item) => {
  //   createTree88(document.getElementById('burger-menu-reveal-button'), data, item)
  //   }) //пример помошника
  //=================================================================================
  sendingDataToTheDesiredHtmlBlock7(
    document.getElementById('burger-menu-reveal-button'),
    data
  )
  sendingDataToTheDesiredHtmlBlock6(
    document.getElementById('invisibilityOfTheInitialCardsWindow'),
    data
  )
  sendingDataToTheDesiredHtmlBlock5(
    document.getElementById('pizzaMenuRevealButton'),
    data
  )
  sendingDataToTheDesiredHtmlBlock4(
    document.getElementById('shawarmaMenuMevealButton'),
    data
  )
  sendingDataToTheDesiredHtmlBlock3(
    document.getElementById('tortillaAndSaladsMenuRevealButton'),
    data
  )
  sendingDataToTheDesiredHtmlBlock2(
    document.getElementById('chickenAndPotatoMenuRevealButton'),
    data
  )
  sendingDataToTheDesiredHtmlBlock1(
    document.getElementById('drinksAndDessertsMenuRevealButton'),
    data
  )
  sendingDataToTheDesiredHtmlBlock(
    document.getElementById('sandwichesMenuRevealButton'),
    data
  )
  drawingModalWindowElements(document.getElementById('stuffing-content'), data)
  drawingModalWindowElements2(document.getElementById('size-products'), data)
  drawingModalWindowElements3(
    document.getElementById('breads-block-content'),
    data
  )
  drawingModalWindowElements4(
    document.getElementById('vegetable-block-content'),
    data
  )
  drawingModalWindowElements5(
    document.getElementById('sauce-block-content'),
    data
  )
})
