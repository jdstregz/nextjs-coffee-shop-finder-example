import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Banner from "../components/banner/banner";
import Card from "../components/card/card";

import coffeeStores from '../data/coffee-stores.json';

export async function getStaticProps(staticProps) {
    // const data = fetch(cofeeStores)
    return {
        props: {
            coffeeStores
        }
    }
}

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
          <link rel={"preload"} href={"/fonts/IBMPlexSans-Bold.ttf"} as={"font"} crossOrigin={"anonymous"}/>
          <link rel={"preload"} href={"/fonts/IBMPlexSans-Regular.ttf"} as={"font"} crossOrigin={"anonymous"}/>
          <link rel={"preload"} href={"/fonts/IBMPlexSans-SemiBold.ttf"} as={"font"} crossOrigin={"anonymous"}/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <Banner
              buttonText={"View stores nearby"}
              onButtonClick={() => console.log('click')}
          />
          {props.coffeeStores.length > 0 && (
              <>
                  <h2 className={styles.heading2}>Toronto stores</h2>
                  <div className={styles.cardLayout}>
                  {
                      props.coffeeStores.map(coffeeStore =>
                      <Card
                      name={coffeeStore.name}
                      imgUrl={coffeeStore.imgUrl}
                      href={`/coffee-store/${coffeeStore.id}`}
                      key={coffeeStore.id}
                      />)
                  }
                  </div>
              </>
          )}
      </main>
    </div>
  )
}
