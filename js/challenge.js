const counter = document.getElementById('counter')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const heart = document.getElementById('heart')
const pause = document.getElementById('pause')

const input = document.getElementById('comment-input')
const submit = document.getElementById('submit')
const commentList = document.getElementById('list')

document.addEventListener("DOMContentLoaded", function() {
    timer = window.setInterval(startCounter, 1000)
  }); 

function startCounter() {
    counter.innerText++
}

minus.addEventListener("click", () => {
    counter.innerText--
});

plus.addEventListener("click", () => {
    counter.innerText++
});

heart.addEventListener("click", () => {
    let clockNumber = counter.innerText
    countLikes(clockNumber)
});

function countLikes(number) {
    const list = document.getElementsByClassName('likes')[0]
    let like = document.createElement('li')
    like.innerText = `${number} has been liked`
    list.appendChild(like)
}

pause.addEventListener("click", () => {
    if (pause.innerText == "pause") {
        clearInterval(timer)
        minus.disabled = true;
        plus.disabled = true;
        heart.disabled = true;
        pause.innerText = "resume"
    } else {
        timer = window.setInterval(startCounter, 1000)
        minus.disabled = false;
        plus.disabled = false;
        heart.disabled = false;
        pause.innerText = "pause"
    }
});

submit.addEventListener('click', (e) => {
    e.preventDefault()
    let commentText = input.value
    let comment = document.createElement("li")
    comment.innerText = commentText
    list.appendChild(comment)
    input.value = ""
});

