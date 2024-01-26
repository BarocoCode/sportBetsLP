const toggleFavorite = () => {
  const starOff = document.querySelector(".favoriteStar.starOff")
  const starOn = document.querySelector(".favoriteStarOn.starOn")

  starOff.style.display = starOff.style.display === "none" ? "flex" : "none"
  starOn.style.display = starOn.style.display === "flex" ? "none" : "flex"
}
