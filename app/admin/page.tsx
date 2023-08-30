"use client";
import AdminNav from "@/components/AdminNav";
import { getStores } from "@/util/stores";
import { getUsers } from "@/util/users";
import { useQuery } from "@tanstack/react-query";
import { Card, Metric, Text } from "@tremor/react";
import React from "react";

type Props = {};

function Page({}: Props) {
  const { data } = useQuery(["users"], getUsers);
  const { data:storeData,  } = useQuery(["stores"], getStores);

  return (
    
    <div className="overflow-hidden">
      <AdminNav />
      <div className="flex justify-between items-center mx-16">
        <Card className="max-w-xs mt-10" decoration="top" decorationColor="red">
          <Text>Users</Text>
          <Metric>{data ? data?.length : 'loading...'}</Metric>
        </Card>
        <Card className="max-w-xs mt-10" decoration="top" decorationColor="red">
          <Text>Stores</Text>
          <Metric>{storeData ? storeData?.length : 'loading...'}</Metric>
        </Card>
        <Card className="max-w-xs mt-10" decoration="top" decorationColor="red">
          <Text>Orders</Text>
          <Metric>3743</Metric>
        </Card>
      </div>
    </div>
  );
}

export default Page;
