import React, { useState } from "react";
import CarsDisplay from "./Cars";
import Input from "./Input";

export default function Layout() {
  return (
    <div>
      <Input />
      <CarsDisplay />
    </div>
  );
}
