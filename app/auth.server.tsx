import { GitHubProfile, GitHubStrategy } from "~/remix-auth/github";
import { Authenticator } from "remix-auth/build/authenticator";

import { sessionStorage } from "~/session.server";

export let auth = new Authenticator<{ name: string }>(sessionStorage);

let gitHubStrategy = new GitHubStrategy(
  {
    clientID: GITHUB_CLIENT_ID || "",
    clientSecret: GITHUB_CLIENT_SECRET || "",
    callbackURL: GITHUB_CALLBACK_URL || "",
  },
  async (accessToken, _, extraParams, profile) => {
    // Note that GitHub doesn't have a refreshToken so the second param is always
    // an empty string, you can skip it using `_` as param name

    // Get the user data from your DB or API using the tokens and profile
    return { name: profile.displayName };
  }
);

auth.use(gitHubStrategy);
