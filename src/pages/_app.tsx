import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { GlobalStyle } from "../../styles/global-style";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import { Provider } from "react-redux";
import store from "common/redux/store";

const App = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  </Provider>
);
export default App;
