import Link from 'next/link';
 
export default function NotFound(): JSX.Element {
  return (
    <section role='alert' aria-relevant='all'>
      <h1>Not Found</h1>
      <p>Could not find main page</p>
      <Link href="/">Try again</Link>
    </section>
  );
};