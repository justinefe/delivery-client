const pattern:any = {
  email: [
    {
      message: "Enter a valid email",
      pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
    },
  ],
  password: [
    {
      message:
        "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters",
      pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
    },
  ],
  newPassword: [
    {
      message:
        "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters",
      pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
    },
  ],
  confirmPassword: [
    {
      message:
        "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters",
      pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
    },
  ],
  attestation: [
    {
      message: "Confirm you are above 18 years above",
      pattern: /^true$/,
    },
  ],
  gender: [
    {
      message: "Select your gender",
      pattern: /^(Fe)?male$/i,
    },
  ],
  fullName: [
    {
      message: "Full name should have a first name separated from last name",
      pattern: /^(\w\w+)\s(\w+)/,
    },
  ],
  firstName: [
    {
      message: "First name should be a string",
      pattern: /^(\w\w+)/,
    },
  ],
  profilephoto: [
    {
      message: "Profile name",
      pattern: /^(\w\w+)\s(\w+)/,
    },
  ],
  lastName: [
    {
      message: "Last name should be a string",
      pattern: /^(\w\w+)/,
    },
  ],
  monthly: [
    {
      message: "Select your plan",
      pattern: /^((?=.*[1-9]|0)(?:\d{1,3}))((?=.*\d)(?:\.\d{3})?)*((?=.*\d)(?:\,\d\d){1}?){0,1}$/i,
    },
  ],
  yearly: [
    {
      message: "Select your plan",
      pattern: /^((?=.*[1-9]|0)(?:\d{1,3}))((?=.*\d)(?:\.\d{3})?)*((?=.*\d)(?:\,\d\d){1}?){0,1}$/i,
    },
  ],
  desc: [
    {
      message: "Audio description should be a text",
      pattern: /.+/s,
    },
  ],
  title: [
    {
      message: "Audio title should be a text",
      pattern: /.+/s,
    },
  ],
  tags: [
    {
      message: "Tag is required",
      pattern: /\[[a-zA-z0-9-_. ,]+[a-zA-z0-9]*\] | [a-zA-z0-9-_., ]+/,
    },
  ],
  pronouns: [
    {
      message: "Pronoun is required",
      pattern: /\[[a-zA-z0-9-_. ,]+[a-zA-z0-9]*\] | [a-zA-z0-9-_., ]+/,
    },
  ],
  type: [
    {
      message: "Audio type must be selected be a string",
      pattern: /^#?[a-z0-9]+/gi,
    },
  ],
  audio: [
    {
      message: "Audio must be selected",
      pattern: /^(\w\w+)/,
    },
  ],
  thumb: [
    {
      message: "Thumbnail must be uploaded",
      pattern: /^(\w\w+)/,
    },
  ],
};

export const validate = (name:any, value:any, setError:any) => {
  const errorMsg = pattern[name].reduce((acc:any, validator:any) => {
    if (!validator.pattern.test(value)) {
      acc.push(validator.message);
    }
    return acc;
  }, []);
  if (errorMsg.length) {
    setError((prevState:any) => ({
      ...prevState,
      [name]: errorMsg,
    }));
    return true;
  }
  return false;
};

export const checkError = (errors : any) => Object.values(errors).some((err:any) => err.length > 0)