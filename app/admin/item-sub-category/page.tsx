"use client";
import AdminNav from "@/components/AdminNav";
import React from "react";
import {
  Table,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  TableFoot,
  TableFooterCell,
  Text,
  Badge,
  Card,
  Title,
  Button,
} from "@tremor/react";
import {
  TrashIcon,
  PencilIcon,
  ArrowPathRoundedSquareIcon,
} from "@heroicons/react/24/solid";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  deleteItemSubCategory,
  getItemSubCategories,
} from "@/util/item-sub-category";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

export interface ItemSubCategory {
  id: number;
  name: string;
}

function ItemSubCategoryPage(props: any) {
  const router = useRouter();
  const { data, refetch, isLoading } = useQuery(
    ["item_sub_categories"],
    getItemSubCategories
  );
  const { mutate, isLoading: isLoadingMutation } = useMutation(
    deleteItemSubCategory,
    {
      onSuccess(data, variables, context) {
        console.log(data);
        toast.success("Deleted Sub category successfully");
        refetch();
      },
      onError(error, variables, context) {
        toast.error("Something went wrong");
      },
    }
  );
  console.log(data);

  function handleDelete(sub_category: ItemSubCategory): void {
    const res = window.confirm(
      `This will delete sub category with id = ${sub_category.id}`
    );
    if (res) {
      mutate({ id: sub_category.id });
    }
  }

  return (
    <div className="min-h-screen">
      <AdminNav />
      <div className="px-16 py-10">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold font-MetropolisRegular">
            Item Sub Categories
          </h1>
          <Link
            href="/admin/item-sub-category/add"
            className="bg-mustard px-4 rounded-lg hover:bg-yellow-600 py-2"
          >
            <h1 className="text-black">Add Sub Category</h1>
          </Link>
        </div>
        <Card className="mt-10" decoration="left" decorationColor="yellow">
          <div className="flex items-center justify-between">
            <Title>All Sub Categories</Title>
            {(isLoading || isLoadingMutation) && (
              <ArrowPathRoundedSquareIcon
                className="animate-spin"
                width={32}
                height={32}
              />
            )}
          </div>
          <Table className="mt-5">
            <TableHead>
              <TableRow>
                <TableHeaderCell>id</TableHeaderCell>
                <TableHeaderCell>Sub Category Name</TableHeaderCell>
                <TableHeaderCell>Actions</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data.map((sub_category: ItemSubCategory) => (
                  <TableRow key={sub_category.id}>
                    <TableCell>{sub_category.id}</TableCell>
                    <TableCell>
                      <Text>{sub_category.name}</Text>
                    </TableCell>
                    <TableCell className="flex space-x-3">
                      <PencilIcon
                        onClick={() =>
                          router.push(
                            `/admin/item-sub-category/${sub_category.id}`
                          )
                        }
                        className="hover:text-green-500"
                        width={20}
                        height={20}
                      ></PencilIcon>
                      <TrashIcon
                        onClick={() => handleDelete(sub_category)}
                        className="hover:text-red-500"
                        width={20}
                        height={20}
                      ></TrashIcon>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
}

export default ItemSubCategoryPage;
