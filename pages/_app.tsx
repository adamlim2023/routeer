import React, { useState } from "react";
import { useRouter } from "next/router";
import { createWrapper } from "next-redux-wrapper";
import initStore from "store";
import Loading from "components/layout/Loading";
import "tailwindcss/tailwind.css";
import "styles/global.css";

const MyApp = ({ Component, pageProps }) => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  router?.events?.on("routeChangeStart", () => {
    setIsLoading(true);
  });

  router?.events?.on("routeChangeComplete", () => {
    setIsLoading(false);
  });

  return <>{isLoading ? <Loading /> : <Component {...pageProps} />}</>;
};

const wrapper = createWrapper(initStore);
export default wrapper.withRedux(MyApp);
