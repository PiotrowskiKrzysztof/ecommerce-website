import { ThemeProvider } from "styled-components";
import { AppProps } from "next/app";
import theme from "@setup/theme";
import GlobalStyles from "@setup/theme/GlobalStyles";
import Head from "next/head";
import MainLayout from "@components/layout/MainLayout";
import { SessionProvider } from "next-auth/react";

const App = ({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) => (
  <ThemeProvider {...{ theme }}>
    <SessionProvider session={session}>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Prata&display=swap" />
      </Head>
      <GlobalStyles />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </SessionProvider>
  </ThemeProvider>
);

export default App;
