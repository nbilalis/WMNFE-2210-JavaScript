'use strict';

const form = document.getElementById('login-form');

form.addEventListener('submit', (event) => {
  // Referrences for the form elements
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  let isValid = true;

  // E-mail validation. Only Gmail are accepted, for simplicity

  /*
   * Some valid values

     ned.stark@gmail.com
     j0nsn0w@gmail.com
     last.season.sucked@gmail.gr
  */

  const gmail_re = /^[a-z0-9\.]+@gmail\.(com|gr)$/i;

  if (email.value.trim().length === 0) {
    // Required
    console.error('E-mail is missing');
    email.classList.add('error');
    isValid = false;
  } else if (!gmail_re.test(email.value)) {
    // Valid value
    console.error('E-mail is not valid');
    email.classList.add('error');
    isValid = false;
  } else {
    email.classList.remove('error');
  }

  const pass_re = /^[a-z0-9!@#$%]{8,}$/i;

  if (password.value.trim().length === 0) {
    // Required
    console.error('Password is missing');
    password.classList.add('error');
    isValid = false;
  } else if (!pass_re.test(password.value)) {
    // Valid value
    console.error('Password is not valid');
    password.classList.add('error');
    isValid = false;
  } else {
    password.classList.remove('error');
  }

  // Prevent submit if any validation failed
  if (!isValid) event.preventDefault();
});
