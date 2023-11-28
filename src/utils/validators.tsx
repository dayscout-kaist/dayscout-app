export const validateEmail = (email: string): boolean => {
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  return reg.test(email);
};

export const validateNickname = (nickname: string): boolean => {
  const reg = /^[가-힣a-zA-Z]{2,16}$/;
  return reg.test(nickname);
};
