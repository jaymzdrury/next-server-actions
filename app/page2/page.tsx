import { Metadata } from "next";
import ClientInput from "../../components/client-input"
import { fetchRequest } from "../../utils/fetch-request"

export const metadata = (): Metadata => {
    return {
        title: 'Page 2',
    };
};

export default async function Page2(): Promise<JSX.Element> {
    const data = await fetchRequest()
    return (
        <>
            <ul>
                {data.map(d => 
                    <li key={d.toString()}>{d}</li>
                )}
            </ul>
            <ClientInput />
        </>
    )
}