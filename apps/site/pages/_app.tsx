import { ThemeProvider } from "styled-components";
import { AppProps } from "next/app";
import theme from "@setup/theme";
import GlobalStyles from "@setup/theme/GlobalStyles";
import Head from "next/head";
import MainLayout from "@components/layout/MainLayout";

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider {...{ theme }}>
    <Head>
      <link href="http://fonts.googleapis.com/css?family=Lato:400,700" />
    </Head>
    <GlobalStyles />
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  </ThemeProvider>
);

export default App;
