import { baseurl } from "@/constant/constants";
import axios, { AxiosError } from "axios";
import { CustomError } from "../AuthFunctions";

export async function getUsers() {
  try {
    const res = await axios.get(`${baseurl}/api/users`);
    return res.data;
  } catch (err) {
    return err;
  }
}

export async function getUser(data: { id: string }) {
  try {
    const res = await axios.get(`${baseurl}/api/users/${data.id}`);
    return res.data;
  } catch (err) {
    return err;
  }
}

export async function deleteUser(data: { id: number }) {
  try {
    const res = await axios.delete(`${baseurl}/api/users/${data.id}`);
    return res.data;
  } catch (err) {
    return err;
  }
}

export async function createUser(data: {
  email: string;
  password: string;
  phoneNumber: string;
  role: "admin" | "user";
}) {
  try {
    const res = await axios.post(`${baseurl}/api/users`, data);
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

export async function updateUser(data: {
  email: string;
  password: string;
  phoneNumber: string;
  role: "admin" | "user";
  old_role: "admin" | "user";
  id: string;
}) {
  try {
    const res = await axios.patch(`${baseurl}/api/users/${data.id}`, data);
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
