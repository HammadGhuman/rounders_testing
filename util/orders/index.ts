import { baseurl } from "@/constant/constants";
import axios, { AxiosError } from "axios";
import { CustomError } from "../AuthFunctions";

export async function getOrders() {
    try {
      const res = await axios.get(`${baseurl}/api/orders`);
      return res.data;
    } catch (err) {
      return err;
    }
  }
  
export async function getOrder(data: { id: string }) {
    try {
      const res = await axios.get(`${baseurl}/api/orders/${data.id}`);
      return res.data;
    } catch (err) {
      return err;
    }
}

export async function createOrder(data: {
  payment:string,
  PaymentStatus:string,
  OrderStatus:string
}) {
  try {
    
    const res = await axios.post(`${baseurl}/api/orders`, {...data,payment:parseInt(data.payment)});
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


export async function updateOrder(data: {
    payment:string,
    PaymentStatus:string,
    OrderStatus:string
  id: string;
}) {
  try {
    const res = await axios.patch(`${baseurl}/api/orders/${data.id}`, {...data,payment:parseInt(data.payment)});
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

export async function deleteOrder(data: { id: number }) {
  try {
    console.log(data.id);
    const res = await axios.delete(`${baseurl}/api/orders/${data.id}`);
    return res.data;
  } catch (err) {
    return err;
  }
}