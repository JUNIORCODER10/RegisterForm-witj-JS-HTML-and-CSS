
const form = document.getElementById('form')
const  username = document.getElementById('username')
const  email = document.getElementById('email')
const  password = document.getElementById('password')
const confirmPassword = document.getElementById('password2')

function verifierInput(){

    //recuper les valeurs des inputs
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const confirmPasswordValue= confirmPassword.value.trim() 

    if(usernameValue === ''){
    setErreur(username, "vous devez remplir ce champ!")
    }else{
    setSuccess(username)
    }

    if(emailValue === ''){
        setErreur(email, "vous devez remplir ce champ!")
        }else if(!isEmail(emailValue)){
            setErreur(email, "l'email n'est pas valid !")
        } else{
        setSuccess(email)
        }

    if(passwordValue === ''){
       setErreur(password, "vous devez remplir ce champ!")
      }else if (passwordValue.length <= 7){
        setErreur(password, "le mots de passe doit contenir au moin 7 lettres")
      }else if(!/[A-Z]/.test(passwordValue.charAt(0))){
        setErreur(password, "La premiere lettre du mots de passe doit etre en majuscule!")  
      }else if(!/\d/.test(passwordValue)){
        setErreur(password, "le mots de passe doit contenir au moins un chiffre !")
      }
        else{
        setSuccess(password)
    }
    if(confirmPasswordValue === ''){
        setErreur(confirmPassword, "vous devez remplir ce champ!")
        }else if(confirmPasswordValue != passwordValue) {
           setErreur(confirmPassword, 'les 2 mots mots de passes ne sont pas identiques .')
        }   
        else {
        setSuccess(confirmPassword)
        }
}

function setErreur(input, message){

 const formControl = input.parentElement
 const small = formControl.querySelector('small')

 small.innerText = message

 formControl.className = 'form-control error'

}

function setSuccess(input){
    const formControl = input.parentElement
    
    formControl.className = 'form-control success'


}



form.addEventListener('submit', e => {
    e.preventDefault()

    verifierInput()
    // Vérification si tous les champs sont valides avant d'afficher le popup
    const inputs = [username, email, password, confirmPassword];
    const isValid = inputs.every(input => {
        return input.parentElement.classList.contains('success');
    });

    if (isValid) {
        // Si tous les champs sont valides, afficher le popup
        alert('Votre compte a été créé avec succès !');
    }
})

function isEmail(email){
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email)
}
