export type TextInputValidator = (
  value: string,
) => { valid: true } | { valid: false; msg: string };
