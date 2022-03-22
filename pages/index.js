import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Banner from "../components/banner";
import Image from "next/image";

export default function Home() {
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
      </main>
    </div>
  )
}
