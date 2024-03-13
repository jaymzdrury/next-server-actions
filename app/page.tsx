import { Metadata } from "next";
import ClientComponent from "../components/client";
import Input from "../components/input";
import { getData, postData } from "@/actions/actions";
import { Data } from "@/types";

export const metadata = (): Metadata => {
  return {
    title: "Main Page",
  };
};

export default async function Home(): Promise<JSX.Element> {
  const data: Data[] = await getData();

  return (
    <>
      <form action={postData}>
        <Input />
      </form>
      {data.map((d) => (
        <p key={d.toString()}>{d}</p>
      ))}
      <ClientComponent data={data} />
    </>
  );
}
