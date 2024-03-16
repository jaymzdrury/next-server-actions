import { Metadata } from "next";
import { getData } from "@/actions/actions";
import Server from "@/forms/Server";
import Transition from "@/forms/Transition";
import Optimistic from "@/forms/Optimistic";
import FormState from "@/forms/FormState";

export const metadata = (): Metadata => {
  return {
    title: "Main Page",
  };
};

export default async function Home(): Promise<JSX.Element> {
  const data = await getData();

  return (
    <>
      <Server />
      <Transition />
      {data?.map((d) => (
        <p key={d}>{d}</p>
      ))}
      <Optimistic data={data} />
      <FormState />
    </>
  );
}
