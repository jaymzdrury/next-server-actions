"use server";
import { revalidateTag } from "next/cache";

export async function post(e: FormData | string) {
  const text = typeof e === "string" ? e : e.get("text");
  if (!text) return;

  try {
    const res = await fetch(`${process.env.URL}/api`, {
      method: "POST",
      body: JSON.stringify(text),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(`Error: ${res.status} ${data.message}`);
  } catch (error) {
    throw new Error(`Error: ${(error as Error)?.message ?? "Unknown error"}`);
  }

  revalidateTag("data");
}
