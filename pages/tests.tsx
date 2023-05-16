import Layout from "../components/layout"
import styles from "../styles/Tests.module.css"

export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <p id='font-common'>Тесты</p>
      </main>
    </Layout>
  )
}
