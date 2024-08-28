const formEl = document.querySelector('form')
console.log(
    formEl.elements[0],
    formEl.action, formEl.method,
    formEl.notValidate,
    formEl.autocomplete
)

let notNullElements = []
for(const el of formEl.elements) {
    console.log(el)
    if(el.value !== null) {
        notNullElements = notNullElements.concat(el)
    }
}

console.log(notNullElements)
////////////////////////////
const search = window.location.search;

const searchParams = new URLSearchParams(search)

for(const [key, value] of searchParams) {
    console.log(key, ' => ', value)
}
formEl.autocomplete = 'off'
///////////////seconds form
const formElWithReset = document.querySelector('.reset')
formElWithReset.addEventListener('reset', function(e) {
    const userConfirm = confirm('are you sure to clear the form')
    if(!userConfirm) {
        e.preventDefault()
    }
})

////////third form
const CompanyForm = document.querySelector('.company')
CompanyForm.addEventListener('submit', function(e) {
    e.preventDefault()
    const company = e.target.elements.company;
    console.log(`the company you inputed is ${company.value}`)
})


