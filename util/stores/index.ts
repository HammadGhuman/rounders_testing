import { baseurl } from "@/constant/constants";
import axios, { AxiosError } from "axios";
import { CustomError } from "../AuthFunctions";

export async function getStores() {
    try {
      const res = await axios.get(`${baseurl}/api/stores`);
      return res.data;
    } catch (err) {
      return err;
    }
  }
  
export async function getStore(data: { id: string }) {
    try {
      const res = await axios.get(`${baseurl}/api/stores/${data.id}`);
      return res.data;
    } catch (err) {
      return err;
    }
}

export async function createStore(data: {
  name: string;
  address: string;
  contact_number: string;
  longitude:number,
  latitude:number,
  is_store_active: "0" | "1";
}) {
  try {
    
    const res = await axios.post(`${baseurl}/api/stores`, {...data,is_store_active:parseInt(data.is_store_active)});
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


export async function updateStore(data: {
  name: string;
  address: string;
  contact_number: string;
  longitude:number,
  latitude:number,
  is_store_active: "0" | "1";
  id: string;
}) {
  try {
    const res = await axios.patch(`${baseurl}/api/stores/${data.id}`, {...data,is_store_active:parseInt(data.is_store_active)});
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

export async function deleteStore(data: { id: number }) {
  try {
    console.log(data.id);
    const res = await axios.delete(`${baseurl}/api/stores/${data.id}`);
    return res.data;
  } catch (err) {
    return err;
  }
}