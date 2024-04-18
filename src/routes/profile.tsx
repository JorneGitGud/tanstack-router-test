import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/profile")({
  beforeLoad: ({ context }) => {
    const { isLogged } = context.authentication;
    if (!isLogged()) {
      alert("You must be signed in to view this page, redirecting to login...");
      throw redirect({
        to: "/login",
      });
    }
  },

  component: () => (
    <div>
      <p>
        <b>Hello User</b>
      </p>
      <p>Don't share this passphrase with anyone: "I like green eggs" </p>
    </div>
  ),
});
