import '@mantine/core/styles.css';
import { Source_Sans_3 } from 'next/font/google';

const SourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  weight: ['600', '900'],
});

import type { AppProps } from 'next/app';
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  fontFamily: `${SourceSans3.style.fontFamily}, Sans-Serif`,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Component {...pageProps} />
    </MantineProvider>
  );
}
