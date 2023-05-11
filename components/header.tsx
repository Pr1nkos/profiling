import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import styles from "./header.module.css";

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  return (
    <header id="headers">
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
              <span className={styles.notSignedInText}>Вы не вошли</span>
              <a
                href={`/api/auth/signin`}
                className={styles.buttonPrimary}
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
              >
                Войти
              </a>
            </>
          )}
          {session?.user && (
            <>
              <span className={styles.signedInText}>
                <small>Здравствуйте, </small>
                <br />
                <strong>{session.user.email ?? session.user.name}</strong>
                {/* <strong>{session.user.email}</strong>                 */}
              </span>
              <a
                href={`/api/auth/signout`}
                className={styles.button}
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Выйти
              </a>
            </>
          )}
        </p>
      </div>
    </header>
  );
}
