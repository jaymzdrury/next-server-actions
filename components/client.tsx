"use client";
import { useOptimistic, useRef } from "react";
import { postData } from "../actions/actions";
import { useFormStatus } from "react-dom";
import Input from "./input";
import { Data } from "@/types";

export default function ClientData({ data }: { data: Data }): JSX.Element {
  const ref = useRef<HTMLFormElement>(null);
  const [optimisticData, addOptimisitcData] = useOptimistic(
    data,
    (state, newData: any) => {
      return [...state, newData];
    }
  );
  const { pending } = useFormStatus();

  return (
    <>
      <form
        ref={ref}
        action={async (formData) => {
          ref.current?.reset();
          addOptimisitcData(formData.get("text"));
          await postData(formData);
        }}
      >
        <Input disabled={pending} />
      </form>
      {optimisticData.map((d) => (
        <p key={d}>{d}</p>
      ))}
    </>
  );
}
