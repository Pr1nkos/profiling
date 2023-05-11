import Header from "./header"
import Footer from "./footer"
import type { ReactNode } from "react"
import Navbar from './Navbar'

export default function AccessDenied() {
  return (
    <>
      <Header />
      <Navbar />
      <main><p id ="font-common">Доступ запрещён</p></main>
      <Footer />
    </>
  )
}
