let count = 0;
let countEl = document.getElementById("counter-el")

function increment() {
    count += 1;
    countEl.innerText = count
}

let saveCount = document.getElementById("save-count")

function save() {
    saveCount.textContent += count + " - "
    count = 0
    countEl.innerText = 0
}
