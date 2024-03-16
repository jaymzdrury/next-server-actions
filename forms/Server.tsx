import { postData } from "@/actions/actions";
import Input from "@/components/input";
import withTitle from "@/hoc/withTitle";

function Server(): JSX.Element {
  return (
    <>
      <form action={postData}>
        <Input />
      </form>
    </>
  );
}

export default withTitle(Server, "Server");
