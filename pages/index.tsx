import Layout from "../components/layout"
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function IndexPage() {
  return (
    <Layout>
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <p id="font-common">Онлайн-курсы</p>
    </main>
    </Layout>
  )
}