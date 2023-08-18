"use client";
import Image from "next/image";
import React from "react";
import Logo from "@/public/Logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

function AdminNav() {
  const pathname = usePathname();
  return (
    <nav className="py-4 bg-charcoal px-16 flex justify-between">
      <Link href={"/admin"} className="hover:cursor-pointer">
        <Image width={120} src={Logo} alt="logo" />
      </Link>
      <div className="flex items-center space-x-20 text-white text-lg font-semibold  ">
        <Link
          className={`hover:text-mustard  transition-colors duration-300 ${
            pathname.split("/")[2] === "users" && "text-mustard"
          } `}
          href="/admin/users"
        >
          Users
        </Link>
        <Link
          className={`hover:text-mustard  transition-colors duration-300 ${
            pathname.split("/")[2] === "stores" && "text-mustard"
          } `}
          href="/admin/stores"
        >
          Stores
        </Link>
        <Link
          className={`hover:text-mustard  transition-colors duration-300 ${
            pathname.split("/")[2] === "order" && "text-mustard"
          } `}
          href="/admin/order"
        >
          Orders
        </Link>
      </div>
    </nav>
  );
}

export default AdminNav;
