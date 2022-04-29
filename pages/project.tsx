import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Layout from '../components/Layout'
import project from '../interfaces/project';


export default function Project(){

    const projects : project[] = [
        {
            title : 'PWA SimplyBook',
            desc : `Progessive Web App dont le but est d'utiliser l'api de Simplybook afin d'afficher les datas de manière simple est intuitif. L'app restructure les données
            afin de pouvoir les utiliser de manière fluide.
            `,
            link : process.env.LINK_PWA,
            img : process.env.PWA
        },
        {
            title : 'Bot Discord NodeJS',
            desc : `Bot discord permettant de réaliser des parties du jeux de rôle "Seven Sea" à l'aide de commande.
            Celui-ci incorpore une save des datas en JSON dont les caractéristique des personnage, quêtes et items.
            Il affiche les cartes et possède un système complexe de mise.
            `,
            link : process.env.LINK_DISCORD,
            img : process.env.DISCORD
        },
        {
            title : 'Pacman Javascript',
            desc : `Pacman réaliser avec un minimum de HTML, presque la totalité est réaliser en CSS/Javascript. Il permet de faire des parties où
            le pacman doit être diriger manuellement avec les flèches directionnel tout étant pourchasser par 4 fantômes.
            `,
            link : process.env.LINK_PACMAN,
            img : process.env.PACMAN
        },
    ]

    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    return (
        <Layout title="Project" currentPage="project">
            {projects.map((p:project,i:number)=>{
                return (
                    <div key={i}>
                        {isDesktopOrLaptop
                        ?
                        <div className={'flex my-5 justify-center flex-row'}>
                            <img src={p.img} width={250} height={250}/>
                            <div className='mx-12 '>
                                <div className='flex flex-row items-center mb-2'>
                                    <p className='text-2xl text-white'>{p.title}</p>
                                    <a href={p.link} target='_blank' rel="noreferrer">
                                        <img src={'/img/github.png'} width={30} height={30} className='ml-4'/>
                                    </a>
                                </div>
                                <p className='h-auto bg-white border-2 rounded-lg w-96'>{p.desc}</p>
                            </div>
                        </div>
                        :
                        <div className='flex flex-col items-center mx-12'>
                            <div className='flex flex-row items-center mb-2'>
                                <p className='text-2xl text-white'>{p.title}</p>
                                <a href={p.link} target='_blank' rel="noreferrer">
                                    <img src={'/img/github.png'} width={30} height={30} className='ml-4'/>
                                </a>
                            </div>
                            <p className='bg-white border-2 rounded-lg w-72 h-44'>{p.desc}</p>
                        </div>
                        }
                    </div>
                )}
            )}
        </Layout>
    )
}