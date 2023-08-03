import { arrMenuItems } from '/src/constants/index'

const pubSub = require('./pubsub')

module.exports = {
  publishEvent() {
    const data = arrMenuItems

    pubSub.publish('Hey Jony', data)
  },
}

// Здесь нам требуется модуль pubSub, и мы экспортируем объект с помощью метода publishEvent.
// Метод указывает некоторые данные, а затем вызывает метод pubSub.publish,
// передавая имя публикуемого события и созданный нами объект данных.
