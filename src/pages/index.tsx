import Head from "next/head";
import { Basic } from "@/components/Basic";
export default function Page() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Basic t1="Esto es un bloque basico" />
    </>
  );
}
