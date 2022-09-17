import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/global_styles";
import { theme } from "styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      if (loader) loader.style.display = "none";
    }
  }, []);
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
