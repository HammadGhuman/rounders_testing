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
import { deleteOrder, getOrders } from "@/util/orders";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

export interface Orders {
  id: number;
  payment: string;
  OrderStatus: string;
  PaymentStatus: string;
}


function Page(props: any) {
  const router = useRouter();
  const { data, refetch, isLoading } = useQuery(["orders"], getOrders);
  const { mutate, isLoading: isLoadingMutation } = useMutation(deleteOrder, {
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

  function handleDelete(order: Orders): void {
    const res = window.confirm(
      `This will Delete Order with payment = ${order.payment}`
    );
    if (res) {
      mutate({ id: order.id });
    }
  }

  return (
    <div className="min-h-screen">
      <AdminNav />
      <div className="px-16 py-10">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold font-MetropolisRegular">Orders</h1>
          <Link
            href="/admin/order/add"
            className="bg-mustard px-4 rounded-lg hover:bg-yellow-600 py-2"
          >
            <h1 className="text-black">Add Order</h1>
          </Link>
        </div>
        <Card className="mt-10" decoration="left" decorationColor="yellow">
          <div className="flex items-center justify-between">
            <Title>All Orders</Title>
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
                <TableHeaderCell>Payment</TableHeaderCell>
                <TableHeaderCell>PaymentStatus</TableHeaderCell>
                <TableHeaderCell>OrderStatus</TableHeaderCell>
                <TableHeaderCell>Actions</TableHeaderCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data.map((item: Orders) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>
                      <Text>{item.payment}</Text>
                    </TableCell>
                    <TableCell>
                      <Text>{item.PaymentStatus}</Text>
                    </TableCell>
                    <TableCell>
                      <Text>{item.OrderStatus}</Text>
                    </TableCell>
                    <TableCell className="flex space-x-3">
                      <PencilIcon
                        onClick={() => router.push(`/admin/order/${item.id}`)}
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
