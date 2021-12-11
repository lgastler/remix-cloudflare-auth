import { ActionFunction, LoaderFunction } from "remix";
import { auth } from "~/auth.server";

export let loader: LoaderFunction = ({ request }) => {
  return auth.authenticate("github", request, {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  });
};
