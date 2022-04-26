import Head from 'next/head'
import Link from 'next/link'

export default function ProjectItem({img,title,desc,link,option} : any){

    return (
        <div className={option}>
            <img src={img} width={250} height={250}/>
            <div>
                <div className='flex flex-row'>
                    <p>{title}</p>
                    <a href={link} target='_blank'>
                        <img src={process.env.GITHUB} width={25} height={25} className='ml-4'/>
                    </a>
                </div>
                <pre>{desc}</pre>
            </div>
        </div>
    )
}