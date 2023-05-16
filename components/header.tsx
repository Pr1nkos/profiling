import { signIn, signOut, useSession } from "next-auth/react"
import React from "react"
import styles from "./header.module.css"

export default function Header() {
  const { data: session, status } = useSession()
  const loading = status === "loading"
  return (
    <header id='headers'>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <div className={styles.signedInStatus}>
        <p
          className={`nojs-show ${
            !session && loading ? styles.loading : styles.loaded
          }`}
        >
          {!session && (
            <>
              <a
                href={`/api/auth/signin`}
                onClick={(e) => {
                  e.preventDefault()
                  signIn()
                }}
              >
                Войти
              </a>
            </>
          )}
          {session?.user && (
            <>
              <span>
                <br />
                <strong>{session.user.email ?? session.user.name}</strong>
                {/* <strong>{session.user.email}</strong>                 */}
              </span>
              <a
                href={`/api/auth/signout`}
                className={styles.button}
                onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}
              >
                Выйти
              </a>
            </>
          )}
        </p>
      </div>
    </header>
  )
}
