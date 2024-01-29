import { Metadata } from "next";
import { post } from '../actions/actions'
import { fetchRequest } from '../utils/fetch-request'
import ClientComponent from "../components/client";
import Input from "../components/input";

export const metadata = (): Metadata => {
  return {
      title: 'Main Page',
  };
};

export default async function Home(): Promise<JSX.Element> {
  const data = await fetchRequest()

  return (
    <>
      <form action={post}>
        <Input />
      </form>
      {data.map(d => <p key={d.toString()}>{d}</p>)}
      <ClientComponent data={data} />
    </>
  );
}
