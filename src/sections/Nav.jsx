import {headerLogo  } from '../assets/images'
import {navLinks} from '../constants'
import { useState } from 'react'
import {hamburger, x} from '../assets/icons'

/*${ defaultChecked === true ? 'left-0' : 'left-[-100%]'} */
const Nav = () => {
    const [open, setOpen] = useState(false);
    
  return (
    <header className="padding-x py-8 absolute z-10 w-full bg-white">
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img src={headerLogo} alt="logo" width={130} height={29}/>
            </a>
            <ul 
                id='menu' 
                className={`flex flex-1 justify-center 
                items-center gap-16 max-lg:flex
                max-lg:clear-both max-lg:absolute top-14 
                ${ open ? 'left-0' : 'left-[-100%]'}
                max-lg:w-full
                max-lg:h-auto max-lg:flex-col max-lg:justify-between
                max-lg:items-center max-lg:p-12 max-lg:bg-white
                max-lg:transition-all max-lg:duration-500 max-lg:ease-out
                max-lg:gap-4 max-lg:z-10
                `}>
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a href={item.href} className='font-monterrate leading-normal text-lg text-slate-gray'>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className='hidden max-lg:block cursor-pointer' onClick={()=> setOpen(!open)}>
                <img src={open ? x : hamburger} alt='Hamburger' width={25} height={25}/>   
            </div>
        </nav>
    </header>
  )
}

export default Nav