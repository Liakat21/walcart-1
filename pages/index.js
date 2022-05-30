import Head from 'next/head'
import Link from 'next/link'
import Clients from '../component/Clients'
import Featured from '../component/Featured'
import ProductList from '../component/ProductList'
import 'bootstrap/dist/css/bootstrap.min.css';


import styles from '../styles/Home.module.css'



export default function Home() {
  return (
    <div className={styles.container}>
    
      <Head>
        <title>Walcart</title>
        <meta name="description" content="Online Shop In Bangladesh" />
        <link rel="icon" href="/favicon.ico" />

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigi="anonymous"/>

      </Head>       
      <Featured/>
      <ProductList/>
      <Clients/>
    </div>
  )
}
