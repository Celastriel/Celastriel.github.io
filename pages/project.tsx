import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import ProjectItem from '../components/ProjectItem'

export default function Project(){

    const pwa = {
        title : 'PWA SimplyBook',
        desc : `Progessive Web App eeeeeeeeeeeeeeeeeeeeeeeeeeeee
        `,
        link : process.env.LINK_PWA,
    }

    const discord = {
        title : 'Bot Discord NodeJS',
        desc : `

        `,
        link : process.env.LINK_DISCORD,
    }

    const pacman = {
        title : 'Pacman Javascript',
        desc : `

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