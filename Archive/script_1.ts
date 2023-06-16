const form = document.getElementById('signupForm')
const firstName = document.getElementById('firstName')as HTMLInputElement;
const age = document.getElementById('age') as HTMLInputElement;

function gift(age: number) {
    return +age+3
   }

form.addEventListener('submit', e=>{
    e.preventDefault()

    if (+age.value<18) {
        console.log('refusé')
    }else{
        console.log(`
        Bienvenue ${firstName.value}.
        Vous avez ${age.value}.
        Vous aurez un cadeau  ${gift(+age.value)}
        `)
    }
})