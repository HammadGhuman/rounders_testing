import { baseurl } from "@/constant/constants";
import axios, { AxiosError } from "axios";

export class CustomError extends Error {
  constructor(
    message: string,
    public details: { status: number; errorMessage: string }
  ) {
    super(message);
    this.details = details;
    this.name = "CustomError";
  }
}

type Login = {
  email: string;
  password: string;
};
export async function login(data: Login) {
  try {
    const res = await axios.post(`${baseurl}/api/signin`, data);
    return res;
  } catch (err: AxiosError | any) {
    if (err.response.status == 400) {
      const customError = new CustomError("An Error Occured", {
        status: 400,
        errorMessage: "invalid Credential",
      });
      throw customError;
    } else {
      throw new Error("An error occurred during login");
    }
  }
}

export async function signup(data: {
  email: string;
  password: string;
  phoneNumber: string;
}) {
  try {
    const res = await axios.post(`${baseurl}/api/signup`, data);
    return res;
  } catch (err: AxiosError | any) {
    if (err.response.status == 400) {
      const customError = new CustomError("An Error Occured", {
        status: 400,
        errorMessage: "Email Already Exist",
      });
      throw customError;
    } else {
      throw new Error("An error occurred during login");
    }
  }
}
