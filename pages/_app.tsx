import { SessionProvider } from "next-auth/react"

import type { AppProps } from "next/app"
import type { Session } from "next-auth"
import Header from "../components/header"
import NavbarRoute from "../components/Navbar"
import "../scss/globals.css"
import "../scss/index.scss"
import "../styles/globals.css"
import Contacts from "../sections/Contact"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <NavbarRoute />
      {/* <Header /> */}
      <Component {...pageProps} />
      <Contacts />
    </SessionProvider>
  )
}
