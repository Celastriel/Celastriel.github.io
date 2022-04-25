import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const balise = '</>'

  return (
    <Layout title="Accueil" currentPage="home">
      <div className='flex'>
        <img src='/profil.jpg' width={288} height={64} className='rounded-full'/>
        <div className='my-auto mx-5'>
            <h1>{process.env.NAME}</h1>
            <p>Web developer</p>
        </div>
      </div>
      <div>
        <h2>About {balise}</h2>
        <pre>{`
            Bonjour, je me présente.
            J'ai commencé le développement en 2017 à la Haute école HELHa à Mons.
            Suite à ce Bachelier, j'ai également entâmer une formation Cefora en développement NodeJS.
            Je suis activement à la recherche d'un emploi, n'hésiter pas à consulter les projets que j'ai réaliser
            ainsi que mon CV
        `}</pre>
      </div>
    </Layout> 
  )
}

export default Home
