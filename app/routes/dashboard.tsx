import { LoaderFunction } from "remix";
import { auth } from "~/auth.server";

export let loader: LoaderFunction = async ({ request }) => {
  return await auth.authenticate("github", request);
};

export default function Dashboard() {
  return <h1>Dashboard</h1>;
}
