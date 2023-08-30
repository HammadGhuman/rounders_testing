"use client";
import AdminNav from "@/components/AdminNav";
import { CustomError, signup } from "@/util/AuthFunctions";
import {  getOrder, updateOrder } from "@/util/orders";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Card, Title } from "@tremor/react";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as yup from "yup";

interface RegisterFromType {
  payment: number;
  PaymentStatus: 'pending' | 'completed';
  OrderStatus: 'pending' | 'completed';
}

const RegisterSchema = yup.object().shape({
  payment: yup.number().required(),
  PaymentStatus: yup.string().oneOf(["pending", "completed"]).required(),
  OrderStatus: yup.string().oneOf(["pending", "completed"]).required(),

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

  const { data, isLoading: isLoadingQ } = useQuery(["get-order"], () =>
  getOrder({ id: params.id })
);

  const { mutate, isLoading } = useMutation(updateOrder, {
    onSuccess(data, variables, context) {
      if (data.status == 200) {
        toast.success("Order Updated Successfully");
        router.push("/admin/order");
      }
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

  const onSubmitHandler = (data: any) => {
    console.log(data);
    mutate({...data,id:params.id});
    reset();
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
          <Title color="yellow">Update Order</Title>
          <div className="mt-10">
            <label htmlFor="payment" className="leading-7 text-lg text-mustard">
              Payment
            </label>
            <input
              type="number"
              id="payment"
              {...register("payment")}
              required
              className="w-full bg-mustard/60 bg-opacity-50 rounded border border-gray-300 focus:border-mustard focus:bg-mustard focus:ring-2 focus:ring-mustard text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              defaultValue={data?.payment}
            />
            {errors.payment && (
              <p className="text-custom-red">{errors.payment.message}</p>
            )}
          </div>
          

          <div className="mt-4">
            <label htmlFor="OrderStatus" className="leading-7 text-lg text-mustard">
              Order Status
            </label>
            <select
              id="OrderStatus"
              {...register("OrderStatus", { required: "OrderStatus is required" })}
              className="w-full bg-mustard/60 bg-opacity-50 rounded border border-gray-300 focus:border-mustard focus:bg-mustard focus:ring-2 focus:ring-mustard text-base outline-none text-white py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
            >
              <option value="" disabled>
                Select Order Status
              </option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
            {errors.OrderStatus && (
              <p className="text-custom-red">{errors.OrderStatus.message}</p>
            )}
          </div>

          <div className="mt-4">
            <label htmlFor="PaymentStatus" className="leading-7 text-lg text-mustard">
              Payment Status
            </label>
            <select
              id="PaymentStatus"
              {...register("PaymentStatus", { required: "PaymentStatus is required" })}
              className="w-full bg-mustard/60 bg-opacity-50 rounded border border-gray-300 focus:border-mustard focus:bg-mustard focus:ring-2 focus:ring-mustard text-base outline-none text-white py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
            >
              <option value="" disabled>
                Select Payment Status
              </option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
            {errors.PaymentStatus && (
              <p className="text-custom-red">{errors.PaymentStatus.message}</p>
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
                <>Update Order</>
              )}
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Page;
