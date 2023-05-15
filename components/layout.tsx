import type { ReactNode } from "react"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* <Header />
      <Navbar /> */}

      <main>{children}</main>

      {/* <Footer /> */}
    </>
  )
}
