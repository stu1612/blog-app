"use client";
import useFormattedDate from "@/hooks/useFormattedDate";

export default function PostCreatedAt({ createdAt }: { createdAt: string }) {
  const { formattedDate } = useFormattedDate(createdAt);

  return <>{formattedDate}</>;
}
