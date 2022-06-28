import Head from 'next/head'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import Link from "next/link"
import { useState, useEffect } from 'react'
// import useSWR from 'swr'

function Profile1() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://random-data-api.com/api/users/random_user?size=1')
      .then((res) => res.json())
      .then((data) => {
        setData(data[0])
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <div className='profile'>
      <h1>{data.username}</h1>
      <p>{data.first_name}</p>
      <div className="profile-img">
        <img src={data.avatar}></img>
      </div>
      <p>{data.last_name}</p>
      <style jsx>{`
        .profile {
          background-color: red;
        }

        .profile-img {
          width: 100px;
          border-radius: 50%;
          background: white;
          padding: 1rem;
        }
      `}</style>
    </div>
  )
}

// With swr
const fetcher = (...args) => fetch(...args).then((res) => res.json())
function Profile2() {
  const { data, error } = useSWR('https://random-data-api.com/api/users/random_user?size=1', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div className='profile'>
      <h1>{data.username}</h1>
      <p>{data.first_name}</p>
      <div className="profile-img">
        <img src={data.avatar}></img>
      </div>
      <p>{data.last_name}</p>
      <style jsx>{`
        .profile {
          background-color: red;
        }

        .profile-img {
          width: 100px;
          border-radius: 50%;
          background: white;
          padding: 1rem;
        }
      `}</style>
    </div>
  )
}

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
