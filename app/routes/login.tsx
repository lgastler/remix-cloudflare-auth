import { Form } from "remix";

export default function Login() {
  return (
    <Form action="/auth/github" method="post" reloadDocument>
      <button>Login with GitHub</button>
    </Form>
  );
}
