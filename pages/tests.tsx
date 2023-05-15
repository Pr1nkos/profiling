import Image from "next/image"
import Layout from "../components/layout"
import { Inter } from "next/font/google"
import Navbar from "../components/Navbar"
import styles from "../styles/Tests.module.css"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <p id='font-common'>Тесты</p>
      </main>
    </Layout>
  )
}
