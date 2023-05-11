import Link from "next/link"
import styles from "./footer.module.css"
import packageJSON from "../package.json"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <hr />
          <p>@Pr1nkos</p>
    </footer>
  )
}
