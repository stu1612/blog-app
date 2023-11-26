"use client";

import { useState, useEffect } from "react";

export default function useFormattedDate(str: string) {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const date = new Date(str);

    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    const day = date.getDate();
    const month = date.toLocaleDateString(undefined, { month: "long" });
    const year = date.getFullYear();

    const getDayWithSuffix = (day: number) => {
      if (day >= 11 && day <= 13) {
        return `${day}th`;
      }
      switch (day % 10) {
        case 1:
          return `${day}st`;
        case 2:
          return `${day}nd`;
        case 3:
          return `${day}rd`;
        default:
          return `${day}th`;
      }
    };

    const result = `${getDayWithSuffix(day)} ${month} ${year}`;

    setFormattedDate(result);
  }, [str]);

  return { formattedDate };
}
