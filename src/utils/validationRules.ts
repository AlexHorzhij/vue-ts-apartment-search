import { IValid } from "@/types/data";

export const notEmpty = (val: string): IValid => ({
  message: "Field can't be empty",
  result: !!val,
});

export const symbolsLimit =
  (limit: number) =>
  (val: string): IValid => ({
    message: `${limit} symbols maximum`,
    result: val.length < limit,
  });

export const symbolsMinLimit =
  (limit: number) =>
  (val: string): IValid => ({
    message: `${limit} symbols minimum`,
    result: val.length >= limit,
  });

export const emailValidation = (val: string): IValid => ({
  message: "Wrong email",
  result: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(val),
});

export const passwordValidation = (val: string): IValid => ({
  message: "Password must contain 1 number and 1 symbol",
  result: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(val),
});

//   result: /^(?=.*[A-Za-z])(?=.*[\d])[a-zA-Z0-9]{7,256}$/.test(val),

export const passwordConfirmValidation =
  (val1: string) =>
  (val2: string): IValid => ({
    message: "Passwords don't match",
    result: val1 === val2,
  });
