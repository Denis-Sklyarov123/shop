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
    document.getElementById('body-id').classList.remove('modal-open')
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
   <div class="name-of-final-products" id="container-category">
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

    let listItemsCart = Object.values(arrNameInBasket)
      .map(item => {
        console.log(item)
        if (item.fillings) {
          if (item.fillings.length) {
            return item.fillings.map(aaa => {
              return `<div
              class="size-of-the-final-product"
              id="sizes-products"
              >
              ${aaa.nameСhapter}: ${aaa.name}
              </div>`
            })
          } else {
            return `<div
            class="size-of-the-final-product"
            id="sizes-products"
            >
            ${item.nameСhapter}: Не выбран
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

    const containerCategoryElement =
      document.getElementById('container-category')
    containerCategoryElement.innerHTML = listItemsCart
  } else {
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

let arrNameInBasket = {
  sizes: { name: '', price: 0, nameСhapter: 'Размер' },
  breads: { name: '', price: 0, nameСhapter: 'Хлеб' },
  vegetables: { nameСhapter: 'aaaa', fillings: [{ name: '', price: 0 }] },
  // sauces: [],
  fillings: { name: '', price: 0, nameСhapter: 'Начинка' },
}

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
      arrNameInBasket.vegetables.push({
        name: nameProduct,
        price: priceProduct,
        nameСhapter: 'Овощи',
      })
      if (arrNameInBasket.vegetables.length > 3) {
        arrNameInBasket.vegetables.shift()
      }
      break
    case 'sauces':
      arrNameInBasket.sauces.push({
        name: nameProduct,
        price: priceProduct,
        nameСhapter: 'Соусы',
      })
      if (arrNameInBasket.sauces.length > 3) {
        arrNameInBasket.sauces.shift()
      }
      break
    case 'fillings':
      arrNameInBasket.fillings.name = nameProduct
      arrNameInBasket.fillings.price = priceProduct
      break
  }
  console.log(arrNameInBasket)
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

//========================================================================================================
getCustomerId()
