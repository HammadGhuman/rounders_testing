"use client";
import React from "react";
import { Toaster } from "react-hot-toast";

type Props = {};

function ToastProvider({}: Props) {
  return <Toaster position="top-center" />;
}

export default ToastProvider;
