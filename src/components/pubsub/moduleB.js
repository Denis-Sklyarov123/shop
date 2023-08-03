const pubSub = require('./pubsub')

let subscription

subscription = pubSub.subscribe('Hey Jony', data => {
  data.map(element => {
    new MainMenu(containerMenu, element.nameCategory, () => {
      productsContainer.innerHTML = ''
      setActiveCategory(element.keyCategory)
    })
  })

  subscription.unsubscribe()
})

// Здесь мы импортируем модуль pubSub и вызываем метод subscribe, чтобы подписаться на событие.
// Мы передаем имя события, на которое мы хотим подписаться, и обратный вызов подписчика.
// Это обратный вызов, который сохраняется в массиве событий и будет вызываться при публикации события.
// Как мы видели ранее, он также предоставит нам необязательный объект данных,
// и в этом случае мы просто регистрируем свойство data.msg на консоли.
