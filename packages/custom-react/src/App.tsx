import React from "react";
import { Hello, SomeData } from "lily-components";

export default function App() {
  console.log(Hello());
  const data = SomeData().val;

  return <>{data}</>;
}