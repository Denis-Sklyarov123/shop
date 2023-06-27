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
    document.querySelector('p').textContent = 'Выберите размер сендвича'
    fullPrice.innerHTML = 0
    valueInputInModalWindow.innerHTML = 1
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
//=============================================================================================================
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
    setActiveCards('sizes')
    setActiveBtn(0)
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
    (
      item,
      index
    ) => `<button onClick="setActiveCards('${item.keyCategory}'); setActiveBtn('${index}')" class="item-modal-window-menu" id="open-size">
${item.nameCategory}
</button>`
  )
  .join('')

containerModalMenu.innerHTML = arrModalMenu
setActiveCards
const cardContainer = document.getElementById('size-products')
function setActiveCards(category) {
  containerCategory = category
  if (category === 'ready') {
    let sectionReady = `<div class="selection-columns">
   <div class="your-product-is-ready">Ваш сендвич готов!</div>
   <div class="name-of-final-products">
     <div
       class="size-of-the-final-product"
       id="sizes-products"
     >
       Размер:
     </div>
     <div
       class="the-bread-remaining-sections"
       id="product-type"
     >
       Хлеб:
     </div>
     <div
       class="the-one-remaining-sections"
       id="products-vegetable"
     >
       Овощи:
       <div class="space-for-array-vegetables"></div>
     </div>
     <div
       class="the-two-remaining-sections"
       id="products-sauces"
     >
       Соусы:
       <div class="space-for-array-sauces"></div>
     </div>
     <div
       class="stuffing-final-product"
       id="products-stuffing"
     >
       Начинка:
       <div class="space-for-array-stuffing"></div>
     </div>
   </div>
   <div
     class="names-is-products-in-final-block"
     id="products-names"
   >
     Овощной
   </div>
 </div>`
    cardContainer.innerHTML = sectionReady
  } else {
    let arrModalMenu = Object.values(data[category])
      .map(
        item => `
        <button onClick="itemAddCart('${item.name}')" class="product-size-card-buttons">
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
    cardContainer.innerHTML = arrModalMenu
  }
}

let arrNameInBasket = [
  { sizesProduct: 'Размер' },
  { bread: 'Хлеб' },
  { vegetable: 'Овощи' },
  { souce: 'Соусы' },
  { filling: 'Начинка' },
]
let containerCategory
function itemAddCart(nameProduct) {
  const sizeContainer = document.getElementById('sizes-products')
  console.log(containerCategory + '')
  console.log(nameProduct)

  if (containerCategory === 'sizes') {
    console.log(arrNameInBasket)
  }
}

let containerIndex = 0
const btnContainer = document.getElementById('size-menu')
function setActiveBtn(indexCategory) {
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

  switch (indexCategory) {
    case 1:
      document.querySelector('p').textContent = 'Хлеб для сендвича на выбор'
      break
    case 2:
      document.querySelector('p').textContent = 'Дополнительные овощи бесплатно'
      break
    case 3:
      document.querySelector('p').textContent =
        'Выберите 3 бесплатных соуса по вкусу'
      break
    case 4:
      document.querySelector('p').textContent = 'Добавьте начинку по вкусу'
      break
    case 5:
      document.querySelector('p').textContent = 'Проверьте и добавьте в корзину'
      break
  }
}

function BackAndForth(type) {
  if (type === 'forward') {
    containerIndex = ++containerIndex
  } else {
    containerIndex = --containerIndex
  }
  const category = arrModalMenuItems[containerIndex].keyCategory
  setActiveBtn(containerIndex)
  setActiveCards(category)
}

//========================================================================================================
// var fullPrice = document.querySelector('.price-in-the-basket')
// //========================================================================================================
// let cartSize = document.getElementById('sizes-products')

// document.addEventListener('click', function (e) {
//   if (e.target.classList.contains('img-size')) {
//     let card = e.target.closest('.product-size-card-buttons')
//     console.log(card)
//     let productInfo = {
//       name: card.querySelector('.size-bread').innerText,
//       price: card.querySelector('.price-size').innerText,
//     }

//     if (card.classList.contains('open')) {
//       card.classList.remove('open')
//     } else {
//       card.classList.add('open')
//     }

//     // console.log(productInfo.price)
//     cartSize.innerHTML = `Размер: ${productInfo.name}.`
//     fullPrice.innerHTML = parseInt(productInfo.price)
//     sumProducts = parseInt(fullPrice.innerText) + 0
//   }
// })

// //========================================================================================================
// let cartBread = document.getElementById('product-type')

// document.addEventListener('click', function (e) {
//   if (e.target.classList.contains('img-bread')) {
//     let card = e.target.closest('.product-size-card-buttons')
//     // console.log(card)
//     let productInfo = {
//       name: card.querySelector('.type-of-bread').innerText,
//       price: card.querySelector('.price-bread').innerText,
//     }
//     // console.log(productInfo)
//     cartBread.innerHTML = `Хлеб: ${productInfo.name}.`
//     if (card.classList.contains('open')) {
//       card.classList.remove('open')
//     } else {
//       card.classList.add('open')
//     }
//   }
// })

// //========================================================================================================
// // let cartVegetables = document.querySelector('.the-one-remaining-sections')
// let cartVegetables = document.querySelector('.space-for-array-vegetables')

// var arrayVegetables = []

// document.addEventListener('click', function (e) {
//   if (e.target.classList.contains('img-vegetables')) {
//     let card = e.target.closest('.product-size-card-buttons')
//     // console.log(card)
//     let productInfo = {
//       name: card.querySelector('.vegetables-of-your-choice').innerText,
//       price: card.querySelector('.price-vegetables').innerText,
//     }
//     if (arrayVegetables.length <= 2) {
//       arrayVegetables.push(productInfo.name)
//     } else {
//       arrayVegetables.shift()
//       arrayVegetables.push(productInfo.name)
//     }
//     // console.log(arrayVegetables)
//     let lastArrayVegetables = arrayVegetables
//       .map(
//         b => `
//     <div
//     class="products-in-line">
//     ${b}.
//     </div>`
//       )
//       .join('')
//     cartVegetables.innerHTML = lastArrayVegetables
//     if (card.classList.contains('open')) {
//       card.classList.remove('open')
//     } else {
//       card.classList.add('open')
//     }
//   }
// })

// //========================================================================================================
// let cartSauces = document.querySelector('.space-for-array-sauces')

// var arraySauces = []

// document.addEventListener('click', function (e) {
//   if (e.target.classList.contains('img-sauce')) {
//     let card = e.target.closest('.product-size-card-buttons')
//     // console.log(card)
//     let productInfo = {
//       name: card.querySelector('.sauces-for-product-creation').innerText,
//       price: card.querySelector('.price-sauces').innerText,
//     }
//     if (arraySauces.length <= 2) {
//       arraySauces.push(productInfo.name)
//     } else {
//       arraySauces.shift()
//       arraySauces.push(productInfo.name)
//     }
//     // console.log(arraySauces)
//     let lastArraySauces = arraySauces
//       .map(
//         b => `
//     <div
//     class="products-in-line">
//     ${b}.
//     </div>`
//       )
//       .join('')
//     cartSauces.innerHTML = lastArraySauces
//     if (card.classList.contains('open')) {
//       card.classList.remove('open')
//     } else {
//       card.classList.add('open')
//     }
//   }
// })
// //========================================================================================================

// var sumProducts = 0

// let cartFilling = document.querySelector('.space-for-array-stuffing')
// var placeInsert = document.querySelector('.place-to-insert')

// var arrayFilling = []

// document.addEventListener('click', function (e) {
//   if (e.target.classList.contains('img-filling')) {
//     let card = e.target.closest('.product-size-card-buttons')
//     // console.log(card)
//     let productInfo = {
//       name: card.querySelector('.the-final-filling-in-the-product').innerText,
//       price: card.querySelector('.price-filling').innerText,
//     }
//     let cartItemHTML = `
//      <div
//      class="products-in-line">
//      ${productInfo.name}.
//      </div>`
//     cartFilling.insertAdjacentHTML('beforeend', cartItemHTML)
//     fullPrice.innerHTML =
//       parseInt(fullPrice.innerText) + parseInt(productInfo.price)
//     sumProducts = parseInt(fullPrice.innerText) + 0
//     if (card.classList.contains('open')) {
//       card.classList.remove('open')
//     } else {
//       card.classList.add('open')
//     }
//   }
// })

// //========================================================================================================
// let totalName = document.querySelector('.names-is-products-in-final-block')
// var totalPrice = document.getElementById('id-final-purchase-price')
// var totalNameOrder = document.getElementById('total-order-name')
// var valueInputInModalWindow = document.querySelector('.input-in-modal-window')
// var finalNumberOfProducts = document.getElementById('total-order-quantity')

// document.addEventListener('click', function (e) {
//   if (e.target.classList.contains('plus-in-modal-window')) {
//     fullPrice.innerHTML = parseInt(fullPrice.innerText) + parseInt(sumProducts)
//   }
// })

// document.addEventListener('click', function (e) {
//   if (
//     e.target.classList.contains('minus-in-modal-window') &&
//     parseInt(fullPrice.innerText) > parseInt(sumProducts)
//   ) {
//     fullPrice.innerHTML = parseInt(fullPrice.innerText) - parseInt(sumProducts)
//   }
// })

// document.addEventListener('click', function (e) {
//   if (e.target.classList.contains('add-to-final-price')) {
//     totalPrice.innerHTML = fullPrice.innerText
//     totalNameOrder.innerHTML = totalName.textContent
//     finalNumberOfProducts.innerHTML = `${valueInputInModalWindow.innerText} шт`
//     document.getElementById('my-modal').classList.remove('open')
//     document.getElementById('body-id').classList.remove('modal-open')
//   }
// })

//========================================================================================================
getCustomerId()
