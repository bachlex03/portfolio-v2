"use client";

import Link from "next/link";
import { useState } from "react";

export default function SampleLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [input, setInput] = useState("");

  return (
    <div>
      <h1>Group layout</h1>
      <p>Input</p>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <Link href={"/page-group-2"}>Page group 2 link</Link>
      <div>{children}</div>
    </div>
  );
}
