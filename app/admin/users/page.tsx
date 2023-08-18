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
import { deleteUser, getUsers } from "@/util/users";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

export interface Users {
  id: number;
  email: string;
  phone_number: string;
  roles: RoleElement[];
}

export interface RoleElement {
  role: RoleRole;
}

export interface RoleRole {
  role_name: string;
}

function Page(props: any) {
  const router = useRouter();
  const { data, refetch, isLoading } = useQuery(["users"], getUsers);
  const { mutate, isLoading: isLoadingMutation } = useMutation(deleteUser, {
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

  function handleDelete(user: Users): void {
    const res = window.confirm(
      `This will Delete User with email = ${user.email}`
    );
    if (res) {
      mutate({ id: user.id });
    }
  }

  return (
    <div className="min-h-screen">
      <AdminNav />
      <div className="px-16 py-10">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold font-MetropolisRegular">Users</h1>
          <Link
            href="/admin/users/add"
            className="bg-mustard px-4 rounded-lg hover:bg-yellow-600 py-2"
          >
            <h1 className="text-black">Add User</h1>
          </Link>
        </div>
        <Card className="mt-10" decoration="left" decorationColor="yellow">
          <div className="flex items-center justify-between">
            <Title>Registered Users</Title>
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
                <TableHeaderCell>Email</TableHeaderCell>
                <TableHeaderCell>Phone Number</TableHeaderCell>
                <TableHeaderCell>Role</TableHeaderCell>
                <TableHeaderCell>Actions</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data.map((item: Users) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>
                      <Text>{item.phone_number}</Text>
                    </TableCell>
                    <TableCell>
                      <Text>{item.roles[0].role.role_name}</Text>
                    </TableCell>
                    <TableCell className="flex space-x-3">
                      <PencilIcon
                        onClick={() => router.push(`/admin/users/${item.id}`)}
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
