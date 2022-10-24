const button = document.querySelector('.button')
const body = document.querySelector('body')

button.addEventListener('click',switched)

let control = true

function switched(){

  if (control == true){

    button.classList = 'button dark'
    body.style.background = 'var(--dark)'
    control = false
    
  }else{

    button.classList = 'button light'
    body.style.background = 'var(--light)'
    control = true

  }

}