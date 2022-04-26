import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import ProjectItem from '../components/ProjectItem'

export default function Project(){

    const pwa = {
        title : 'PWA SimplyBook',
        desc : `Progessive Web App dont le but est d'utiliser l'api de Simplybook afin d'afficher les datas de manière simple est intuitif. L'app restructure les données
        afin de pouvoir les utiliser de manière fluide.
        `,
        link : process.env.LINK_PWA,
    }

    const discord = {
        title : 'Bot Discord NodeJS',
        desc : `Bot discord permettant de réaliser des parties du jeux de rôle "Seven Sea" à l'aide de commande.
        Celui-ci incorpore une save des datas en JSON dont les caractéristique des personnage, quêtes et items.
        Il affiche les cartes et possède un système complexe de mise.

        `,
        link : process.env.LINK_DISCORD,
    }

    const pacman = {
        title : 'Pacman Javascript',
        desc : `Pacman réaliser avec un minimum de HTML, presque la totalité est réaliser en CSS/Javascript. Il permet de faire des parties où
        le pacman doit être diriger manuellement avec les flèches directionnel tout étant pourchasser par 4 fantômes.

        `,
        link : process.env.LINK_PACMAN,
    }

    const option : string = 'flex my-5 justify-start mx-48'

    const optionOne : string = option + ' flex-row '
    const optionTwo : string = option + ' flex-row-reverse '

    return (
        <Layout title="Project" currentPage="project">
            <ProjectItem 
                img={process.env.PWA}
                title={pwa.title}
                desc={pwa.desc}
                link={pwa.link}
                option={optionOne}/>
            <ProjectItem 
                img={process.env.DISCORD}
                title={discord.title}
                desc={discord.desc}
                link={discord.link}
                option={optionTwo}/>
            <ProjectItem 
                img={process.env.PACMAN}
                title={pacman.title}
                desc={pacman.desc}
                link={pacman.link}
                option={optionOne}/>
        </Layout>
    )
}