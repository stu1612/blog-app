import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>
        Go back to <Link href="/"> Home</Link>
      </p>
    </div>
  );
}
