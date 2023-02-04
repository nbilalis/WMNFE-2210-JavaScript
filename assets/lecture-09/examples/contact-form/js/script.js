const form = document.querySelector('form');
const fields = form.querySelectorAll('input, textarea');

// For each field...
for (const field of fields) {
  // ...create an error message element.
  const error = document.createElement('div');
  error.classList.add('error-message');
  field.parentElement.insertBefore(error, field.nextSibling);

  // Add an event listener to the `blur` event`.
  field.addEventListener('blur', () => {
    validateField(field);
  });
}

// Add an event listener to the `submit` event.
form.addEventListener('submit', (event) => {
  // Prevent the default behavior.
  event.preventDefault();

  // Validate all fields.
  let valid = true;

  for (const field of fields) {
    if (!validateField(field)) {
      valid = false;
    }
  }

  // If all fields are valid, submit the form.
  if (valid) {
    // form.submit();
  }
});


const validateField = (field) => {
  const value = field.value.trim();
  const dataset = field.dataset;
  const validationType = dataset['validationType'];
  const error = field.nextElementSibling;

  if (dataset['required'] === 'true' && value.length === 0) {
    error.textContent = 'This field is required';
    field.classList.add('error');

    return false;
  }

  if (dataset['minLength'] && value.length < dataset['minLength']) {
    error.textContent = `The value must be at least ${dataset['minLength']} characters long`;
    field.classList.add('error');

    return false;
  }

  const email_re = /^[\w\.]+@\w+\.\w{2,10}$/;
  if (validationType === 'email' && !value.match(email_re)) {
    error.textContent = 'Please enter a valid email address';
    field.classList.add('error');

    return false;
  }

  const phone_re = /^\+?[\d() -]{10,15}$/;
  if (validationType === 'phone' && !value.match(phone_re)) {
    error.textContent = 'Please enter a valid phone number';
    field.classList.add('error');

    return false;
  }

  const confirmFieldId = dataset['confirmFieldId'];
  if (confirmFieldId) {
    const confirmField = document.getElementById(confirmFieldId);
    const confirmFieldValue = confirmField.value.trim();

    if (value !== confirmFieldValue) {
      error.textContent = 'The values do not match';
      field.classList.add('error');

      return false;
    }
  }

  error.textContent = '';
  field.classList.remove('error');

  return true;
};
