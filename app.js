let isModalOpen = false

const toggleModal = () => {
  if (isModalOpen) {
    isModalOpen = false
    document.querySelector(".close-btn").classList.remove("show")
    setTimeout(() => {
      document.querySelector(".bento-menu").classList.remove("hide-anim-out")
      document.querySelector(".bento-menu").classList += " show-anim-in"
      document.querySelector(".showMenu").classList.remove("active")
    }, [800])
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

const contactAlert = () => {
  alert("This feature has not been implemented for this project.")
}

const getChampions = async () => {
  const champions = await fetch(
    "http://ddragon.leagueoflegends.com/cdn/12.15.1/data/en_US/champion/Caitlyn.json"
  )

  const championsData = await champions.json()
  console.log(championsData)
}

getChampions()
