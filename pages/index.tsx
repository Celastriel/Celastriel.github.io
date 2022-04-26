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

  },[])

  return (
    <Layout title="Accueil" currentPage="home">
      <div className='flex mt-12 ml-24'>
        <img src={process.env.PROFIL} width={288} height={64} className='ml-24 rounded-full'/>
        <div className='mx-24 my-auto italic text-white text-8xl'>
            <h1>{process.env.NAME}</h1>
            <p>{process.env.FUNCTION}</p>
        </div>
      </div>
      <div className='p-6 pr-48 mx-48 text-xl transition-all duration-500 transform scale-0 bg-white border-8 border-dashed mt-14 spitch'>
        <h2 className='mb-4 text-4xl font-bold'>{balise}</h2>
        <blockquote><p className='p-spitch'></p></blockquote>
      </div>
    </Layout> 
  )
}

export default Home
