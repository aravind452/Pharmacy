export default function ValidateRegisterValues(values, allUsers) {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your Name";
  } else if (!(values.name.length > 3)) {
    errors.name = "Please enter valid Name";
  }
  if (!values.email.trim()) {
    errors.email = "Please enter your Email Address";
    //eslint-disable-next-line
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
    //eslint-disable-line
    errors.email = "Invalid Email Address";
  } else if (allUsers.filter((user) => user.email === values.email).length) {
    errors.email = "Email Address already exists";
  }
  if (values.email !== values.confirm_email) {
    errors.confirm_email = "Email Address mismatch";
  }

  if (!(values.password.length > 7)) {
    errors.password =
      "Password should have Minimum eight characters, at least one uppercase letter, one lowercase letter and one number.";
  }

  if (values.password !== values.confirm_password) {
    errors.confirm_password = "Password mismatch";
  }

  return errors;
}
