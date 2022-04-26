import Head from 'next/head'
import Link from 'next/link'

export default function ProjectItem({img,title,desc,link,option} : any){

    return (
        <div className={option}>
            <img src={img} width={250} height={250}/>
            <div className='mx-12'>
                <div className='flex flex-row items-center mb-2'>
                    <p className='text-2xl text-white'>{title}</p>
                    <a href={link} target='_blank'>
                        <img src={process.env.GITHUB} width={30} height={30} className='ml-4'/>
                    </a>
                </div>
                <p className='absolute bg-white border-2 rounded-lg w-72 h-44'>{desc}</p>
            </div>
        </div>
    )
}