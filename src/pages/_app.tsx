import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { GlobalStyle } from "../../styles/global-style";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
);
export default App;
