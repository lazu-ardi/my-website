import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Footer from '../components/layout/Footer';
import Navbar from '../components/navigation/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class" enableSystem={false}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
