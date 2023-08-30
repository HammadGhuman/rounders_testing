"use client";
import AdminNav from "@/components/AdminNav";
import { CustomError, signup } from "@/util/AuthFunctions";
import { createStore, getStore, updateStore } from "@/util/stores";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Card, Title } from "@tremor/react";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as yup from "yup";
import { ArrowPathRoundedSquareIcon } from "@heroicons/react/24/outline";
interface RegisterFromType {
  name: string;
  address: string;
  contact_number: string | undefined;
  longitude:number,
  latitude:number,
  is_store_active: "0" | "1";
}

const RegisterSchema = yup.object().shape({
  name: yup.string().min(3).required(),
  address: yup.string().min(3).required(),
  contact_number: yup.string().min(11).max(11),
  longitude:yup.number().required(),
  latitude:yup.number().required(),
  is_store_active: yup.string().oneOf(["0", "1"]).required(),
});
function Page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: any;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFromType>({
    resolver: yupResolver(RegisterSchema),
  });
  const router = useRouter();

  const { data, isLoading: isLoadingQ } = useQuery(["get-store"], () =>
    getStore({ id: params.id })
  );


  const { mutate, isLoading } = useMutation(updateStore, {
    onSuccess(data, variables, context) {
      if (data.status == 201) {
        toast.success("Store Updated Successfully");
        router.push("/admin/stores");
      }
      console.log(data);
    },
    onError(error, variables, context) {
      if (
        error instanceof CustomError &&
        error.details &&
        error.details.status == 400
      ) {
        toast.error(error.details.errorMessage);
      } else {
        toast.error("Something Went Wrong");
      }
    },
  });

  const onSubmitHandler = (mutationData: any) => {
    mutate({
      ...mutationData,
      id: params.id,
    });
    // reset();
  };

  return (
    <div>
      <AdminNav />
      <div className="flex items-center justify-center">
      <Card
          decoration="left"
          decorationColor="red"
          className="max-w-md mt-10"
        >
          <Title color="yellow">Add Stores</Title>
          <div className="mt-10">
            <label htmlFor="email" className="leading-7 text-lg text-mustard">
              Store Name
            </label>
            <input
              type="text"
              id="name"
              defaultValue={data?.name}
              {...register("name")}
              required
              className="w-full bg-mustard/60 bg-opacity-50 rounded border border-gray-300 focus:border-mustard focus:bg-mustard focus:ring-2 focus:ring-mustard text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {errors.name && (
              <p className="text-custom-red">{errors.name.message}</p>
            )}
          </div>
          <div className="mt-4">
            <label
              htmlFor="address"
              className="leading-7 text-lg text-mustard"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              defaultValue={data?.address}
              {...register("address")}
              required
              {...register}
              className="w-full bg-mustard/60 bg-opacity-50 rounded border border-gray-300 focus:border-mustard focus:bg-mustard focus:ring-2 focus:ring-mustard text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {errors.address && (
              <p className="text-custom-red">{errors.address.message}</p>
            )}
          </div>
          <div className="mt-4">
            <label
              htmlFor="ContactNumber"
              className="leading-7 text-lg text-mustard"
            >
              Contact Number
            </label>
            <input
              type="number"
              id="contact_number"
              defaultValue={data?.contact_number}
              {...register("contact_number")}
              required
              {...register}
              className="w-full bg-mustard/60 bg-opacity-50 rounded border border-gray-300 focus:border-mustard focus:bg-mustard focus:ring-2 focus:ring-mustard text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {errors.contact_number && (
              <p className="text-custom-red">{errors.contact_number.message}</p>
            )}
          </div>


          <div className="mt-4">
            <label
              htmlFor="longitude"
              className="leading-7 text-lg text-mustard"
            >
              Longitude
            </label>
            <input
              type="number"
              id="longitude"
              defaultValue={data?.longitude}
              {...register("longitude")}
              required
              {...register}
              className="w-full bg-mustard/60 bg-opacity-50 rounded border border-gray-300 focus:border-mustard focus:bg-mustard focus:ring-2 focus:ring-mustard text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {errors.longitude && (
              <p className="text-custom-red">{errors.longitude.message}</p>
            )}
          </div>

          <div className="mt-4">
            <label
              htmlFor="latitude"
              className="leading-7 text-lg text-mustard"
            >
              Latitude
            </label>
            <input
              type="number"
              id="latitude"
              defaultValue={data?.latitude}
              {...register("latitude")}
              required
              {...register}
              className="w-full bg-mustard/60 bg-opacity-50 rounded border border-gray-300 focus:border-mustard focus:bg-mustard focus:ring-2 focus:ring-mustard text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {errors.latitude && (
              <p className="text-custom-red">{errors.latitude.message}</p>
            )}
          </div>

          <div className="mt-4">
            <label htmlFor="is_store_active" className="leading-7 text-lg text-mustard">
              Status
            </label>
            <select
              id="is_store_active"
              {...register("is_store_active", { required: "status is required" })}
              className="w-full bg-mustard/60 bg-opacity-50 rounded border border-gray-300 focus:border-mustard focus:bg-mustard focus:ring-2 focus:ring-mustard text-base outline-none text-white py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
            >
              <option value="" disabled>
                Select a status
              </option>
              <option value={1}>Active</option>
              <option value={0}>Un Active</option>
            </select>
            {errors.is_store_active && (
              <p className="text-custom-red">{errors.is_store_active.message}</p>
            )}
          </div>

          <div className="p-2 w-full mt-10">
            <button
              disabled={isLoading}
              onClick={handleSubmit(onSubmitHandler)}
              className="flex mx-auto text-white bg-mustard border-0 py-2 px-8 focus:outline-none hover:bg-custom-red transition-colors duration-300 rounded text-lg"
            >
              {isLoading ? (
                <div className="animate-spin rounded-full border-t-2 border-l-2 border-b-2  border-black h-10 w-10"></div>
              ) : (
                <>Add New Store</>
              )}
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Page;
