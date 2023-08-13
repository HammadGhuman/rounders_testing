"use client";
import Image from "next/image";
import React from "react";
import Logo from "@/public/Logo.png";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import RegisterPage from "@/components/RegisterPage";
import { useMutation } from "@tanstack/react-query";
import { CustomError, signup } from "@/util/AuthFunctions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
type Props = {};

interface RegisterFromType {
  email: string;
  password: string;
  phoneNumber: string | undefined;
}

const RegisterSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
  phoneNumber: yup.string().min(11).max(11),
});

function Page({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFromType>({
    resolver: yupResolver(RegisterSchema),
  });
  const router = useRouter();
  const { mutate, isLoading } = useMutation(signup, {
    onSuccess(data, variables, context) {
      console.log("🚀 ~ file: page.tsx:38 ~ onSuccess ~ context:", context);
      console.log("🚀 ~ file: page.tsx:38 ~ onSuccess ~ variables:", variables);
      console.log("🚀 ~ file: page.tsx:38 ~ onSuccess ~ data:", data);
      if (data.status == 200) {
        toast.success("User Registered Successfully");
        router.push("/");
      }
    },
    onError(error, variables, context) {
      console.log("🚀 ~ file: page.tsx:43 ~ onError ~ context:", context);
      console.log("🚀 ~ file: page.tsx:43 ~ onError ~ variables:", variables);
      console.log("🚀 ~ file: page.tsx:43 ~ onError ~ error:", error);
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
    mutate(data);
    reset();
  };

  return (
    <div className="min-h-screen flex font-MetropolisRegular items-center justify-center ">
      <div className="flex bg-charcoal items-center justify-center rounded-xl flex-col space-y-3 border-2 border-mustard shadow-lg shadow-mustard px-20 pt-10 pb-10">
        <div className="text-mustard text-6xl font-Hevojniwal">
          <h1>Welcome Back!</h1>
        </div>
        <div className="w-20">
          <Image className="mt-10" src={Logo} alt="logo" />
        </div>

        <form>
          <div className="mt-10">
            <label htmlFor="email" className="leading-7 text-lg text-mustard">
              Email
            </label>
            <input
              type="email"
              id="email"
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
              {...register("phoneNumber")}
              required
              {...register}
              className="w-full bg-mustard/60 bg-opacity-50 rounded border border-gray-300 focus:border-mustard focus:bg-mustard focus:ring-2 focus:ring-mustard text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {errors.phoneNumber && (
              <p className="text-custom-red">{errors.phoneNumber.message}</p>
            )}
          </div>
        </form>

        <div className="p-2 w-full">
          <button
            disabled={isLoading}
            onClick={handleSubmit(onSubmitHandler)}
            className="flex mx-auto text-white bg-mustard border-0 py-2 px-8 focus:outline-none hover:bg-custom-red transition-colors duration-300 rounded text-lg"
          >
            {isLoading ? (
              <div className="animate-spin rounded-full border-t-2 border-l-2 border-b-2  border-black  h-10 w-10"></div>
            ) : (
              <>Register</>
            )}
          </button>
        </div>

        <p className="text-sm mt-2 text-mustard text-center mb-8 w-full">
          Already have and account?{" "}
          <Link href="/signin" className="hover:cursor-pointer text-white">
            SignIn
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Page;
