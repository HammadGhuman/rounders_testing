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
import { getStores,deleteStore } from "@/util/stores";

import { toast } from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

export interface Store {
  id:              number;
  name:            string;
  address:         string;
  contact_number:  string;
  is_store_active: number;
  longitude:       number;
  latitude:        number;
  created_on:      Date;
}


function Page(props: any) {
  const router = useRouter();
  const { data, refetch, isLoading } = useQuery(["stores"], getStores);
  const { mutate, isLoading: isLoadingMutation } = useMutation(deleteStore, {
    onSuccess(data, variables, context) {
      console.log(data);
      toast.success("deleted successfully");
      refetch();
    },
    onError(error, variables, context) {
      toast.error("something went wrong");
    },
  });
  console.log(data);

  function handleDelete(store:Store): void {
    const res = window.confirm(
      `This will Delete Store with name = ${store.name}`
    );
    if (res) {
      mutate({ id: store.id });
    }
  }

  return (
    <div className="min-h-screen">
      <AdminNav />
      <div className="px-16 py-10">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold font-MetropolisRegular">Stores</h1>
          <Link
            href="/admin/stores/add"
            className="bg-mustard px-4 rounded-lg hover:bg-yellow-600 py-2"
          >
            <h1 className="text-black">Add Store</h1>
          </Link>
        </div>
        <Card className="mt-10" decoration="left" decorationColor="yellow">
          <div className="flex items-center justify-between">
            <Title>Registered Stores</Title>
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
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell>Address</TableHeaderCell>
                <TableHeaderCell>Contact Number</TableHeaderCell>
                <TableHeaderCell>Longitude,Latitude</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
                <TableHeaderCell>Actions</TableHeaderCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data.map((item: Store) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>
                      <Text>{item.address}</Text>
                    </TableCell>
                    <TableCell>
                      <Text>{item.contact_number}</Text>
                    </TableCell>
                    <TableCell>
                      <Text>{item.longitude},{item.latitude}</Text>
                    </TableCell>
                    <TableCell>
                      <Text>{item.is_store_active === 1 ? "Active" : 
                      "UnActive" }</Text>
                    </TableCell>
                    <TableCell className="flex space-x-3">
                      <PencilIcon
                        onClick={() => router.push(`/admin/stores/${item.id}`)}
                        className="hover:text-green-500"
                        width={20}
                        height={20}
                      ></PencilIcon>
                      <TrashIcon
                        onClick={() => handleDelete(item)}
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

export default Page;
