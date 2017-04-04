/**
 * Validate email
 * Return string if invalid, null otherwise
 * @param usernameEmail
 * @returns {*}
 */
const validateUsernameEmail = usernameEmail => {
  if (usernameEmail.length === 0) {
    return 'You must enter an email address or an username';
  }
  return null;
};

/**
 * Validate password
 * Return string if invalid, null otherwise
 * @param password
 * @returns {*}
 */
const validatePassword = password => {
  if (password.length === 0) {
    return 'You must enter a password';
  }
  return null;
};

/**
 * Check if the form is valid
 * Return an array of errors and a boolean
 * saying if the form is valid or  not
 * @param creds
 * @returns {{}}
 */
const formValidationSync = creds => {
  const result = {
    isValid: true,
    errors: {}
  };
  const {usernameEmail, password} = creds;
  let error;

  if ((error = validateUsernameEmail(usernameEmail))) {
    result.isValid = false;
    result.errors.usernameEmail = error;
  }

  if ((error = validatePassword(password))) {
    result.isValid = false;
    result.errors.password = error;
  }

  return result;
};

export default formValidationSync;
