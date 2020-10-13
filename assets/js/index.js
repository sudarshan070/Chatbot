function openBot() {
    var openBot = document.getElementById("chatBot")
    openBot.classList.add('openBot')
    openBot.classList.remove('closeBot')
    openBot.classList.remove("outer-hide")
    document.querySelector(".popup-open-btn").style.display = "none"
}
function closeBot() {
    var closeBot = document.getElementById("chatBot")
    closeBot.classList.remove('openBot')
    closeBot.classList.add('closeBot')


    document.querySelector(".popup-open-btn").style.display = "block";
}