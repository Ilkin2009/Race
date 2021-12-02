const car1 = document.querySelector(".car1")
const car2 = document.querySelector(".car2")
let haswin = false
const scoretext = document.querySelector(".score span")
let score = 100
let bet = 0
let bettext = document.querySelector(".bet span")
const minus = document.querySelector(".minus")
const plus = document.querySelector(".plus")
let whichcar = ""
let whitecar = document.querySelector(".white")
let blackcar = document.querySelector(".black")
const end = document.querySelector(".endGame")
end.onclick = function() {
    alert(`Вы выиграли ${score} денег`)
    bet = 0
    bettext.innerHTML = bet
    score = 100
    scoretext.innerHTML = score
}
plus.onclick = function() {
    if(bet >= score) {
        plus.disabled = true
    }
    else {
        bet += 10
        bettext.innerHTML = bet
        minus.disabled = false
    }
}
minus.onclick = function() {
    if(bet <= 0) {
        minus.disabled = true
    }
    else {
        bet -= 10
        bettext.innerHTML = bet
        plus.disabled = false
    }

}
function speedcar(car, color) {
    let margin = 0
    let inteval = setInterval(() => {
        let speed = Math.random() * 0.1

        margin += speed
        car.style.marginLeft = margin+"%"
        if(margin > 93) {
            haswin = true
            if(whichcar == color) {
                score += bet*2
                scoretext.innerHTML = score
                console.log(color,whichcar)
            }
        }
        if(haswin == true) {
            clearInterval(inteval)
            whitecar.disabled = false
            blackcar.disabled = false
            minus.disabled = false
            plus.disabled = false
            bet = 0
            bettext.innerHTML = bet
        }
    },5)
}
whitecar.onclick = function() {
    whichcar = "white"
    startrace()
}
blackcar.onclick = function() {
    whichcar = "black"
    startrace()
}
function startrace() {
    if(score > 0 && bet > 0) {
        haswin = false
        score -= bet
        scoretext.innerHTML = score
        speedcar(car1, "white")
        speedcar(car2, "black")
        whitecar.disabled = true
        blackcar.disabled = true
        minus.disabled = true
        plus.disabled = true
    }
    else if(score > 0 && bet <= 0 ){
        alert("Выберите ставку")
    }
}
