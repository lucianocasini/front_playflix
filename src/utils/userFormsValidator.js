const validateUsername = (username) => {
  return username.match(/^[0-9a-zA-Z]+$/);
};

const validateEmail = (email) => {
  return email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w+)+$/);
};

const validatePassword = (password) => {
  return password.length >= 6 && password.length <= 25;
};

const validateConfirmPassword = (password1, password2) => {
  return password1 === password2;
};

export {
  validateUsername,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
};
