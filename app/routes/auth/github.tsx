import { ActionFunction, LoaderFunction, redirect } from "remix";
import { auth } from "~/auth.server";

export let loader: LoaderFunction = () => {
  return redirect("/login");
};

export let action: ActionFunction = ({ request }) => {
  return auth.authenticate("github", request);
};
