export interface FormValues {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  image: File | string | null;
  country: string;
  acceptTerms: boolean;
}

export type Errors = Partial<{
  [key in keyof FormValues]: string;
}>;

export type FormValue = string | number | File | null | boolean;

export type FormDataObject = Record<string, FormValue>;
