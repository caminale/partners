/**
 * Validate email
 * Return string if invalid, null otherwise
 * @param email
 * @returns {*}
 */
const validateEmail = email => {
  if (email.length === 0) {
    return 'You must enter an email address';
  }
  return null;
};

/**
 * Validate username
 * Return string if invalid, null otherwise
 * @param username
 * @returns {*}
 */
const validateUsername = username => {
  if (username.length === 0) {
    return 'You must enter an username ';
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

  else if (password.length > 0 && password.length <6) {
    return 'Your password must be 6 caracters long';
  }

  return null;
};




const validatePasswordConfirm = (password,passwordConfirm) => {

   if (passwordConfirm.length === 0) {
    return 'Your must confirm your password';
  }
  else if (password != passwordConfirm) {
    return 'Your passwords are not identical ';
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
  const {email, password, passwordConfirm, username} = creds;
  let error;

  if ((error = validateEmail(email))) {
    result.isValid = false;
    result.errors.email = error;
  }

  if ((error = validatePassword(password))) {
    result.isValid = false;
    result.errors.password = error;
  }

  if (error = validatePasswordConfirm(password,passwordConfirm)) {
    result.isValid = false;
    result.errors.passwordConfirm = error;
  }

  if (error = validateUsername(username)) {
    result.isValid = false;
    result.errors.username = error;
  }

  return result;
};

export default formValidationSync;
