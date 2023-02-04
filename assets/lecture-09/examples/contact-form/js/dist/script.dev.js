"use strict";

var form = document.querySelector('form');
var fields = form.querySelectorAll('input, textarea'); // For each field...

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  var _loop = function _loop() {
    var field = _step.value;
    // ...create an error message element.
    var error = document.createElement('div');
    error.classList.add('error-message');
    field.parentElement.insertBefore(error, field.nextSibling); // Add an event listener to the `blur` event`.

    field.addEventListener('blur', function () {
      validateField(field);
    });
  };

  for (var _iterator = fields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    _loop();
  } // Add an event listener to the `submit` event.

} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

form.addEventListener('submit', function (event) {
  // Prevent the default behavior.
  event.preventDefault(); // Validate all fields.

  var valid = true;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = fields[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var field = _step2.value;

      if (!validateField(field)) {
        valid = false;
      }
    } // If all fields are valid, submit the form.

  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  if (valid) {// form.submit();
  }
});

var validateField = function validateField(field) {
  var value = field.value.trim();
  var dataset = field.dataset;
  var validationType = dataset['validationType'];
  var error = field.nextElementSibling;

  if (dataset['required'] === 'true' && value.length === 0) {
    error.textContent = 'This field is required';
    field.classList.add('error');
    return false;
  }

  if (dataset['minLength'] && value.length < dataset['minLength']) {
    error.textContent = "The value must be at least ".concat(dataset['minLength'], " characters long");
    field.classList.add('error');
    return false;
  }

  var email_re = /^[\w\.]+@\w+\.\w{2,10}$/;

  if (validationType === 'email' && !value.match(email_re)) {
    error.textContent = 'Please enter a valid email address';
    field.classList.add('error');
    return false;
  }

  var phone_re = /^\+?[\d() -]{10,15}$/;

  if (validationType === 'phone' && !value.match(phone_re)) {
    error.textContent = 'Please enter a valid phone number';
    field.classList.add('error');
    return false;
  }

  var confirmFieldId = dataset['confirmFieldId'];

  if (confirmFieldId) {
    var confirmField = document.getElementById(confirmFieldId);
    var confirmFieldValue = confirmField.value.trim();

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