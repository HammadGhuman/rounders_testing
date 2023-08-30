"use client";
import React from "react";
import { Button, Card, Metric, Text, TextInput } from "@tremor/react";
import { EnvelopeIcon, KeyIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
function Page() {
  const router = useRouter();
  return (
    <div className="flex bg-charcoal min-h-screen justify-center items-center">
      <Card className="max-w-md" decoration="top" decorationColor="red">
        <Text color="slate" className="text-3xl text-center font-bold">
          Admin Login
        </Text>
        <TextInput
          className="mt-10"
          title="email"
          icon={EnvelopeIcon}
          placeholder="Email"
        />
        <TextInput
          className="mt-10"
          title="Password"
          type="password"
          icon={KeyIcon}
          placeholder="Password"
        />
        <Button
          onClick={() => router.replace("/admin")}
          className="w-full mt-10 rounded-xl"
          color="red"
          size="lg"
        >
          Login
        </Button>
      </Card>
    </div>
  );
}

export default Page;
