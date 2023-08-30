import { baseurl } from "@/constant/constants";
import axios, { AxiosError } from "axios";
import { CustomError } from "../AuthFunctions";

export async function getItemCategories() {
  try {
    const res = await axios.get(`${baseurl}/api/itemcategory`);
    return res.data.body;
  } catch (err) {
    console.log(err)
    return err;
  }
}

export async function getItemCategory(data: { id: string }){
    try{
        const res = await axios.get(`${baseurl}/api/itemcategory/${data.id}`);
        return res.data.body;
    }catch(err){
        return err;
    }
}

export async function createItemCategory(data: { name: string }) {
  try {
    const res = await axios.post(`${baseurl}/api/itemcategory`, data);
    return res.data;
  } catch (err: AxiosError | any) {
    if (err.response.status === 400) {
      const customError = new CustomError("An Error Occurred", {
        status: 400,
        errorMessage: "Category Already Exists",
      });
      throw customError;
    } else {
      throw new Error("An error occurred while creating item category");
    }
  }
}

export async function updateItemCategory(data: { name: string; id: number }) {
  try {
    const res = await axios.patch(`${baseurl}/api/itemcategory/${data.id}`, data);
    return res;
  } catch (err: AxiosError | any) {
    if (err.response.status === 400) {
      const customError = new CustomError("An Error Occurred", {
        status: 400,
        errorMessage: "Category Already Exists",
      });
      throw customError;
    } else {
      throw new Error("An error occurred while updating item category");
    }
  }
}

export async function deleteItemCategory(data: { id: number }) {
  try {
    const res = await axios.delete(`${baseurl}/api/itemcategory/${data.id}`);
    return res.data;
  } catch (err) {
    return err;
  }
}
