"use client";
import { useRef, useTransition } from "react";
import { postData } from "../actions/actions";
import Input from "./input";

export default function ClientInput(): JSX.Element {
  const ref = useRef<HTMLInputElement>(null);
  const [pending, startTransition] = useTransition();

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
