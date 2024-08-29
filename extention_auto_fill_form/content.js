
const USERNAME = 'AveksaAdmin';
const PASSWORD = 'Aveksa123';


function fillLoginForm() {
 
  const usernameField = document.getElementById('Name1');
  const passwordField = document.getElementById('Pass1');
  const loginButton = document.getElementById('login');
  
  if (usernameField && passwordField) {
    usernameField.value = USERNAME;
    passwordField.value = PASSWORD;
    loginButton.click();
    
  } else {
    console.log('Login form fields not found');
  }
}

if (window.location.href.includes('/aveksa/main')) {
  fillLoginForm();
} else {
  console.log('Not on the target page');
}
