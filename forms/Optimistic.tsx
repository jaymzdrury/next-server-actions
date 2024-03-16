"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import { postData } from "@/actions/actions";
import { Data } from "@/types";
import Input from "@/components/input";
import withTitle from "@/hoc/withTitle";

function Optimistic({ data }: { data: Data }) {
  const ref = React.useRef<HTMLFormElement>(null);
  const [optimisticData, addOptimisitcData] = React.useOptimistic(
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

export default withTitle(Optimistic, "useOptimistic");
