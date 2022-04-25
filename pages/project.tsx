import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Project(){

    return (
        <Layout title="Project" currentPage="project">
            <div>

                <div className='flex flex-row'>
                    <img />
                    <div>
                        <p>PWA SimplyBook</p>
                        <pre>{``}</pre>
                    </div>
                </div>

                <div className='flex flex-row'>                   
                    <div>
                        <p>Bot Discord NodeJS</p>
                        <pre>{``}</pre>
                    </div>
                    <img />
                </div>

                <div className='flex flex-row'>
                    <img />
                    <div>
                        <p>Pacman Javascript</p>
                        <pre>{``}</pre>
                    </div>
                </div>

            </div>
        </Layout>
    )
}