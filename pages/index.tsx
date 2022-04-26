import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const balise : string = 'About  </>';
  const spitch : string = `Bonjour, je me présente.</br>
J'ai commencé le développement en 2017 à la Haute école HELHa à Mons.</br>
Suite à ce Bachelier, j'ai également entâmer une formation </br>
Cefora en développement NodeJS.</br>
Je suis activement à la recherche d'un emploi, </br>
n'hésiter pas à consulter les projets que j'ai réaliser</br>
ainsi que mon CV
`

  useEffect(()=>{
    document.getElementsByClassName('spitch')[0].classList.remove('scale-0')
    document.getElementsByClassName('spitch')[0].classList.add('scale-100')
    document.getElementsByClassName('p-spitch')[0].innerHTML = spitch

    document.getElementsByClassName('profil')[0].classList.remove('lg:-right-96')
    document.getElementsByClassName('profil')[0].classList.add('lg:right-96')

  },[])

  return (
    <Layout title="Accueil" currentPage="home">
      <div className='flex lg:mt-12 lg:ml-24'>
        <img src={process.env.PROFIL} width={288} height={64} className='absolute invisible transition-all duration-500 transform lg:rounded-full lg:ml-24 2xl:visible lg:-right-96 -right-96 profil'/>
        <div className='relative pl-10 my-auto italic text-white lg:mx-24 text-8xl'>
            <h1>{process.env.NAME}</h1>
            <p>{process.env.FUNCTION}</p>
        </div>
      </div>
      <div className='p-6 text-xl transition-all duration-500 transform scale-0 bg-white border-8 border-dashed lg:pr-48 lg:mx-48 lg:mt-28 spitch'>
        <h2 className='mb-4 text-4xl font-bold'>{balise}</h2>
        <blockquote><p className='p-spitch'></p></blockquote>
      </div>
    </Layout> 
  )
}

export default Home
