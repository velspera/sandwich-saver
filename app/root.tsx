import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="m-8 bg-honeydew text-engviolet">
        <header className="text-center">
          <h1 className="m-6 text-midgreen text-4xl font-bold">The Sandwich Saver</h1>
          <div className="text-left p-6 text-eggplant rounded-xl font-semibold tracking-wide">
            <p>Welcome to the Sandwich Saver! Please enter the ingredients in your leftover sandwich and we'll give you ideas on how to use them up!</p>
          </div>
        </header>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
