"use server";
import { get, post } from "@/lib/db";
import { Schema, Data } from "@/types";
import { revalidateTag } from "next/cache";

export async function getData(): Promise<Data> {
  const { error, data } = await get();

  if (error) throw new Error(error);

  return data;
}

export async function postData(e: FormData | string) {
  const text = typeof e === "string" ? e : e.get("text");
  const { success } = Schema.safeParse({ text });

  if (!success) return { error: "invalid" };

  const { error } = await post(text!);

  if (error) throw new Error(error);

  revalidateTag("data");
}

export async function postFormData(state: any, e: FormData) {
  const text = e.get("text");
  const { success } = Schema.safeParse({ text });

  if (!success) return { error: "invalid" };

  const { error, data } = await post(text!);

  if (error) throw new Error(error);

  return { data };
}
