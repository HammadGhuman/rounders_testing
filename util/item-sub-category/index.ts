import { baseurl } from "@/constant/constants";
import axios, { AxiosError } from "axios";
import { CustomError } from "../AuthFunctions";

export async function getItemSubCategories() {
  try {
    const res = await axios.get(`${baseurl}/api/itemsubcategory`);
    return res.data.body;
  } catch (err) {
    console.log(err)
    return err;
  }
}

export async function getItemSubCategory(data: { id: string }){
    try{
        const res = await axios.get(`${baseurl}/api/itemsubcategory/${data.id}`);
        return res.data.body;
    }catch(err){
        return err;
    }
}

export async function createItemSubCategory(data: { name: string }) {
  try {
    const res = await axios.post(`${baseurl}/api/itemsubcategory`, data);
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

export async function updateItemSubCategory(data: { name: string; id: number }) {
  try {
    const res = await axios.patch(`${baseurl}/api/itemsubcategory/${data.id}`, data);
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

export async function deleteItemSubCategory(data: { id: number }) {
  try {
    const res = await axios.delete(`${baseurl}/api/itemsubcategory/${data.id}`);
    return res.data;
  } catch (err) {
    return err;
  }
}
