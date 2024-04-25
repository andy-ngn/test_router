import type { AppType } from "next/app";
import "@/app/globals.css";
const MyApp: AppType = ({ Component, ...pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
