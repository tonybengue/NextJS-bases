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
    
      `}</style>

      {/* <style jsx global>{``}</style> */}
    </div>
  )
}
