(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const searchMenu = document.querySelector('#side-bar .search')
    const searchOpenBtn = document.querySelector('#side-bar .btn_search-city')
    const searchCloseBtn = document.querySelector('#side-bar .close')

    const clickHandler = (e) => {
      e.preventDefault()
      searchMenu.classList.toggle('search_active')
    }

    searchOpenBtn.addEventListener('click', clickHandler)
    searchCloseBtn.addEventListener('click', clickHandler)
  })
})()