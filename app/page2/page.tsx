import { Metadata } from "next";
import ClientInput from "../../components/client-input";
import { getData } from "@/actions/actions";

export const metadata = (): Metadata => {
  return {
    title: "Page 2",
  };
};

export default async function Page2(): Promise<JSX.Element> {
  const data = await getData();
  return (
    <>
      <ul>
        {data.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
      <ClientInput />
    </>
  );
}
