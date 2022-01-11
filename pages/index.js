import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Banner from '../components/banner/banner'
import NavBar from '../components/nav/navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix App</title>
        <meta name='description' content='a netflix app by nextjs' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className={styles.main}>
        <NavBar username='example@example.com' />

        <Banner
          videoId='4zH5iYM4wJo'
          title='Clifford the red dog'
          subTitle='a very cute dog'
          imgUrl='/static/clifford.webp'
        />
      </div>
    </div>
  )
}
