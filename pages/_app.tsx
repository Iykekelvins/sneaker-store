import '../styles/index.scss'
import type { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }: AppProps) {
  return <Layout >
              <Component {...pageProps} />
        </Layout>
}

export default MyApp
