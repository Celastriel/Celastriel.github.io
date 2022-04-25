import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Project(){

    return (
        <Layout title="Project" currentPage="project">
            <div>
                <div className='flex flex-row justify-center my-5'>
                    <img src={process.env.PWA} width={250} height={250}/>
                    <div>
                        <p>PWA SimplyBook</p>
                        <pre>{``}</pre>
                    </div>
                </div>

                <div className='flex flex-row justify-center my-5'>                   
                    <div>
                        <p>Bot Discord NodeJS</p>
                        <pre>{``}</pre>
                    </div>
                    <img src={process.env.DISCORD} width={250} height={250}/>
                </div>

                <div className='flex flex-row justify-center my-5'>
                    <img src={process.env.PACMAN} width={250} height={250}/>
                    <div>
                        <p>Pacman Javascript</p>
                        <pre>{``}</pre>
                    </div>
                </div>

            </div>
        </Layout>
    )
}