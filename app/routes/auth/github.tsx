import { ActionFunction, LoaderFunction, redirect } from "remix";
import { auth } from "~/auth.server";

export let loader: LoaderFunction = () => {
  return redirect("/login");
};

export let action: ActionFunction = async ({ request }) => {
  console.dir({ request });
  return await auth.authenticate("github", request);
};
