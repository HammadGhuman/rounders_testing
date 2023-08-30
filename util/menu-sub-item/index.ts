import { baseurl } from "@/constant/constants";
import axios, { AxiosError, AxiosResponse } from "axios";
import { CustomError } from "../AuthFunctions";

function handleApiError(err: AxiosError) {
  if (err.response) {
    console.log("Status code:", err.response.status);
    const responseData: AxiosResponse["data"] = err.response.data;

    console.log("Error data:", responseData);

    throw new CustomError("An API error occurred", {
      status: err.response.status,
      errorMessage: responseData.message || "Unknown error",
    });
  } else if (err.request) {
    console.log("Request made but no response received:", err.request);
  } else {
    console.log("Error setting up request:", err.message);
  }
  throw new CustomError("An error occurred during API request", {
    status: 500,
    errorMessage: "Internal server error",
  });
}

export async function getMenuSubItems() {
  try {
    const res = await axios.get(`${baseurl}/api/menu-sub-items`);
    console.log(res.data.body);
    return res.data.body;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function createMenuSubItem(data: FormData) {
  try {
    const res = await axios.post(`${baseurl}/api/menu-sub-items`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (err: AxiosError | any) {
    handleApiError(err);
  }
}

export async function updateMenuSubItem(id: number, data: FormData) {
  try {
    const res = await axios.patch(`${baseurl}/api/menu-sub-items/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (err: AxiosError | any) {
    handleApiError(err);
  }
}

export async function deleteMenuSubItem(data: { id: number }) {
  try {
    const res = await axios.delete(`${baseurl}/api/menu-sub-items/${data.id}`);
    return res.data;
  } catch (err) {
    return err;
  }
}
