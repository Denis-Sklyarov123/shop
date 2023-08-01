import MainMenu from './components/mainMenu'
import Card from './components/card'
import {
  arrMenuItems,
  arrModalMenuItems,
  arrNameInBasket,
  titleList,
} from './constants'
import ModalMenu from './components/modalMenu'
import ModalCard from './components/modalCards'
import BtnBackAndForward from './components/btnBackAndForward'
import PlusAndMinus from './components/plusAndMinus'
import LastBtnInModal from './components/lastBtnInModal'
import ResultSum from './components/resultSum'

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
    // setActiveBtn(0)
  }
  return window.data
}

// Главное меню
const containerMenu = document.getElementById('products-menu')

arrMenuItems.map(element => {
  new MainMenu(containerMenu, element.nameCategory, () => {
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
      new Card(productsContainer, item)
    })
}

// Меню модальное окна
const containerModalMenu = document.getElementById('modal-menu')
const btnContainer = document.getElementById('size-menu')
arrModalMenuItems.map((item, index) => {
  new ModalMenu(containerModalMenu, item.nameCategory, () => {
    cardContainer.innerHTML = ''
    setActiveCards(item.keyCategory, index)
    document.querySelector('p').textContent = titleList[index]
  })
})

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
const cardContainer = document.getElementById('size-products')
function setActiveCards(category, index) {
  containerCategory = category
  if (category === 'ready') {
    new BtnBackAndForward(btnContainer, index, BackAndForth)
    renderReady()
  } else {
    Object.values(data[category]).map(item => {
      new BtnBackAndForward(btnContainer, index, BackAndForth)
      return new ModalCard(cardContainer, item, () => {
        itemAddCart(item.name, item.price)
      })
    })
  }
}

function BackAndForth(type, index) {
  cardContainer.innerHTML = ''
  if (type === 'forward') {
    index = ++index
  } else {
    index = --index
  }

  if (index < 0 || index > arrModalMenuItems.length - 1) return

  const category = arrModalMenuItems[index].keyCategory
  setActiveCards(category, index)
}

// Сумма цен ингридиентов
const containerSum = document.getElementById(
  'the-final-price-of-the-product-in-the-modal-window'
)

let containerCategory
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
}

const containerPlusAndMinus = document.getElementById('id-buttons-and-quantity')

let price = 0
function sumPricesProduct() {
  let priceSize = arrNameInBasket.sizes.price
  const finalSum = (priceSize + arrNameInBasket.fillings.price) * productount
  containerSum.innerHTML = finalSum
  price = finalSum
}

//Кноки плюс и минус
let productount = 1
function plusAndMinus(action) {
  let counterPAM = document.querySelector('.input-in-modal-window')
  if (action === 'minus' && productount > 1) {
    productount = --productount
  } else if (action != 'minus') {
    productount = ++productount
  }
  sumPricesProduct()
  counterPAM.innerHTML = productount
}

new PlusAndMinus(containerPlusAndMinus, plusAndMinus)

//Кнопка добавления заказа из модального окна на основную страницу
const containerValueBasket = document.getElementById('name-and-value-id')
let arrFinalBasket = []
function finalBtnModal() {
  containerValueBasket.innerHTML = ''
  let newArrFinalBasket = arrFinalBasket
  newArrFinalBasket.push({ name: 'Овощной', price, count: productount })
  let finalsUM = 0
  newArrFinalBasket.map(element => {
    finalsUM += element.price
    return new ResultSum(containerValueBasket, element)
  })
  document.getElementById('id-final-purchase-price').innerHTML = finalsUM
  initialDataSetting()
}

const containerPriceAndBtnBasket = document.getElementById(
  'id-price-and-basket'
)
new LastBtnInModal(containerPriceAndBtnBasket, finalBtnModal)

//Кнопка выхода из модального окна и его обновление
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
  let newSum = 0
  productount = 1
  let counterFinal = document.querySelector('.input-in-modal-window')
  let newFinalSum = document.getElementById(
    'the-final-price-of-the-product-in-the-modal-window'
  )
  counterFinal.innerHTML = productount
  newFinalSum.innerHTML = newSum
  let containerLastNewCards = document.getElementById('size-products')
  containerLastNewCards.innerHTML = ''
  setActiveCards('sizes', '0')
}
//========================================================================================================
getCustomerId()
