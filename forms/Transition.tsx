"use client";
import React from "react";
import Input from "@/components/input";
import { postData } from "@/actions/actions";
import withTitle from "@/hoc/withTitle";

function Transition(): JSX.Element {
  const ref = React.useRef<HTMLInputElement>(null);
  const [pending, startTransition] = React.useTransition();
  return (
    <>
      <Input ref={ref} />
      <button
        disabled={pending}
        onClick={async () => {
          startTransition(async () => {
            await postData(ref.current!.value);
          });
          ref.current!.value = "";
        }}
      >
        Submit
      </button>
    </>
  );
}

export default withTitle(Transition, "useTransition");
