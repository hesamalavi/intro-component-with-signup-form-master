const name = document.getElementById('FirstName')
const lastName = document.getElementById('LastName')
const email = document.getElementById('EmailAddress')
const password = document.getElementById('Password')
const form = document.getElementById('form')
const errorEmail = document.getElementById('error-Email')

// function to change the placeholder color when there is an error
function update() {
 document.querySelector('input[type=text]').style.setProperty("--c", "red")
 document.querySelectorAll('input[type=text]')[1].style.setProperty("--c", "red")
 document.querySelectorAll('input[type=text]')[2].style.setProperty("--c", "red")
 document.querySelectorAll('input[type=password]')[0].style.setProperty("--c", "red")
}

// Form error messages when the fields are empty (after submitting)

// First Name error message
form.addEventListener('submit', (e) => {
 let messages = []
 if (name.value === '' || name.value === null) {
  messages.push('First Name Can\'t be empty')
 }

 if (messages.length > 0) {
  e.preventDefault()
  document.getElementById("FirstName").placeholder = messages.join(', ')
 } else {
  document.getElementById("FirstName").placeholder = '';
 }
})

// Last Name error message
form.addEventListener('submit', (e) => {
 let messages = []
 if (lastName.value === '' || lastName.value === null) {
  messages.push('Last Name Can\'t be empty')
 }

 if (messages.length > 0) {
  e.preventDefault()
  document.getElementById("LastName").placeholder = messages.join(', ')
 } else {
  document.getElementById("LastName").placeholder = '';
 }

})

// Email Address error message
form.addEventListener('submit', (e) => {
 let messages = []
 if (email.value === '' || email.value === null) {
  messages.push('Email Can\'t be empty')
 }

 if (messages.length > 0) {
  e.preventDefault()
  document.getElementById("EmailAddress").placeholder = messages.join(', ')
 } else {
  document.getElementById("EmailAddress").placeholder = '';
 }

})

// Last Name error message
form.addEventListener('submit', (e) => {
 let messages = []
 if (password.value === '' || password.value === null) {
  messages.push('Password Can\'t be empty')
 }

 if (messages.length > 0) {
  e.preventDefault()
  document.getElementById("Password").placeholder = messages.join(', ')
 } else {
  document.getElementById("Password").placeholder = '';
 }

})

// Email validation and error message
function validateEmail(emailField) {
 var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

 if (reg.test(emailField.value) == false) {
  errorEmail.innerText = 'Looks like this is not an email';
  return false;
 }
 {

  errorEmail.innerText = "";
  return true;
 }
}







