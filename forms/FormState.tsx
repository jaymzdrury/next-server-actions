"use client";
import { postFormData } from "@/actions/actions";
import Input from "@/components/input";
import withTitle from "@/hoc/withTitle";
import { useFormState } from "react-dom";

function FormState() {
  const [state, formAction] = useFormState(postFormData, null);
  return (
    <>
      <form action={formAction}>
        <Input />
      </form>
      {JSON.stringify(state, null, 2)}
    </>
  );
}

export default withTitle(FormState, "useFormState");
