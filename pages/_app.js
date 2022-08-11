import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import { Provider } from "react-redux";
import store from '../Redux/store'

//All global css here 
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        {/* All meta tags and Title here */}
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Arsha Bootstrap Template - Index</title>
        <meta content="" name="description" />
        <meta content="" name="keywords" />
      </Head>
      <Provider store={store}><Component {...pageProps} /></Provider>
    </Layout>
  )
}

export default MyApp
