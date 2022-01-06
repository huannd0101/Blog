const Regex = {
  PHONE: /^0[\d]{9}$/,
  NAME: /^[^0-9]{1,}$/,
  PASSWORD:
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[!@#%&*_?])([a-zA-Z0-9!@#%&*_?]{6,})$/,
  USERNAME: /^[a-zA-Z0-9]{6,}$/,
  EMAIL: /^[a-z][a-z0-9A-Z_]{5,32}@gmail.com$/,
  BIRTHDAY: /^[\d]{2}\/[\d]{2}\/[\d]{4}$/,
  NUMBER: /^[\d]{1,}$/,
};

export default Regex;
