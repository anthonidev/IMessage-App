import { Inter } from "@next/font/google";
import { signIn, useSession, signOut } from "next-auth/react";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const { data: session } = useSession();
  console.log("session", session);

  return (
    <div>
      <h1>Home</h1>

      {session ? (
        <div>
          Signed in as {session?.user?.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      ) : (
        <button onClick={() => signIn("google")}>Sign in</button>
      )}
      <p>
        <a href="https://www.youtube.com/watch?v=mj_Qe2jBYS4">link</a>
      </p>
      <p>min : 1:13:09</p>
    </div>
  );
}
