import Image from "next/image"
import Layout from "../components/layout"
import { Inter } from "next/font/google"
import Navbar from "../components/Navbar"
import styles from "../styles/Resources.module.css"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <Layout>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <p id='font-common'>Ресурсы</p>
      </main>
    </Layout>
  )
}
