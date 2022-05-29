import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { GlobalStyle } from "../../styles/global-style";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import wrapper from "common/redux/store";

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
);
export default wrapper.withRedux(App);
