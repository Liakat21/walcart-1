import Head from 'next/head'
import Link from 'next/link'
import Clients from '../component/Clients'
import Featured from '../component/Featured'
import ProductList from '../component/ProductList'
import 'bootstrap/dist/css/bootstrap.min.css';
import { gql } from "@apollo/client"; 
import client from "../apollo-client";




import styles from '../styles/Home.module.css'



export default function Home({ countries }) {
  return (
    <div className={styles.container}>
    
      <Head>
        <title>Walcart</title>
        <meta name="description" content="Online Shop In Bangladesh" />
        <link rel="icon" href="/favicon.ico" />

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigi="anonymous"/> 
        
        <link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.7/dist/flowbite.min.css" />

        
    </Head>     
      

      <ProductList/>
      <Clients/>
      {countries.map((country) => (
        <div key={country.uid}>{country.name}</div>
      ))}
    </div>
  )
}


export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      {
        getCategories(pagination: { limit: 100, skip: 0 }) {
          message
          statusCode
          result {
            count
            categories {
              uid
              name
              parent {
                uid
                name
              }
              parents {
                uid
                name
              }
              isActive
              inActiveNote
              createdAt
              updatedAt
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      countries: data.getCategories.result.categories,
    },
  };
}