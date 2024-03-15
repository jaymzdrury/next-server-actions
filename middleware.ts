import { chain } from "./middlewares/chain";
import { cookies } from "./middlewares/cookies";
import { redirect } from "./middlewares/redirect";

const middlewares = [cookies, redirect];
export default chain(middlewares);

export const config = {
  matcher: ["/profile", "/about"],
};
