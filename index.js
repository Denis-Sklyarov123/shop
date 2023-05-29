document
  .getElementById('open-modal-btn-1')
  .addEventListener('click', function () {
    document.getElementById('my-modal').classList.add('open')
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

document
  .getElementById('open-modal-btn-2')
  .addEventListener('click', function () {
    document.getElementById('my-modal').classList.add('open')
  })

document
  .getElementById('open-modal-btn-3')
  .addEventListener('click', function () {
    document.getElementById('my-modal').classList.add('open')
  })

document
  .getElementById('open-modal-btn-4')
  .addEventListener('click', function () {
    document.getElementById('my-modal').classList.add('open')
  })

document
  .getElementById('open-modal-btn-5')
  .addEventListener('click', function () {
    document.getElementById('my-modal').classList.add('open')
  })

document
  .getElementById('open-modal-btn-6')
  .addEventListener('click', function () {
    document.getElementById('my-modal').classList.add('open')
  })

document.getElementById('open-size').addEventListener('click', function () {
  document.getElementById('size-menu').classList.add('open')
})

document
  .getElementById('close-my-modal-btn')
  .addEventListener('click', function () {
    document.getElementById('size-menu').classList.remove('open')
  })
