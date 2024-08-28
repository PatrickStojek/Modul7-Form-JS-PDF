const textEl = document.querySelector('.textArea')
const btnEl = document.querySelector('input[type="submit"]')
const ulEl = document.querySelector('.comments')

btnEl.addEventListener('click', addComment)

function addComment(e) {
    const text = textEl.value;
    const newLi = document.querySelector('li')
    newLi.innerHTML = text
    ulEl.appendChild(newLi)
}