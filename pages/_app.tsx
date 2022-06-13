import '../styles/index.scss'
import type { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [ready, setReady] = useState(false)
  const router = useRouter()
  
  useEffect(() => {
    if (router.isReady) {
      setReady(true)
      }
}, [router.isReady])

  return <Provider store={store}>
          <Layout >
          {ready &&  <Component {...pageProps} />}
        </Layout>
        </Provider>
}

export default MyApp
