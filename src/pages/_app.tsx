import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { GlobalStyle } from "../../styles/global-style";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import wrapper from "common/redux/store";
import React, { FC } from "react";

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  </React.StrictMode>
);
export default wrapper.withRedux(App);
