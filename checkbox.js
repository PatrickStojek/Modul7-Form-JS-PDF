const formEL3 = document.querySelector('.confirmForm')
console.log(formEL3)
formEL3.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
    e.preventDefault()
    const confirm = e.target.elements['confirm']
    if(!confirm.checked) {
        const numberAgreement = confirm.value;
        alert(`Confirm agreement no ${numberAgreement}`)
    } else {
        alert('Thank you! Data was sent')
    }
}