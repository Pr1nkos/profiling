import { signIn } from "next-auth/react";
import React, { useRef } from "react";

export default function LoginPage() {
  const userName = useRef("");
  const pass = useRef("");

  const onSubmit = async () => {
    const result = await signIn("credentials", {
      username: userName.current,
      password: pass.current,
      redirect: true,
      callbackUrl: "/",
    });
  };
  return (
    <main id="signin">
      <label>Email:</label>
      <input
        autoComplete="off"
        placeholder="email@email.com"
        onChange={(e) => (userName.current = e.target.value)}
      ></input>
      <label>Пароль:</label>
      <input
        autoComplete="off"
        type="password"
        onChange={(e) => (pass.current = e.target.value)}
      ></input>
      <button onClick={onSubmit}>Войти</button>
    </main>
  );
}
