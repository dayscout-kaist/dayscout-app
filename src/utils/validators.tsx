export const validateEmail = (email: string): boolean => {
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  return reg.test(email);
};

export const validateNickname = (nickname: string): boolean => {
  const reg = /^[가-힣a-zA-Z]{2,16}$/;
  return reg.test(nickname);
};

export const validateDecimalString = (str: string): boolean => {
  const reg = /^([0-9]*[.])?[0-9]+$/;
  return reg.test(str);
};

export const validateBirth = (birth: string): boolean => {
  const reg =
    /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;
  return reg.test(birth);
};
