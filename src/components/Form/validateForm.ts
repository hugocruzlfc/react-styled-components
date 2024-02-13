interface IForm {
  name: string;
  email: string;
  password: string;
  confirmPass: string;
}

const regex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function validateForm({
  name,
  email,
  password,
  confirmPass,
}: IForm): string | null {
  if (!name.trim()) {
    return "Username required";
  }

  if (!email) {
    return "Email required";
  } else if (regex.test(email.toLocaleLowerCase())) {
    return "Email address is invalid";
  }

  if (!password) {
    return "Password is required";
  } else if (password.length < 6) {
    return "Password needs to be 6 characters or more";
  }

  if (!confirmPass) {
    return "Enter Confirm password is required";
  } else if (confirmPass !== password) {
    return "Passwords do not match";
  }
  return null;
}
