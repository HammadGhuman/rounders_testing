"use client";
import AdminNav from "@/components/AdminNav";
import { CustomError } from "@/util/AuthFunctions";
import { getItemCategory, updateItemCategory } from "@/util/item-category"; // Make sure to replace this with the correct import
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Card, Title } from "@tremor/react";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as yup from "yup";

interface CategoryFormType {
  name: string;
}

const CategorySchema = yup.object().shape({
  name: yup.string().required("Category name is required"),
});

function UpdateCategoryPage({
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
  } = useForm<CategoryFormType>({
    resolver: yupResolver(CategorySchema),
  });
  const router = useRouter();

  const { data, isLoading: isLoadingQ } = useQuery(["get-category"], () =>
    getItemCategory({ id: params.id })
  );

  const { mutate, isLoading } = useMutation(updateItemCategory, {
    onSuccess(data, variables, context) {
      if (data.status === 200) {
        toast.success("Category Updated Successfully");
        router.push("/admin/item-category");
      }
    },
    onError(error, variables, context) {
      if (
        error instanceof CustomError &&
        error.details &&
        error.details.status === 400
      ) {
        toast.error(error.details.errorMessage);
      } else {
        toast.error("Something Went Wrong");
      }
    },
  });

  const onSubmitHandler = (data: CategoryFormType) => {
    console.log(data);
    mutate({ ...data, id: parseInt(params.id) });
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
          <Title color="yellow">Update Item Category</Title>
          <div className="mt-10">
            <label htmlFor="name" className="leading-7 text-lg text-mustard">
              Category Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              required
              className="w-full bg-mustard/60 bg-opacity-50 rounded border border-gray-300 focus:border-mustard focus:bg-mustard focus:ring-2 focus:ring-mustard text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              defaultValue={data?.name}
            />
            {errors.name && (
              <p className="text-custom-red">{errors.name.message}</p>
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
                <>Update Category</>
              )}
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default UpdateCategoryPage;
