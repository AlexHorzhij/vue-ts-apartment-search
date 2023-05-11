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
