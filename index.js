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

// =========================Смена карточек ингридиентов в модальном окне==============================

document.getElementById('open-size').addEventListener('click', function () {
  document.getElementById('size-menu').classList.add('open')
})

document
  .getElementById('close-my-modal-btn')
  .addEventListener('click', function () {
    document.getElementById('size-menu').classList.remove('open')
  })

// =======================Смена карточек продуктов в главном меню===================================

document
  .getElementById('open-burger-menu')
  .addEventListener('click', function () {
    document.getElementById('burger-menu-reveal-button').classList.add('open')
  })

document
  .getElementById('open-pancakes-menu')
  .addEventListener('click', function () {
    document
      .getElementById('burger-menu-reveal-button')
      .classList.remove('open')
  })

document
  .getElementById('open-shawarma-menu')
  .addEventListener('click', function () {
    document
      .getElementById('burger-menu-reveal-button')
      .classList.remove('open')
  })
document
  .getElementById('open-sandwiches-menu')
  .addEventListener('click', function () {
    document
      .getElementById('burger-menu-reveal-button')
      .classList.remove('open')
  })
document
  .getElementById('open-chicken-and-potato-menu')
  .addEventListener('click', function () {
    document
      .getElementById('burger-menu-reveal-button')
      .classList.remove('open')
  })
document
  .getElementById('open-tortilla-and-salads-menu')
  .addEventListener('click', function () {
    document
      .getElementById('burger-menu-reveal-button')
      .classList.remove('open')
  })
document
  .getElementById('open-drinks-and-desserts-menu')
  .addEventListener('click', function () {
    document
      .getElementById('burger-menu-reveal-button')
      .classList.remove('open')
  })

// ====================================================================================================

document
  .getElementById('open-pancakes-menu')
  .addEventListener('click', function () {
    document.getElementById('pancakes-menu-reveal-button').classList.add('open')
  })

document
  .getElementById('open-burger-menu')
  .addEventListener('click', function () {
    document
      .getElementById('pancakes-menu-reveal-button')
      .classList.remove('open')
  })
document
  .getElementById('open-shawarma-menu')
  .addEventListener('click', function () {
    document
      .getElementById('pancakes-menu-reveal-button')
      .classList.remove('open')
  })
document
  .getElementById('open-sandwiches-menu')
  .addEventListener('click', function () {
    document
      .getElementById('pancakes-menu-reveal-button')
      .classList.remove('open')
  })
document
  .getElementById('open-chicken-and-potato-menu')
  .addEventListener('click', function () {
    document
      .getElementById('pancakes-menu-reveal-button')
      .classList.remove('open')
  })
document
  .getElementById('open-tortilla-and-salads-menu')
  .addEventListener('click', function () {
    document
      .getElementById('pancakes-menu-reveal-button')
      .classList.remove('open')
  })
document
  .getElementById('open-drinks-and-desserts-menu')
  .addEventListener('click', function () {
    document
      .getElementById('pancakes-menu-reveal-button')
      .classList.remove('open')
  })
// ========================================================================================================

document
  .getElementById('open-shawarma-menu')
  .addEventListener('click', function () {
    document.getElementById('shawarma-menu-reveal-button').classList.add('open')
  })

document
  .getElementById('open-burger-menu')
  .addEventListener('click', function () {
    document
      .getElementById('shawarma-menu-reveal-button')
      .classList.remove('open')
  })

// ============================================================================================================

document
  .getElementById('open-sandwiches-menu')
  .addEventListener('click', function () {
    document
      .getElementById('sandwiches-menu-reveal-button')
      .classList.add('open')
  })

document
  .getElementById('open-burger-menu')
  .addEventListener('click', function () {
    document
      .getElementById('sandwiches-menu-reveal-button')
      .classList.remove('open')
  })

// ===============================================================================================================

document
  .getElementById('open-chicken-and-potato-menu')
  .addEventListener('click', function () {
    document
      .getElementById('chicken-and-potato-menu-reveal-button')
      .classList.add('open')
  })

document
  .getElementById('open-burger-menu')
  .addEventListener('click', function () {
    document
      .getElementById('chicken-and-potato-menu-reveal-button')
      .classList.remove('open')
  })

// =================================================================================================================

document
  .getElementById('open-tortilla-and-salads-menu')
  .addEventListener('click', function () {
    document
      .getElementById('tortilla-and-salads-menu-reveal-button')
      .classList.add('open')
  })

document
  .getElementById('open-burger-menu')
  .addEventListener('click', function () {
    document
      .getElementById('tortilla-and-salads-menu-reveal-button')
      .classList.remove('open')
  })

// ====================================================================================================================

document
  .getElementById('open-drinks-and-desserts-menu')
  .addEventListener('click', function () {
    document
      .getElementById('drinks-and-desserts-menu-reveal-button')
      .classList.add('open')
  })

document
  .getElementById('open-burger-menu')
  .addEventListener('click', function () {
    document
      .getElementById('drinks-and-desserts-menu-reveal-button')
      .classList.remove('open')
  })

// =======================================================================================================================
