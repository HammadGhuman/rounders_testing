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
import { deleteItemCategory, getItemCategories } from "@/util/item-category";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

export interface ItemCategory {
  id: number;
  name: string; 
}

function ItemCategoryPage(props: any) {
  const router = useRouter();
  const { data, refetch, isLoading } = useQuery(["itemCategories"], getItemCategories); 
  const { mutate, isLoading: isLoadingMutation } = useMutation(deleteItemCategory, {
    onSuccess(data, variables, context) {
      console.log(data);
      toast.success("Deleted category successfully");
      refetch();
    },
    onError(error, variables, context) {
      toast.error("Something went wrong");
    },
  });
  console.log(data);

  function handleDelete(category: ItemCategory): void {
    const res = window.confirm(
      `This will delete category with id = ${category.id}`
    );
    if (res) {
      mutate({ id: category.id });
    }
  }

  return (
    <div className="min-h-screen">
      <AdminNav />
      <div className="px-16 py-10">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold font-MetropolisRegular">Item Categories</h1>
          <Link
            href="/admin/item-category/add"
            className="bg-mustard px-4 rounded-lg hover:bg-yellow-600 py-2"
          >
            <h1 className="text-black">Add Category</h1>
          </Link>
        </div>
        <Card className="mt-10" decoration="left" decorationColor="yellow">
          <div className="flex items-center justify-between">
            <Title>All Categories</Title>
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
                <TableHeaderCell>Category Name</TableHeaderCell>
                <TableHeaderCell>Actions</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data.map((category: ItemCategory) => (
                  <TableRow key={category.id}>
                    <TableCell>{category.id}</TableCell>
                    <TableCell>
                      <Text>{category.name}</Text>
                    </TableCell>
                    <TableCell className="flex space-x-3">
                      <PencilIcon
                        onClick={() => router.push(`/admin/item-category/${category.id}`)}
                        className="hover:text-green-500"
                        width={20}
                        height={20}
                      ></PencilIcon>
                      <TrashIcon
                        onClick={() => handleDelete(category)}
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

export default ItemCategoryPage;
