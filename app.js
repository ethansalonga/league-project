let isModalOpen = false

const toggleModal = () => {
  if (isModalOpen) {
    isModalOpen = false
    document.querySelector(".close-btn").classList.remove("show")
    setTimeout(() => {
      document.querySelector(".bento-menu").classList.remove("hide-anim-out")
      document.querySelector(".bento-menu").classList += " show-anim-in"
      document.querySelector(".showMenu").classList.remove("active")
    }, [1000])
    return
  }
  isModalOpen = true
  document.querySelector(".bento-menu").classList.remove("show-anim-in")
  document.querySelector(".bento-menu").classList += " hide-anim-out"
  document.querySelector(".close-btn").classList += " show"
  document.querySelector(".showMenu").classList += " active"
}

const toggleLoading = () => {
  document.querySelector(".btn-search").classList.remove("not-loading")
  document.querySelector(".btn-search").classList += " loading"
}
