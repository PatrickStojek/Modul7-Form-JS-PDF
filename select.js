const selectLabel =  document.querySelector('.optionLabel')
selectLabel.addEventListener('change', showOptionsInfo) 

function showOptionsInfo(e) {
    const optionList = document.querySelectorAll('option')
    optionList.forEach((option) => {
        console.log(option.value, option.innerText, option.selected)
    }) 
}