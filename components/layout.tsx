import Header from "./header"
import Footer from "./footer"
import type { ReactNode } from "react"
import Navbar from '../components/Navbar'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}