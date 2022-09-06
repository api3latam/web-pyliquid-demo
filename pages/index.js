import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PyLiquid Demo</title>
        <meta name="description" content="PyLiquid tooling" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          PyLiquid Demo
        </h1>

        <p className={styles.description}>
         Powered by  <a
          href="https://github.com/api3latam"
          target="_blank"
          rel="noopener noreferrer"
          className='text-emerald-300'
        >
          API3 Latam
      
        </a>
        </p>
        <div className='flex flex-wrap' >
          <div className='flex flex-col m-5'>
              {/**Cool Button that says create wallet */}
              <button className='bg-emerald-900 hover:bg-emerald-900 text-white font-bold py-2 px-4 rounded text-lg'>
                Create Wallet
              </button>
              <p className='mt-2 text-xl'>Response:</p>
              <div className="border-2 p-2 mt-2">
                <p className='p-6'>Example of payload</p>
              </div>
          </div>
           <div className='flex flex-col m-5'>
              {/**Cool Button that says create wallet */}
              <button className='bg-emerald-900 hover:bg-emerald-900 text-white font-bold py-2 px-4 rounded text-lg'>
                Create Wallet
              </button>
              <p className='mt-2 text-xl'>Response:</p>
              <div className="border-2 p-2 mt-2">
                <p className='p-6'>Example of payload</p>
              </div>
          </div>
           <div className='flex flex-col m-5'>
              {/**Cool Button that says create wallet */}
              <button className='bg-emerald-900 hover:bg-emerald-900 text-white font-bold py-2 px-4 rounded text-lg'>
                Create Wallet
              </button>
              <p className='mt-2 text-xl'>Response:</p>
              <div className="border-2 p-2 mt-2">
                <p className='p-6'>Example of payload</p>
              </div>
          </div>
           <div className='flex flex-col m-5'>
              {/**Cool Button that says create wallet */}
              <button className='bg-emerald-900 hover:bg-emerald-900 text-white font-bold py-2 px-4 rounded text-lg'>
                Create Wallet
              </button>
              <p className='mt-2 text-xl'>Response:</p>
              <div className="border-2 p-2 mt-2">
                <p className='p-6'>Example of payload</p>
              </div>
          </div>
          
        </div>
        
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/api3latam"
          target="_blank"
          rel="noopener noreferrer"
        >
          API3 LATAM
      
        </a>
      </footer>
    </div>
  )
}
