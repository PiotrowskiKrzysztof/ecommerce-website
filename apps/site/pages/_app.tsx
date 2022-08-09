import { ThemeProvider } from "styled-components";
import { AppProps } from "next/app";
import theme from "@setup/theme";
import GlobalStyles from "@setup/theme/GlobalStyles";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider {...{ theme }}>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Prata&display=swap" />
    </Head>
    <GlobalStyles />
  </ThemeProvider>
);

export default App;
