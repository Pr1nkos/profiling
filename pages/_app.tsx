import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";

import type { AppProps } from "next/app";
import type { Session } from "next-auth";
import "../scss/globals.css";
import "../scss/index.scss";
import "../styles/globals.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}
