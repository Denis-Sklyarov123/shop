import Button from './components/mainMenu'
import Card from './components/cards'
import { arrMenuItems, arrModalMenuItems } from './constants'

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('in-basket')) {
    document.getElementById('my-modal').classList.add('open')
    document.getElementById('body-id').classList.add('modal-open')
  }
})
//=====================================================================================================
document
  .getElementById('close-my-modal-btn')
  .addEventListener('click', function () {
    initialDataSetting()
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

// Парсинг
async function getCustomerId() {
  window.data = []
  let response = await fetch('./data.json')
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

// Главное меню
const containerMenu = document.getElementById('products-menu')

arrMenuItems.map(element => {
  new Button(containerMenu, element.nameCategory, () => {
    productsContainer.innerHTML = ''
    setActiveCategory(element.keyCategory)
  })
})

// Отрисовка карточек
const productsContainer = document.getElementById('productsContainer')
function setActiveCategory(category) {
  let arrMenu = data.menu
  arrMenu
    .filter(item => item.category == category)
    .map(item => {
      new Card(
        productsContainer,
        item,
      )
    })
}

// Меню модальное окна
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

//Функция отрисовки окна 'Готово'
function renderReady() {
  let sectionReady = `
  <div class="selection-columns">
    <div class="container-img">
      <div class="opptions-background-img-card">
        <img class="img-filling-final" src="img/i/result_sandwich.jpg" </img>
      </div>
    </div>
    <div class="selection-columns-in-modal">
    <div class="your-product-is-ready">Ваш сендвич готов!</div>
    <div class="name-of-final-products" id="container-category"></div>
    <div class="name-final-product">Овощной</div>
    </div>
  </div>`
  cardContainer.innerHTML = sectionReady

  let listItemsCart = Object.values(arrNameInBasket)
    .map(item => {
      // console.log(item)
      if (item.stuffing) {
        const category = item.nameСhapter
        if (item.stuffing.length) {
          const arrName = item.stuffing.map(element => {
            return element.name
          })
          return `<div
              class="size-of-the-final-product"
              >
              ${category}: ${arrName.join(', ')}
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

  const containerCategoryElement = document.getElementById('container-category')
  containerCategoryElement.innerHTML = listItemsCart
}

//Отрисовка карточек в модальном окне
containerModalMenu.innerHTML = arrModalMenu
// setActiveCards
const cardContainer = document.getElementById('size-products')
function setActiveCards(category) {
  containerCategory = category
  if (category === 'ready') {
    renderReady()
  } else {
    // console.log(data.menu);
    // let arrNameProducts =
    console.log(data[category])
    let arrModalMenu = Object.values(data[category])
      .map(
        item => `
        <button onClick="itemAddCart('${item.name}',${item.price})" class="product-size-card-buttons">
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

const containerSum = document.getElementById(
  'the-final-price-of-the-product-in-the-modal-window'
)

let arrNameInBasket = {
  sizes: { name: '', price: 0, nameСhapter: 'Размер' },
  breads: { name: '', price: 0, nameСhapter: 'Хлеб' },
  vegetables: { nameСhapter: 'Овощи', id: '0', stuffing: [] },
  sauces: { nameСhapter: 'Соусы', id: '1', stuffing: [] },
  fillings: { name: '', price: 0, nameСhapter: 'Начинка' },
}

let containerCategory
let sumProducts
function itemAddCart(nameProduct, priceProduct) {
  switch (containerCategory) {
    case 'sizes':
      arrNameInBasket.sizes.name = nameProduct
      arrNameInBasket.sizes.price = priceProduct
      break
    case 'breads':
      arrNameInBasket.breads.name = nameProduct
      arrNameInBasket.breads.price = priceProduct
      break
    case 'vegetables':
      arrNameInBasket.vegetables.stuffing.push({
        name: nameProduct,
        price: priceProduct,
      })
      if (arrNameInBasket.vegetables.stuffing.length > 3) {
        arrNameInBasket.vegetables.stuffing.shift()
      }
      break
    case 'sauces':
      arrNameInBasket.sauces.stuffing.push({
        name: nameProduct,
        price: priceProduct,
      })
      if (arrNameInBasket.sauces.stuffing.length > 3) {
        arrNameInBasket.sauces.stuffing.shift()
      }
      break
    case 'fillings':
      arrNameInBasket.fillings.name = nameProduct
      arrNameInBasket.fillings.price = priceProduct
      break
  }

  sumPricesProduct()
  console.log(arrNameInBasket)
}

let productount = 1
let price = 0
function sumPricesProduct() {
  let priceSize = arrNameInBasket.sizes.price
  const finalSum = (priceSize + arrNameInBasket.fillings.price) * productount
  containerSum.innerHTML = finalSum
  price = finalSum
}

const titleList = {
  0: 'Выберите размер сендвича',
  1: 'Хлеб для сендвича на выбор',
  2: 'Дополнительные овощи бесплатно',
  3: 'Выберите 3 бесплатных соуса по вкусу',
  4: 'Добавьте начинку по вкусу',
  5: 'Проверьте и добавьте в корзину',
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
  document.querySelector('p').textContent = titleList[indexCategory]
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

let counter = document.querySelector('.input-in-modal-window')
function plusAndMinus(action) {
  if (action === 'minus' && productount > 1) {
    productount = --productount
  } else if (action != 'minus') {
    productount = ++productount
  }
  sumPricesProduct()
  counter.innerHTML = productount
}

let arrFinalBasket = []
function finalBtnModal() {
  arrFinalBasket.push({ name: 'Овощной', price, count: productount })
  let finalsUM = 0
  let lastArrBasket = arrFinalBasket
    .map(element => {
      finalsUM += element.price
      return `<div class="quantity-and-name-one-product">
        <div class="main-name-product" id="main-name-product-id">${element.name}</div>
        <div class="order-name-and-quantity" id="total-order-quantity">
          ${element.count}
        </div>
        </div>
             `
    })
    .join('')
  const containerValueBasket = document.getElementById('name-and-value-id')
  containerValueBasket.innerHTML = lastArrBasket
  document.getElementById('id-final-purchase-price').innerHTML = finalsUM
  initialDataSetting()
}

function initialDataSetting() {
  document.getElementById('my-modal').classList.remove('open')
  document.getElementById('body-id').classList.remove('modal-open')
  arrNameInBasket = {
    sizes: { name: '', price: 0, nameСhapter: 'Размер' },
    breads: { name: '', price: 0, nameСhapter: 'Хлеб' },
    vegetables: { nameСhapter: 'Овощи', id: '0', stuffing: [] },
    sauces: { nameСhapter: 'Соусы', id: '1', stuffing: [] },
    fillings: { name: '', price: 0, nameСhapter: 'Начинка' },
  }
  productount = 1
  setActiveBtn(0)
  sumPricesProduct()
  setActiveCards('sizes')
  counter.innerHTML = productount
}
//========================================================================================================
getCustomerId()
