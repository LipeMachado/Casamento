import "@/styles/globals.css";
import type { AppProps } from "next/app";
import '@fontsource/montaga';
import BackToTopButton from "@/components/ButtonBackToTop";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <BackToTopButton />
    </>
  );
}
