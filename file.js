const fileEl = document.querySelector('input[type="file"]')
fileEl.addEventListener('change', showInfoFile)

function showInfoFile(e) {
    const file = e.target.files[0]

    console.log(file.name, (file.size / 1024), file.type)
}

function readFile(e) {
    const file = e.target.files[0]
    if(file && file.type.includes('image')) {
        const reader = new FileReader()

        reader.onload = function(readerEvent) {
            const newImg = document.createElement('img')
            newImg.src = readerEvent.target.result
            document.body.appendChild(newImg)
            
        }
        reader.readAsDataURL(file)
    }
}

function readTextFile(e) {
    const file = e.target.files[0]
    const pElement = document.querySelector('.forText')
    if(file && file.type.includes('text')) {
        const reader = new FileReader()
        reader.onload = function(readerEvent) {
            const content = readerEvent.target.result
            pElement.textContent = content
        }
        reader.readAsText(file, 'UTF-8')
    } else {
        alert('choos a text file!')
    } 
}

fileEl.addEventListener('change', readTextFile)