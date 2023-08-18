"use client";
import AdminNav from "@/components/AdminNav";
import { CustomError, signup } from "@/util/AuthFunctions";
import { createUser, getUser, updateUser } from "@/util/users";
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
  email: string;
  password: string;
  phoneNumber: string | undefined;
  role: "admin" | "user";
}

const RegisterSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
  phoneNumber: yup.string().min(11).max(11),
  role: yup.string().oneOf(["admin", "user"]).required(),
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

  const { data, isLoading: isLoadingQ } = useQuery(["get-user"], () =>
    getUser({ id: params.id })
  );

  console.log(data);

  const { mutate, isLoading } = useMutation(updateUser, {
    onSuccess(data, variables, context) {
      if (data.status == 200) {
        toast.success("User Registered Successfully");
        router.push("/admin/users");
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

  const onSubmitHandler = (mutationData: any) => {
    console.log("mutation Data = ", {
      ...mutationData,
      old_role: data?.roles[0]?.role?.role_name,
    });
    mutate({
      ...mutationData,
      old_role: data?.roles[0]?.role?.role_name,
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
          <div className="flex items-center justify-between">
            <Title color="yellow">Update User</Title>
            {(isLoading || isLoadingQ) && (
              <ArrowPathRoundedSquareIcon
                className="animate-spin"
                width={32}
                height={32}
              />
            )}
          </div>
          <div className="mt-10">
            <label htmlFor="email" className="leading-7 text-lg text-mustard">
              Email
            </label>
            <input
              type="email"
              id="email"
              defaultValue={data?.email}
              {...register("email")}
              required
              className="w-full bg-mustard/60 bg-opacity-50 rounded border border-gray-300 focus:border-mustard focus:bg-mustard focus:ring-2 focus:ring-mustard text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {errors.email && (
              <p className="text-custom-red">{errors.email.message}</p>
            )}
          </div>
          <div className="mt-4">
            <label
              htmlFor="password"
              className="leading-7 text-lg text-mustard"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password")}
              required
              {...register}
              className="w-full bg-mustard/60 bg-opacity-50 rounded border border-gray-300 focus:border-mustard focus:bg-mustard focus:ring-2 focus:ring-mustard text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {errors.password && (
              <p className="text-custom-red">{errors.password.message}</p>
            )}
          </div>
          <div className="mt-4">
            <label
              htmlFor="phoneNumber"
              className="leading-7 text-lg text-mustard"
            >
              Phone Number
            </label>
            <input
              type="number"
              id="phoneNumber"
              defaultValue={data?.phone_number}
              {...register("phoneNumber")}
              required
              {...register}
              className="w-full bg-mustard/60 bg-opacity-50 rounded border border-gray-300 focus:border-mustard focus:bg-mustard focus:ring-2 focus:ring-mustard text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {errors.phoneNumber && (
              <p className="text-custom-red">{errors.phoneNumber.message}</p>
            )}
          </div>

          <div className="mt-4">
            <label htmlFor="role" className="leading-7 text-lg text-mustard">
              Role
            </label>
            <select
              id="role"
              {...register("role", { required: "Role is required" })}
              className="w-full bg-mustard/60 bg-opacity-50 rounded border border-gray-300 focus:border-mustard focus:bg-mustard focus:ring-2 focus:ring-mustard text-base outline-none text-white py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
            >
              <option value="" disabled>
                Select a role
              </option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
            {errors.role && (
              <p className="text-custom-red">{errors.role.message}</p>
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
                <>Update User</>
              )}
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Page;
