import { Link, Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { AuthContext } from "../hooks/useAuth";
import { isAuthenticated } from "../utils/auth";

type RouterContext = {
  authentication: AuthContext;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <>
      <h1>Vite + React + TS + Tanstack Router - test</h1>
      <h2>Links</h2>
      <ul>
        <li>
          <Link
            to="/"
            activeProps={{
              style: {
                fontWeight: "bold",
                color: "red",
              },
            }}
          >
            {({isActive}) => <>{isActive && "🏠"} Home</>}
          </Link>
        </li>
      
        <li>
          <Link
            to="/pokemon"
            activeProps={{
              style: {
                fontWeight: "bold",
                color: "red",
              },
            }}
          >
            {({isActive}) => <> {isActive && "🐉"} Pokemon</>}
          </Link>
        </li>
        <li>
            <Link
            to="/search"
            activeProps={{
                style: {
                fontWeight: "bold",
                color: "red",
                },
            }}
           
            >
            {({isActive}) => <> {isActive && "🔍"} Search</>}
            </Link>
        </li>
        <li>
          <p>Guarded routes:</p>
        </li>
        <li>
            <Link
            to="/login"
            activeProps={{
                style: {
                fontWeight: "bold",
                color: "red",
                },
            }}
           
            >
            {({isActive}) => <> {isActive && "🔑"} Login</>}
            </Link>
        </li>
        <li>
          <Link
            to="/profile"
            activeProps={{
              style: {
                fontWeight: "bold",
                color: "red",
              },
            }}
          >
            {({isActive}) => <> {isActive && "👤"}{!isAuthenticated() && "🔒"} Profile</>}
          </Link>
        </li>
        {/* link to dashboard and settings */}
        <li>
          <Link
            to="/dashboard"
            activeProps={{
              style: {
                fontWeight: "bold",
                color: "red",
              },
            }}
          >
            {({isActive}) => <> {isActive && "📊"}{!isAuthenticated() && "🔒"} Dashboard</>}
          </Link>
        </li>
        <li>
          <Link
            to="/settings"
            activeProps={{
              style: {
                fontWeight: "bold",
                color: "red",
              },
            }}
          >
            {({isActive}) => <> {isActive && "⚙️"}{!isAuthenticated() && "🔒"} Settings</>}
          </Link>
        </li>
      </ul>

      <Outlet />
    </>
  ),
});
