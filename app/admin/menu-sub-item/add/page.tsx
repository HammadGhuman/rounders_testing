"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { Card, Title } from "@tremor/react";
import toast from "react-hot-toast";
import { createMenuSubItem } from "@/util/menu-sub-item"; // Make sure to replace this with the correct import
import Image from "next/image";
import AdminNav from "@/components/AdminNav";

interface MenuSubItemFormType {
  name: string;
  Description: string;
  is_main_item: string;
  item_category_id: number;
  image: FileList;
}

const MenuSubItemSchema = yup.object().shape({
  name: yup.string().required("Menu Sub-item name is required"),
  Description: yup.string().required("Description is required"),
  item_category_id: yup.number().required("Item category ID is required"),
  image: yup.mixed().required("Image is required"),
});

function MenuSubItemPage() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<MenuSubItemFormType | any>({
    resolver: yupResolver(MenuSubItemSchema),
  });
  const router = useRouter();

  const { mutate, isLoading } = useMutation(createMenuSubItem, {
    onSuccess(data) {
      console.log(data);
      if (data.status === 201) {
        toast.success("Menu Sub-item Added Successfully");
        router.push("/admin/menu-sub-items");
      }
    },
    onError(error) {
      // Handle error here
      toast.error("Something Went Wrong");
    },
  });

  const onSubmitHandler = (data: MenuSubItemFormType) => {
    console.log(data);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("Description", data.Description);
    formData.append("is_main_item", data.is_main_item.toString());
    formData.append("item_category_id", data.item_category_id.toString());
    formData.append("image", data.image[0]);
    mutate(formData);
    reset();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
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
          <Title color="yellow">Add Menu Sub-item</Title>
          <form onSubmit={handleSubmit(onSubmitHandler)} className="mt-10">
            <div className="mt-6">
              <label htmlFor="name" className="leading-7 text-lg text-mustard">
                Sub-item Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name")}
                required
                className="w-full bg-mustard/60 bg-opacity-50 rounded border border-gray-300 focus:border-mustard focus:bg-mustard focus:ring-2 focus:ring-mustard text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {errors.name && (
                <p className="text-custom-red">
                  {errors.name.message as string}
                </p>
              )}
            </div>

            <div className="mt-6">
              <label
                htmlFor="Description"
                className="leading-7 text-lg text-mustard"
              >
                Description
              </label>
              <textarea
                id="Description"
                {...register("Description")}
                required
                rows={4}
                className="w-full bg-mustard/60 bg-opacity-50 rounded border border-gray-300 focus:border-mustard focus:bg-mustard focus:ring-2 focus:ring-mustard text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {errors.Description && (
                <p className="text-custom-red">
                  {errors.Description.message as string}
                </p>
              )}
            </div>

            <div className="mt-6">
              <label
                htmlFor="is_main_item"
                className="leading-7 text-lg text-mustard"
              >
                Is Main Item
              </label>
              <select
                id="is_main_item"
                {...register("is_main_item")}
                required
                className="w-full bg-mustard/60 bg-opacity-50 rounded border border-gray-300 focus:border-mustard focus:bg-mustard focus:ring-2 focus:ring-mustard text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
              {errors.is_main_item && (
                <p className="text-custom-red">
                  {errors.is_main_item.message as string}
                </p>
              )}
            </div>

            <div className="mt-6">
              <label
                htmlFor="item_category_id"
                className="leading-7 text-lg text-mustard"
              >
                Item Category ID
              </label>
              <input
                type="number"
                id="item_category_id"
                {...register("item_category_id")}
                required
                className="w-full bg-mustard/60 bg-opacity-50 rounded border border-gray-300 focus:border-mustard focus:bg-mustard focus:ring-2 focus:ring-mustard text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {errors.item_category_id && (
                <p className="text-custom-red">
                  {errors.item_category_id.message as string}
                </p>
              )}
            </div>

            <div className="mt-6">
              <input
                type="file"
                id="image"
                {...register("image")}
                accept="image/*"
                required
                className="mb-2 hidden" // Hide the default input
                onChange={handleImageChange}
              />
              <label
                htmlFor="image"
                className="w-full bg-mustard/60 bg-opacity-50 rounded border border-gray-300 focus:border-mustard focus:bg-mustard focus:ring-2 focus:ring-mustard text-base outline-none text-white py-2 px-3 leading-8 transition-colors duration-200 ease-in-out cursor-pointer"
              >
                Choose Image
              </label>
              {imagePreview && (
                <Image
                  width={200}
                  height={200}
                  src={imagePreview}
                  alt="Preview"
                />
              )}
              {errors.image && (
                <p className="text-custom-red">
                  {errors.image.message as string}
                </p>
              )}
            </div>
            <div className="p-2 w-full mt-10">
              <button
                type="submit"
                disabled={isLoading}
                className="flex mx-auto text-white bg-mustard border-0 py-2 px-8 focus:outline-none hover:bg-custom-red transition-colors duration-300 rounded text-lg"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full border-t-2 border-l-2 border-b-2 border-black h-10 w-10"></div>
                ) : (
                  <>Add Menu Sub-item</>
                )}
              </button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default MenuSubItemPage;
