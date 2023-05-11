import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Layout from "../components/layout";
import AccessDenied from "../components/layout-denied";

export default function Home() {
  const { data: session } = useSession();
  const [content, setContent] = useState();

  // Fetch content from protected route
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/examples/protected");
      const json = await res.json();
      if (json.content) {
        setContent(json.content);
      }
    };
    fetchData();
  }, [session]);

  // If no session exists, display access denied message
  if (!session) {
    return <AccessDenied />;
  }

  // If session exists, display content
  return (
    <Layout>
      <p id="font-common">Модули образования</p>
    </Layout>
  );
}
