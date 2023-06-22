let fillingCategory = ''

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('in-basket')) {
    document.getElementById('my-modal').classList.add('open')
    document.getElementById('body-id').classList.add('modal-open')
  }
})
//=====================================================================================================
let counter = document.querySelector('.input-in-modal-window')

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('plus-in-modal-window')) {
    counter.innerText = ++counter.innerText
  }
})
document.addEventListener('click', function (e) {
  if (
    e.target.classList.contains('minus-in-modal-window') &&
    parseInt(counter.innerText) > 1
  ) {
    counter.innerText = --counter.innerText
  }
})
//=====================================================================================================
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
    fullPrice.innerHTML = 0
    valueInputInModalWindow.innerHTML = 1
    document.getElementById('total-order-name').textContent = 'Название:'
    document.getElementById('total-order-quantity').textContent = 'Количество:'
    document.getElementById('id-final-purchase-price').textContent = '0'
    document.getElementById('sizes-products').textContent = 'Размер:'
    document.getElementById('product-type').textContent = 'Хлеб:'
    document.querySelector('.the-one-remaining-sections').textContent = 'Овощи:'
    document.querySelector('.the-two-remaining-sections').textContent = 'Соусы:'
    document.querySelector('.stuffing-final-product').textContent = 'Начинка:'
    document.getElementById('open-size').classList.remove('open')
    document.getElementById('is-open-bread-menu').classList.remove('open')
    document.getElementById('vegetable-open-menu').classList.remove('open')
    document.getElementById('sauces-open-menu').classList.remove('open')
    document.getElementById('stuffing-open-menu').classList.remove('open')
    document.getElementById('open-menu-ready').classList.remove('open')
    document.getElementById('body-id').classList.remove('modal-open')
    document
      .querySelector('.product-size-card-buttons')
      .classList.remove('open')
  })
window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.getElementById('my-modal').classList.remove('open')
    document.getElementById('body-id').classList.remove('modal-open')
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
  document.getElementById('body-id').classList.remove('modal-open')
})

//==================================Кнопки назад/вперёд в модальном окне======================================
//==============================с размера на хлеб=============================================================
document
  .getElementById('from-size-block-to-block-of-bread')
  .addEventListener('click', function () {
    document.getElementById('size-menu').classList.remove('open')
    document.getElementById('bread-menu').classList.add('open')
    document.querySelector('p').textContent = 'Хлеб для сендвича на выбор'
    document.getElementById('is-open-bread-menu').classList.add('open')
    document.getElementById('open-size').classList.remove('open')
  })
//============================<-- хлеб -->====================================================================
document
  .getElementById('go-to-back-size-block')
  .addEventListener('click', function () {
    document.getElementById('bread-menu').classList.remove('open')
    document.getElementById('size-menu').classList.add('open')
    document.querySelector('p').textContent = 'Выберите размер сендвича'
    document.getElementById('is-open-bread-menu').classList.remove('open')
    document.getElementById('open-size').classList.add('open')
  })
//=============================================================================================================
document
  .getElementById('go-to-vegetable-block')
  .addEventListener('click', function () {
    document.getElementById('bread-menu').classList.remove('open')
    document.getElementById('vegetable-menu').classList.add('open')
    document.querySelector('p').textContent = 'Дополнительные овощи бесплатно'
    document.getElementById('is-open-bread-menu').classList.remove('open')
    document.getElementById('vegetable-open-menu').classList.add('open')
  })
//==============================<-- овощи -->=================================================================
document
  .getElementById('go-to-back-bread-block')
  .addEventListener('click', function () {
    document.getElementById('vegetable-menu').classList.remove('open')
    document.getElementById('bread-menu').classList.add('open')
    document.querySelector('p').textContent = 'Хлеб для сендвича на выбор'
    document.getElementById('is-open-bread-menu').classList.add('open')
    document.getElementById('vegetable-open-menu').classList.remove('open')
  })
//============================================================================================================
document
  .getElementById('go-to-sauce-block')
  .addEventListener('click', function () {
    document.getElementById('vegetable-menu').classList.remove('open')
    document.getElementById('sauces-menu').classList.add('open')
    document.querySelector('p').textContent =
      'Выберите 3 бесплатных соуса по вкусу'
    document.getElementById('sauces-open-menu').classList.add('open')
    document.getElementById('vegetable-open-menu').classList.remove('open')
  })
//==================================<-- Соусы -->=============================================================
document
  .getElementById('go-to-back-vegetable-block')
  .addEventListener('click', function () {
    document.getElementById('sauces-menu').classList.remove('open')
    document.getElementById('vegetable-menu').classList.add('open')
    document.querySelector('p').textContent = 'Дополнительные овощи бесплатно'
    document.getElementById('sauces-open-menu').classList.remove('open')
    document.getElementById('vegetable-open-menu').classList.add('open')
  })
//============================================================================================================
document
  .getElementById('go-to-stuffing-block')
  .addEventListener('click', function () {
    document.getElementById('sauces-menu').classList.remove('open')
    document.getElementById('stuffing-menu').classList.add('open')
    document.querySelector('p').textContent = 'Добавьте начинку по вкусу'
    document.getElementById('sauces-open-menu').classList.remove('open')
    document.getElementById('stuffing-open-menu').classList.add('open')
  })
//==============================<-- Начинка -->===============================================================
document
  .getElementById('go-to-back-in-sauce-block')
  .addEventListener('click', function () {
    document.getElementById('stuffing-menu').classList.remove('open')
    document.getElementById('sauces-menu').classList.add('open')
    document.querySelector('p').textContent =
      'Выберите 3 бесплатных соуса по вкусу'
    document.getElementById('sauces-open-menu').classList.add('open')
    document.getElementById('stuffing-open-menu').classList.remove('open')
  })
//============================================================================================================
document
  .getElementById('proceed-to-complete-purchase')
  .addEventListener('click', function () {
    document.getElementById('stuffing-menu').classList.remove('open')
    document.getElementById('ready-menu').classList.add('open')
    document.getElementById('open-menu-ready').classList.add('open')
    document.getElementById('stuffing-open-menu').classList.remove('open')
  })
//=========================Смена карточек ингридиентов в модальном окне======================================
//===========================Размер===========================================================================
// document.getElementById('open-size').addEventListener('click', function () {
//   document.getElementById('size-menu').classList.add('open')
//   document.getElementById('bread-menu').classList.remove('open')
//   document.getElementById('vegetable-menu').classList.remove('open')
//   document.getElementById('sauces-menu').classList.remove('open')
//   document.getElementById('stuffing-menu').classList.remove('open')
//   document.getElementById('ready-menu').classList.remove('open')
//   document.querySelector('p').textContent = 'Выберите размер сендвича'
//   document.getElementById('open-size').classList.add('open')
//   document.getElementById('is-open-bread-menu').classList.remove('open')
//   document.getElementById('vegetable-open-menu').classList.remove('open')
//   document.getElementById('sauces-open-menu').classList.remove('open')
//   document.getElementById('stuffing-open-menu').classList.remove('open')
//   document.getElementById('open-menu-ready').classList.remove('open')
// })
// //==============================================Хлеб=======================================================
// document
//   .getElementById('is-open-bread-menu')
//   .addEventListener('click', function () {
//     document.getElementById('bread-menu').classList.add('open')
//     document.getElementById('size-menu').classList.remove('open')
//     document.getElementById('vegetable-menu').classList.remove('open')
//     document.getElementById('sauces-menu').classList.remove('open')
//     document.getElementById('stuffing-menu').classList.remove('open')
//     document.getElementById('ready-menu').classList.remove('open')
//     document.querySelector('p').textContent = 'Хлеб для сендвича на выбор'
//     document.getElementById('open-size').classList.remove('open')
//     document.getElementById('is-open-bread-menu').classList.add('open')
//     document.getElementById('vegetable-open-menu').classList.remove('open')
//     document.getElementById('sauces-open-menu').classList.remove('open')
//     document.getElementById('stuffing-open-menu').classList.remove('open')
//     document.getElementById('open-menu-ready').classList.remove('open')
//   })
// //========================Овощи=============================================================================
// document
//   .getElementById('vegetable-open-menu')
//   .addEventListener('click', function () {
//     document.getElementById('vegetable-menu').classList.add('open')
//     document.getElementById('size-menu').classList.remove('open')
//     document.getElementById('bread-menu').classList.remove('open')
//     document.getElementById('sauces-menu').classList.remove('open')
//     document.getElementById('stuffing-menu').classList.remove('open')
//     document.getElementById('ready-menu').classList.remove('open')
//     document.querySelector('p').textContent = 'Дополнительные овощи бесплатно'
//     document.getElementById('open-size').classList.remove('open')
//     document.getElementById('is-open-bread-menu').classList.remove('open')
//     document.getElementById('vegetable-open-menu').classList.add('open')
//     document.getElementById('sauces-open-menu').classList.remove('open')
//     document.getElementById('stuffing-open-menu').classList.remove('open')
//     document.getElementById('open-menu-ready').classList.remove('open')
//   })
// //========================Соусы=============================================================================
// document
//   .getElementById('sauces-open-menu')
//   .addEventListener('click', function () {
//     document.getElementById('sauces-menu').classList.add('open')
//     document.getElementById('stuffing-menu').classList.remove('open')
//     document.getElementById('ready-menu').classList.remove('open')
//     document.querySelector('p').textContent =
//       'Выберите 3 бесплатных соуса по вкусу'
//     document.getElementById('open-size').classList.remove('open')
//     document.getElementById('is-open-bread-menu').classList.remove('open')
//     document.getElementById('vegetable-open-menu').classList.remove('open')
//     document.getElementById('sauces-open-menu').classList.add('open')
//     document.getElementById('stuffing-open-menu').classList.remove('open')
//     document.getElementById('open-menu-ready').classList.remove('open')
//   })
// //========================Начинка===========================================================================
// document
//   .getElementById('stuffing-open-menu')
//   .addEventListener('click', function () {
//     document.getElementById('stuffing-menu').classList.add('open')
//     document.getElementById('size-menu').classList.remove('open')
//     document.getElementById('bread-menu').classList.remove('open')
//     document.getElementById('sauces-menu').classList.remove('open')
//     document.getElementById('ready-menu').classList.remove('open')
//     document.querySelector('p').textContent = 'Добавьте начинку по вкусу'
//     document.getElementById('open-size').classList.remove('open')
//     document.getElementById('is-open-bread-menu').classList.remove('open')
//     document.getElementById('vegetable-open-menu').classList.remove('open')
//     document.getElementById('sauces-open-menu').classList.remove('open')
//     document.getElementById('stuffing-open-menu').classList.add('open')
//     document.getElementById('open-menu-ready').classList.remove('open')
//   })
// //========================Готово!===========================================================================
// document
//   .getElementById('open-menu-ready')
//   .addEventListener('click', function () {
//     document.getElementById('ready-menu').classList.add('open')
//     document.querySelector('p').textContent = 'Проверьте и добавьте в корзину'
//     document.getElementById('open-size').classList.remove('open')
//     document.getElementById('is-open-bread-menu').classList.remove('open')
//     document.getElementById('vegetable-open-menu').classList.remove('open')
//     document.getElementById('sauces-open-menu').classList.remove('open')
//     document.getElementById('stuffing-open-menu').classList.remove('open')
//     document.getElementById('open-menu-ready').classList.add('open')
//   })
// =======================Смена карточек продуктов в главном меню============================================
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
    setActiveCategory('sandwiches')
  }
  return window.data
}

const arrMenuItems = [
  {
    keyCategory: 'sandwiches',
    nameCategory: 'Сендвичи',
  },
  {
    keyCategory: 'burgers',
    nameCategory: 'Бургеры',
  },
  {
    keyCategory: 'pizza',
    nameCategory: 'Пицца',
  },
  {
    keyCategory: 'shaurma',
    nameCategory: 'Шаурма',
  },
  {
    keyCategory: 'salads',
    nameCategory: 'Тортилья и Салаты',
  },
  {
    keyCategory: 'chicken',
    nameCategory: 'Курица и Картошка',
  },
  {
    keyCategory: 'drinks',
    nameCategory: 'Напитки и Десерт',
  },
]

const containerMenu = document.getElementById('products-menu')
const menuArrayElements = arrMenuItems
  .map(
    element =>
      `<li onClick="setActiveCategory('${element.keyCategory}')" class="menu-item" id="open-shawarma-menu">${element.nameCategory}</li>`
  )
  .join('')
containerMenu.innerHTML = menuArrayElements

const productsContainer = document.getElementById('productsContainer')
function setActiveCategory(category) {
  let arrMenu = data.menu
  let arrProducts = arrMenu
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
  // console.log(arrProducts)

  productsContainer.innerHTML = arrProducts
}
//=============================================================================================================
// function drawingModalWindowElements(container, obj) {
//   container.innerHTML = settingHtmlLayoutForRendering(obj.fillings)
// }

const arrModalMenuItems = [
  { keyCategory: 'sizes', nameCategory: 'Размер' },
  { keyCategory: 'breads', nameCategory: 'Хлеб' },
  { keyCategory: 'vegetables', nameCategory: 'Овощи' },
  { keyCategory: 'sauces', nameCategory: 'Соусы' },
  { keyCategory: 'fillings', nameCategory: 'Начинка' },
  { keyCategory: 'ready', nameCategory: 'Готово' },
]

const containerModalMenu = document.getElementById('modal-menu')
const arrModalMenu = arrModalMenuItems
  .map(
    item => `<button onClick="setFillingCategory('${item.keyCategory}')" class="item-modal-window-menu" id="open-size">
${item.nameCategory}
</button>`
  )
  .join('')
containerModalMenu.innerHTML = arrModalMenu

const cardContainer = document.getElementById('size-products')
function setFillingCategory(category) {
  fillingCategory = category
  console.log(data.category)
  // let arrModalMenu = Object.values(data.fillingCategory)
  //   .map(
  //     item => `
  //       <button class="product-size-card-buttons">
  //         <div class="opptions-background-little-bread">
  //           <img class="img-filling" src="/img${item.image}" />
  //         </div>
  //         <div class="the-final-filling-in-the-product">${item.name}</div>
  //         <div class="price-size-letters">
  //           <div class="price-size-letters">Цена:</div>
  //           <div class="price-filling">${item.price}</div>
  //           <div class="price-size-letters">руб.</div>
  //         </div>
  //       </button>`
  //   )
  //   .join('')
  // cardContainer.innerHTML = arrModalMenu
  // let arrCards = Object.values(arrCategory).map()
}
//=============================================================================================================
// function drawingModalWindowElements(container, obj) {
//   container.innerHTML = settingHtmlLayoutForRendering(obj.fillings)
// }

function drawingModalWindowElements(container, obj) {
  container.innerHTML = settingHtmlLayoutForRendering(obj)
}

function settingHtmlLayoutForRendering(objectInObject) {
  var result = Object.values(objectInObject)
    .map(
      item => `
          <button class="product-size-card-buttons">
            <div class="opptions-background-little-bread">
              <img class="img-filling" src="/img${item.image}" />
            </div>
            <div class="the-final-filling-in-the-product">${item.name}</div>
            <div class="price-size-letters">
              <div class="price-size-letters">Цена:</div>
              <div class="price-filling">${item.price}</div>
              <div class="price-size-letters">руб.</div>
            </div>
          </button>`
    )
    .join('')
  return result
  //console.log(result)
}
//=============================================================================================================
function settingHtmlLayoutForRendering2(objectInObject) {
  var result = Object.values(objectInObject)
    .map(
      v => `
          <button class="product-size-card-buttons">
            <div class="opptions-background-little-bread">
              <img class="img-size" src="/img${v.image}" />
            </div>
            <div class="size-bread">${v.name}</div>
            <div class="price-size-letters">
              <div class="price-size-letters">Цена:</div>
              <div class="price-size">${v.price}</div>
              <div class="price-size-letters">руб.</div>
            </div>
          </button>`
    )
    .join('')
  return result
  //console.log(result)
}
//=============================================================================================================
function settingHtmlLayoutForRendering3(objectInObject) {
  var result = Object.values(objectInObject)
    .map(
      v => `
          <button class="product-size-card-buttons">
            <div class="opptions-background-little-bread">
              <img class="img-bread" src="/img${v.image}" />
            </div>
            <div class="type-of-bread">${v.name}</div>
            <div class="price-bread">Цена: ${v.price} руб.</div>
          </button>`
    )
    .join('')
  return result
  //console.log(result)
}
//=============================================================================================================
function settingHtmlLayoutForRendering4(objectInObject) {
  var result = Object.values(objectInObject)
    .map(
      v => `
          <button class="product-size-card-buttons">
            <div class="opptions-background-little-bread">
              <img class="img-vegetables" src="/img${v.image}" />
            </div>
            <div class="vegetables-of-your-choice">${v.name}</div>
            <div class="price-vegetables">Цена: ${v.price} руб.</div>
          </button>`
    )
    .join('')
  return result
  //console.log(result)
}
//=============================================================================================================
function settingHtmlLayoutForRendering5(objectInObject) {
  var result = Object.values(objectInObject)
    .map(
      v => `
          <button class="product-size-card-buttons">
            <div class="opptions-background-little-bread">
              <img class="img-sauce" src="/img${v.image}" />
            </div>
            <div class="sauces-for-product-creation">${v.name}</div>
            <div class="price-sauces">Цена: ${v.price} руб.</div>
          </button>`
    )
    .join('')
  return result
  //console.log(result)
}

//============================================================================================================
//========================================================================================================
var fullPrice = document.querySelector('.price-in-the-basket')
//========================================================================================================
let cartSize = document.getElementById('sizes-products')

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('img-size')) {
    let card = e.target.closest('.product-size-card-buttons')
    // console.log(card)
    let productInfo = {
      name: card.querySelector('.size-bread').innerText,
      price: card.querySelector('.price-size').innerText,
    }

    if (card.classList.contains('open')) {
      card.classList.remove('open')
    } else {
      card.classList.add('open')
    }

    // console.log(productInfo.price)
    cartSize.innerHTML = `Размер: ${productInfo.name}.`
    fullPrice.innerHTML = parseInt(productInfo.price)
    sumProducts = parseInt(fullPrice.innerText) + 0
  }
})

//========================================================================================================
let cartBread = document.getElementById('product-type')

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('img-bread')) {
    let card = e.target.closest('.product-size-card-buttons')
    // console.log(card)
    let productInfo = {
      name: card.querySelector('.type-of-bread').innerText,
      price: card.querySelector('.price-bread').innerText,
    }
    // console.log(productInfo)
    cartBread.innerHTML = `Хлеб: ${productInfo.name}.`
    if (card.classList.contains('open')) {
      card.classList.remove('open')
    } else {
      card.classList.add('open')
    }
  }
})

//========================================================================================================
// let cartVegetables = document.querySelector('.the-one-remaining-sections')
let cartVegetables = document.querySelector('.space-for-array-vegetables')

var arrayVegetables = []

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('img-vegetables')) {
    let card = e.target.closest('.product-size-card-buttons')
    // console.log(card)
    let productInfo = {
      name: card.querySelector('.vegetables-of-your-choice').innerText,
      price: card.querySelector('.price-vegetables').innerText,
    }
    if (arrayVegetables.length <= 2) {
      arrayVegetables.push(productInfo.name)
    } else {
      arrayVegetables.shift()
      arrayVegetables.push(productInfo.name)
    }
    // console.log(arrayVegetables)
    let lastArrayVegetables = arrayVegetables
      .map(
        b => `
    <div
    class="products-in-line">
    ${b}.
    </div>`
      )
      .join('')
    cartVegetables.innerHTML = lastArrayVegetables
    if (card.classList.contains('open')) {
      card.classList.remove('open')
    } else {
      card.classList.add('open')
    }
  }
})

//========================================================================================================
let cartSauces = document.querySelector('.space-for-array-sauces')

var arraySauces = []

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('img-sauce')) {
    let card = e.target.closest('.product-size-card-buttons')
    // console.log(card)
    let productInfo = {
      name: card.querySelector('.sauces-for-product-creation').innerText,
      price: card.querySelector('.price-sauces').innerText,
    }
    if (arraySauces.length <= 2) {
      arraySauces.push(productInfo.name)
    } else {
      arraySauces.shift()
      arraySauces.push(productInfo.name)
    }
    // console.log(arraySauces)
    let lastArraySauces = arraySauces
      .map(
        b => `
    <div
    class="products-in-line">
    ${b}.
    </div>`
      )
      .join('')
    cartSauces.innerHTML = lastArraySauces
    if (card.classList.contains('open')) {
      card.classList.remove('open')
    } else {
      card.classList.add('open')
    }
  }
})
//========================================================================================================

var sumProducts = 0

let cartFilling = document.querySelector('.space-for-array-stuffing')
var placeInsert = document.querySelector('.place-to-insert')

var arrayFilling = []

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('img-filling')) {
    let card = e.target.closest('.product-size-card-buttons')
    // console.log(card)
    let productInfo = {
      name: card.querySelector('.the-final-filling-in-the-product').innerText,
      price: card.querySelector('.price-filling').innerText,
    }
    let cartItemHTML = `
     <div
     class="products-in-line">
     ${productInfo.name}.
     </div>`
    cartFilling.insertAdjacentHTML('beforeend', cartItemHTML)
    fullPrice.innerHTML =
      parseInt(fullPrice.innerText) + parseInt(productInfo.price)
    sumProducts = parseInt(fullPrice.innerText) + 0
    if (card.classList.contains('open')) {
      card.classList.remove('open')
    } else {
      card.classList.add('open')
    }
  }
})

//========================================================================================================
let totalName = document.querySelector('.names-is-products-in-final-block')
var totalPrice = document.getElementById('id-final-purchase-price')
var totalNameOrder = document.getElementById('total-order-name')
var valueInputInModalWindow = document.querySelector('.input-in-modal-window')
var finalNumberOfProducts = document.getElementById('total-order-quantity')

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('plus-in-modal-window')) {
    fullPrice.innerHTML = parseInt(fullPrice.innerText) + parseInt(sumProducts)
  }
})

document.addEventListener('click', function (e) {
  if (
    e.target.classList.contains('minus-in-modal-window') &&
    parseInt(fullPrice.innerText) > parseInt(sumProducts)
  ) {
    fullPrice.innerHTML = parseInt(fullPrice.innerText) - parseInt(sumProducts)
  }
})

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('add-to-final-price')) {
    totalPrice.innerHTML = fullPrice.innerText
    totalNameOrder.innerHTML = totalName.textContent
    finalNumberOfProducts.innerHTML = `${valueInputInModalWindow.innerText} шт`
    document.getElementById('my-modal').classList.remove('open')
    document.getElementById('body-id').classList.remove('modal-open')
  }
})
//=============================================================================================================
function drawingModalWindowElements(container, obj) {
  container.innerHTML = settingHtmlLayoutForRendering(obj.fillings)
}
function drawingModalWindowElements2(container, obj) {
  container.innerHTML = settingHtmlLayoutForRendering2(obj.sizes)
}
function drawingModalWindowElements3(container, obj) {
  container.innerHTML = settingHtmlLayoutForRendering3(obj.breads)
}
function drawingModalWindowElements4(container, obj) {
  container.innerHTML = settingHtmlLayoutForRendering4(obj.vegetables)
}
function drawingModalWindowElements5(container, obj) {
  container.innerHTML = settingHtmlLayoutForRendering5(obj.sauces)
}
//========================================================================================================
getCustomerId().then(data => {
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
