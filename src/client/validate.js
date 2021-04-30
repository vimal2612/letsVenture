const validate = (inputs) => {
  //Email errors
  const errors = {};
  if (!inputs.email) {
    errors.email = "Check Email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputs.email)) {
    errors.email = "Invalid email address";
  }

  //Password Errors
  if (!inputs.fName || inputs.fName.length < 1) {
    errors.password = "Check Password";
  }
  if (!inputs.lName || inputs.lName.length < 1) {
    errors.password = "Check Password";
  }
  if (!inputs.file || inputs.lName.length < 1) {
    errors.password = "please upload file";
  }
  return errors;
};

export default validate;
