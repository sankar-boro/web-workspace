import React from "react";
import { Hello, SomeData } from "lily-components";

export default function App() {
  const data = SomeData().val;

  return <>{data}</>;
}