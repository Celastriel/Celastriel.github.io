import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFolderTree, faIdCard } from '@fortawesome/free-solid-svg-icons'

import Head from 'next/head'
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'


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
        <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link href={'/'}>
                
                <a className="block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-shade-light md:hover:bg-transparent md:border-0 md:hover:text-shade-light md:p-0" aria-current="page">
                  <div className='flex flex-row items-center'>
                    <FontAwesomeIcon icon={faHouse} />
                    <span className='ml-5'>{tab.home}</span>
                  </div>
                </a>
              </Link>
            </li>
            <li>
              <Link href={'/project'}>
                <a className="block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-shade-light md:hover:bg-transparent md:border-0 md:hover:text-shade-light md:p-0 ">
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
                <a className="block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-shade-light md:hover:bg-transparent md:border-0 md:hover:text-shade-light md:p-0">
                  <div className='flex flex-row items-center'>
                  <FontAwesomeIcon icon={faIdCard} />
                    <span className='ml-5'>{tab.resume}</span>
                  </div>
                </a>
              </Link>
              :
              <Link href={'/files/CV.pdf'}>
                <a className="block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-shade-light md:hover:bg-transparent md:border-0 md:hover:text-shade-light md:p-0">
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
      </div>
    </nav>)
}