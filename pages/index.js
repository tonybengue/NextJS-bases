import Head from 'next/head'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <h1>Hi</h1>
      </main>
      <Footer />

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          min-height: 100vh;
        }

        a {
          text-decoration: none;
        }

        img {
          display: block;
          width: 100%;
          height: auto;
        }
      `}</style>
    </div>
  )
}
