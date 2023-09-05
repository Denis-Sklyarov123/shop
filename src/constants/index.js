export const arrMenuItems = [
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

export const arrModalMenuItems = [
  { keyCategory: 'sizes', nameCategory: 'Размер' },
  { keyCategory: 'breads', nameCategory: 'Хлеб' },
  { keyCategory: 'vegetables', nameCategory: 'Овощи' },
  { keyCategory: 'sauces', nameCategory: 'Соусы' },
  { keyCategory: 'fillings', nameCategory: 'Начинка' },
  { keyCategory: 'ready', nameCategory: 'Готово' },
]

export let arrNameInBasket = {
  sizes: { name: '', price: 0, nameСhapter: 'Размер' },
  breads: { name: '', price: 0, nameСhapter: 'Хлеб' },
  vegetables: { nameСhapter: 'Овощи', id: '0', stuffing: [] },
  sauces: { nameСhapter: 'Соусы', id: '1', stuffing: [] },
  fillings: { name: '', price: 0, nameСhapter: 'Начинка' },
}

export const titleList = {
  0: 'Выберите размер сендвича',
  1: 'Хлеб для сендвича на выбор',
  2: 'Дополнительные овощи бесплатно',
  3: 'Выберите 3 бесплатных соуса по вкусу',
  4: 'Добавьте начинку по вкусу',
  5: 'Проверьте и добавьте в корзину',
}

export let productCount = 1
export let objBasketData = (objBasketData = {
  name: 'Овощной',
  keyFinalPriceInBasket: 0,
  count: 1,
})
export let containerValueBasket = document.getElementById('name-and-value-id')
export let cartInitialValues = {
  name: 'Овощной',
  keyFinalPriceInBasket: 0,
  count: 1,
}
export let finalPriceInBasket = 0
export let emptyPrice = 0
export let fullPrice = 0

export let arrSaucesIndex = []
export let arrVegetablesIndex = []
