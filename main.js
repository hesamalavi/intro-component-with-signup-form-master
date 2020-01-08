const name = document.getElementById('FirstName')
const lastName = document.getElementById('LastName')
const email = document.getElementById('EmailAddress')
const password = document.getElementById('Password')
const form = document.getElementById('form')
const errorEmail = document.getElementById('error-Email')

// function to change the placeholder color when there is an error
function update() {
 document.querySelectorAll('input[type=text]')[0].style.setProperty("--c", "red")
 document.querySelectorAll('input[type=text]')[1].style.setProperty("--c", "red")
 document.querySelectorAll('input[type=email]')[0].style.setProperty("--c", "red")
 document.querySelectorAll('input[type=password]')[0].style.setProperty("--c", "red")
}

// Form error messages when the fields are left empty after submitting.

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
  return true
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

// Simpler Email validation and error message

// const emailValidate = document.getElementById("EmailAddress");
function validEmail() {
 email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
   email.setCustomValidity("Looks like this is not an email");
  } else {
   email.setCustomValidity("");
  }
 });
}
