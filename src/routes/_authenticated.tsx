import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: ({ context }) => {
    const { isLogged } = context.authentication;
    if (!isLogged()) {
      alert("You must be signed in to view this page, redirecting to login...");
      throw redirect({
        to: "/login",
      });
    }
  },
});
