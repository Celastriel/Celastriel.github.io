import Head from 'next/head'
import Link from 'next/link'
import NavBar from './NavBar';

export default function Layout({children,title,currentPage} : any){

    const mainTitle: string = 'Jimmy Mention Portfolio';
    const mainFooter : string = 'Portfolio Réaliser en NodeJS avec NextJS & Tailwind';
    

    return (
      <div className='h-screen bg-shade-light'> 
        <Head>
          <title>{mainTitle}</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.3/dist/flowbite.min.css" />
        </Head>

        <header> 
          <NavBar></NavBar>
        </header>
        <main>
          {children}
        </main>
        <footer className='fixed bottom-0 w-full'>
        <div className='flex flex-row justify-center w-auto bg-black'>
          <div className='my-4 text-white'>
            {mainFooter}
          </div>
        </div>
      </footer>
        <script src="https://unpkg.com/flowbite@1.4.3/dist/flowbite.js"></script>
      </div>
    )
}