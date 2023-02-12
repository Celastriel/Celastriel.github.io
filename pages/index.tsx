import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Layout from '../components/Layout';


const Home: NextPage = () => {

  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'});

  return (
    <Layout title="Accueil" currentPage="home">
      <div className='flex items-center mt-6 ml-6'>
        {isDesktopOrLaptop?
          <>
            <img src={process.env.PROFIL} width={288} height={64} className='rounded-full'/>
            <div className='pt-16 pl-10 my-auto mt-5 text-6xl italic font-bold'>
              <h1>{process.env.NAME}</h1>
              <p>{process.env.FUNCTION}</p>
            </div>
          </>
          :
          <div className='relative my-auto mt-5 text-4xl italic font-bold '>
            <h1>{process.env.NAME}</h1>
            <p>{process.env.FUNCTION}</p>
          </div>
        }
      </div>
      <div className='p-6 text-xl'>
        <h2 className='mb-4 text-4xl font-bold'></h2>
          <p className='mt-2'>Bonjour, je me présente.</p>
          <p className='mt-2'>J'ai commencé le développement en 2017 avec un Bachelier en Informatique de Gestion à HELHa Mons.</p>
          <p className='mt-2'>Afin d'améliorer mes compétences j'ai également suivit une Formation Cefora en développement NodeJS.</p>
          <p className='mt-2'>Je suis activement à la recherche d'un emploie, n'hésitez pas à consulter les différents projets que j'ai réalisé jusqu'ici.</p>
          <p className='mt-2'>Vous trouverez également une copie de mon CV que je met à votre disposition.</p>
          <p className='mt-2'>Bonne visite</p>
      </div>
    </Layout>
  )
}

export default Home
