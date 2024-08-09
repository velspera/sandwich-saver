import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from './tailwind.css?url';
import { LinksFunction } from "@remix-run/node";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="m-8 bg-honeydew text-engviolet font-sans">
        <header className="text-center">
          <h1 className="m-6 text-midgreen text-6xl font-bold font-lobster">The Sandwich Saver</h1>
          <div className="text-left p-6 text-xl text-eggplant rounded-xl bg-midgreen/35 font-semibold tracking-wide">
            <p>Welcome to the Sandwich Saver! Please enter the ingredients in your leftover sandwich and we'll give you ideas on how to use them up!</p>
            <p>Please note that this app assumes that the quantity of ingredients is equal to the amount in a 6" sub.</p>
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

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: stylesheet },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com'},
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous'},
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Beiruti:wght@200..900&family=Lobster&display=swap'},
  ];
}
