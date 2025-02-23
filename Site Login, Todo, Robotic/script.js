const singUpButton = document.getElementById('singUpButton')
const singInButton = document.getElementById('singInButton')
const singInForm=document.getElementById('singIn')
const singUpform=document.getElementById('singup')

singUpButton.addEventListener('click', function(){
    singUpform.style.display="block";
    singInForm.style.display="none";
})

singInButton.addEventListener('click', function(){
    singInForm.style.display="block";
    singUpform.style.display="none";
})