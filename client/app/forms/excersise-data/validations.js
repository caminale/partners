/**
 * Validate email
 * Return string if invalid, null otherwise
 * @param dips
 * @returns {*}
 */
const validateDips = dips => {
  if (dips.length === 0) {
    return 'You must enter a number of repetitions';
  }
  return null;
};

/**
 * Validate password
 * Return string if invalid, null otherwise
 * @param squats
 * @returns {*}
 */
const validateSquats = squats => {
  if (squats.length === 0) {
    return 'You must enter a weight';
  }
  return null;
};

/**
 * Validate password
 * Return string if invalid, null otherwise
 * @param benchPress
 * @returns {*}
 */
const validateBenchPress = benchPress => {
  if (benchPress.length === 0) {
    return 'You must enter a weight';
  }
  return null;
};

/**
 * Validate password
 * Return string if invalid, null otherwise
 * @param pullDown
 * @returns {*}
 */
const validatePullDown = pullDown => {
  if (pullDown.length === 0) {
    return 'You must enter a weight';
  }
  return null;
};

/**
 * Check if the form is valid
 * Return an array of errors and a boolean
 * saying if the form is valid or  not
 * @param stats
 * @returns {{}}
 */
const formValidationSync = stats => {
  const result = {
    isValid: true,
    errors: {}
  };
  const {squats, benchPress, pullDown, dips} = stats;
  let error;

  if ((error = validateDips(dips))) {
    result.isValid = false;
    result.errors.dips = error;
  }

  if ((error = validateSquats(squats))) {
    result.isValid = false;
    result.errors.squats = error;
  }
  if ((error = validateBenchPress(benchPress))) {
    result.isValid = false;
    result.errors.benchPress = error;
  }
  if ((error = validatePullDown(pullDown))) {
    result.isValid = false;
    result.errors.pullDown = error;
  }

  return result;
};

export default formValidationSync;
