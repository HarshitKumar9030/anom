import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/components/Navbar'


export default function Home() {
  return (
    <>
      <Head>
        <title>Anom</title>
        <meta name="description" content="A Not Gonna Lie Clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="h-full w-full bg-white overflow-x-hidden">
        <div className="h-screen w-screen bg-gradient-to-r from-pink-600 via-pink-500 to-yellow-500"></div>
      </main>
    </>
  )
}
