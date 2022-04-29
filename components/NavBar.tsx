import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFolderTree, faIdCard } from '@fortawesome/free-solid-svg-icons'

import Head from 'next/head'
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'
import Script from 'next/script'


export default function NavBar(){
      const tab = {
        home : 'Accueil',
        resume : 'CV',
        project : 'Projet'
      }
      
      const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})
      const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
      const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
      const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })


      return(<nav className="bg-black border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
          <ul className="flex flex-row mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link href={'/'}>              
                <a className="block py-2 pl-3 pr-4 text-white hover:bg-shade-light md:hover:bg-transparent md:border-0 md:hover:text-shade-light md:p-0" aria-current="page">
                  <div className='flex flex-row items-center'>
                    <FontAwesomeIcon icon={faHouse} />
                    <span className='ml-5'>{tab.home}</span>
                  </div>
                </a>
              </Link>
            </li>
            <li>
              <Link href={'/project'}>
                <a className="block py-2 pl-3 pr-4 text-white hover:bg-shade-light md:hover:bg-transparent md:border-0 md:hover:text-shade-light md:p-0 ">
                  <div className='flex flex-row items-center'>
                  <FontAwesomeIcon icon={faFolderTree} />
                    <span className='ml-5'>{tab.project}</span>
                  </div>
                </a>
              </Link>
            </li>
            <li>
              {isDesktopOrLaptop ?
              <Link href={'/resume'}>
                <a className="block py-2 pl-3 pr-4 text-white hover:bg-shade-light md:hover:bg-transparent md:border-0 md:hover:text-shade-light md:p-0">
                  <div className='flex flex-row items-center'>
                  <FontAwesomeIcon icon={faIdCard} />
                    <span className='ml-5'>{tab.resume}</span>
                  </div>
                </a>
              </Link>
              :
              <Link href={'/files/CV.pdf'}>
                <a className="block py-2 pl-3 pr-4 text-white hover:bg-shade-light md:hover:bg-transparent md:border-0 md:hover:text-shade-light md:p-0">
                  <div className='flex flex-row items-center'>
                  <FontAwesomeIcon icon={faIdCard} />
                    <span className='ml-5'>{tab.resume}</span>
                  </div>
                </a>
              </Link>
              }
            </li>
          </ul>
        </div>
    </nav>)
}