const name = document.getElementById('FirstName')
const lastName = document.getElementById('LastName')
const email = document.getElementById('EmailAddress')
const password = document.getElementById('Password')
const form = document.getElementById('form')
// const errorElement1 = document.getElementById('error-FirstName')
// const errorElement2 = document.getElementById('error-LastName')
// const errorElement3 = document.getElementById('error-Email')
// const errorElement4 = document.getElementById('error-Password')
// const emailAddr = document.getElementById('EmailAddress')

function update() {
 document.querySelector('input[type=text]').style.setProperty("--c", "red")
 document.querySelectorAll('input[type=text]')[1].style.setProperty("--c", "red")
 document.querySelectorAll('input[type=email]')[0].style.setProperty("--c", "red")
 document.querySelectorAll('input[type=password]')[0].style.setProperty("--c", "red")
}


// document.getElementById("FirstName").addEventListener("input", clearError1);

// function clearError1() {
//  messages = [];
//  errorElement1.innerHTML = "";
// }
// document.getElementById("LastName").addEventListener("input", clearError2);

// function clearError2() {
//  messages = [];
//  errorElement2.innerHTML = "";
// }
// document.getElementById("EmailAddress").addEventListener("input", clearError3);

// function clearError3() {
//  messages = [];
//  errorElement3.innerHTML = "";
// }
// document.getElementById("Password").addEventListener("input", clearError4);

// function clearError4() {
//  messages = [];
//  errorElement4.innerHTML = "";
// }



form.addEventListener('submit', (e) => {
 let messages = []
 if (name.value === '' || name.value === null) {
  messages.push('First Name Can\'t be empty')
 }

 if (messages.length > 0) {
  e.preventDefault()
  document.getElementById("FirstName").placeholder = messages.join(', ')
  // document.querySelectorAll('[placeholder="First Name"]')
  //  .style.color = "red";
 } else {
  errorElement1.innerText = '';
 }
})

form.addEventListener('submit', (e) => {
 let messages = []
 if (lastName.value === '' || lastName.value === null) {
  messages.push('Last Name Can\'t be empty')
 }


 if (messages.length > 0) {
  e.preventDefault()
  document.getElementById("LastName").placeholder = messages.join(', ')
 } else {
  errorElement2.innerText = '';
 }

})

form.addEventListener('submit', (e) => {
 let messages = []
 if (email.value === '' || email.value === null) {
  messages.push('Email Can\'t be empty')
 }

 if (messages.length > 0) {
  e.preventDefault()
  document.getElementById("EmailAddress").placeholder = messages.join(', ')
 } else {
  errorElement3.innerText = '';
 }

})

form.addEventListener('submit', (e) => {
 let messages = []
 if (password.value === '' || password.value === null) {
  messages.push('Password Can\'t be empty')
 }

 if (messages.length > 0) {
  e.preventDefault()
  document.getElementById("Password").placeholder = messages.join(', ')
 } else {
  errorElement4.innerText = '';
 }

})











function validateEmail(emailField) {
 var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

 if (reg.test(emailField.value) === false) {
  errorElement3.innerText = 'Looks like this is not an email';
  return false;
 }
 function clearEmailError() {
  emailField = [];
  errorElement3.innerHTML = "";
  return true;
 }



}






