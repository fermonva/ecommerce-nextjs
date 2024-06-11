"use client";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import React from "react";

export default function ProviderRedux({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <Provider store={store}>{children}</Provider>;
}
