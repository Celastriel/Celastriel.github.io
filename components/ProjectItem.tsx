import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

export default function ProjectItem({img,title,desc,link,option,timer} : any){

    useEffect(()=>{
        const nb = document.getElementsByClassName('project').length
        for( let i=0 ; i< nb ; i++){
            if(!document.getElementsByClassName('project')[i].classList.contains('transform')){
            document.getElementsByClassName('project')[i].classList.add('transition-all');
            document.getElementsByClassName('project')[i].classList.add('transform');
            document.getElementsByClassName('project')[i].classList.add('duration-' + timer);
            document.getElementsByClassName('project')[i].classList.remove('scale-0');
            document.getElementsByClassName('project')[i].classList.add('scale-100');
            }
        }
    },[])

    return (
        <div className={option + ' project'}>
            <Image src={img} width={250} height={250}/>
            <div className='mx-12 '>
                <div className='flex flex-row items-center mb-2'>
                    <p className='mr-4 text-2xl text-white'>{title}</p>
                    <a href={link} target='_blank' rel="noreferrer">
                        <Image src='/img/github.png' width={30} height={30} className='ml-4'/>
                    </a>
                </div>
                <p className='absolute bg-white border-2 rounded-lg w-72 h-44'>{desc}</p>
            </div>
        </div>
    )
}