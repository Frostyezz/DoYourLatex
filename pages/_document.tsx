import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "../components/Navbar";

export default function Document() {
  return (
    <Html data-theme="light">
      <Head />
      <body className="px-4">
        <Navbar />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
