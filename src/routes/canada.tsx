import { createFileRoute, redirect } from "@tanstack/react-router";

// Redirect /canada → / for backward compatibility
export const Route = createFileRoute("/canada")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
});
