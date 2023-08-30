"use client";
import React from "react";
import {
  Table,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  Text,
  Card,
  Title,
} from "@tremor/react";
import {
  TrashIcon,
  PencilIcon,
  ArrowPathRoundedSquareIcon,
} from "@heroicons/react/24/solid";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

import burger from "@/public/Logo.png";

// You might need to replace these imports and API calls with your actual implementations
import { getMenuSubItems, deleteMenuSubItem } from "@/util/menu-sub-item";
import Image from "next/image";
import AdminNav from "@/components/AdminNav";

export interface MenuSubItem {
  id: number;
  name: string;
  image_url: string;
  Description: string;
  is_main_item: boolean;
  is_active: number;
  // ... other fields
}

function MenuSubItemsPage(props: any) {
  const router = useRouter();
  const { data, refetch, isLoading } = useQuery(
    ["menuSubItems"],
    getMenuSubItems
  );

  console.log(data);
  const { mutate, isLoading: isLoadingMutation } = useMutation(
    deleteMenuSubItem,
    {
      onSuccess(data, variables, context) {
        console.log(data);
        toast.success("deleted successfully");
        refetch();
      },
      onError(error, variables, context) {
        toast.error("something went wrong");
      },
    }
  );

  function handleDelete(item: MenuSubItem): void {
    const res = window.confirm(
      `This will Delete Menu Sub Item with name = ${item.name}`
    );
    if (res) {
      mutate({ id: item.id });
    }
  }

  return (
    <div className="min-h-screen">
      <AdminNav />
      <div className="px-16 py-10">
        <Card className="mt-10" decoration="left" decorationColor="yellow">
          <div className="flex items-center justify-between">
            <Title>All Menu Sub Items</Title>
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
                <TableHeaderCell>ID</TableHeaderCell>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell>Description</TableHeaderCell>
                <TableHeaderCell>Image</TableHeaderCell>
                <TableHeaderCell>Actions</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data.map((item: MenuSubItem) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.Description}</TableCell>
                    <TableCell>
                      <Image
                        src={burger}
                        alt={item.name}
                        width={50}
                        height={50}
                      />
                    </TableCell>
                    <TableCell className="flex space-x-3">
                      <PencilIcon
                        onClick={() =>
                          router.push(`/admin/menuSubItem/${item.id}`)
                        }
                        className="hover:text-green-500"
                        width={20}
                        height={20}
                      />
                      <TrashIcon
                        onClick={() => handleDelete(item)}
                        className="hover:text-red-500"
                        width={20}
                        height={20}
                      />
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

export default MenuSubItemsPage;
