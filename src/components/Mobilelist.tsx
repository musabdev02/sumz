import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom"
// type
import type { navListType } from "./Header"
// images
import moon from '../assets/moon.svg'
import sun from '../assets/sun.svg'

interface MobileListProps {
  navList: navListType[];
  setIsOpen: (value: boolean) => void;
  isOpen: boolean;
  isDark: boolean
}

const Mobilelist = ({ navList, setIsOpen, isOpen, isDark }: MobileListProps) => {
  const mobileListRef = useRef<HTMLInputElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileListRef.current && !mobileListRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, setIsOpen])

  return (
    <div ref={mobileListRef} className={`block ${isOpen ? 'translate-x-0' : 'translate-x-full'} sm:hidden px-4 py-12 w-[70%] h-screen bg-white/40 dark:bg-zinc-900/40 shadow-[inset_10px_-50px_94px_0_rgba(199,199,199,0.2)] backdrop-blur-md backdrop-brightness-100 backdrop-contrast-100 fixed top-0 right-0 z-99 transition-all`} >
      <h3 className="text-md text-gray-500 font-bold">Tools</h3>
      {
        navList.map(item => <Link to={item.url} key={item.title} className="mt-2 block px-2 py-1 cursor-pointer rounded-md hover:bg-gray-100 text-md focus:bg-gray-100 dark:text-zinc-300 dark:focus:bg-zinc-700/50">{item.title}</Link>)
      }
      <a href="https://github.com/musabdev02/sumz" target="_blank"><button className="mt-4 bg-black rounded-full py-2 px-5 text-sm text-white cursor-pointer transition-all border border-black hover:bg-transparent hover:text-black">Github</button></a>
      <div className="m-3">
        {
        isDark ? <img src={sun} alt="light_mode" title="Light Mode" className="cursor-pointer dark:invert-[1]" /> : <img src={moon} alt="dark_mode" title="Dark mode" className="cursor-pointer dark:invert-[1]" />
      }
      </div>
      
    </div >
  )
}

export default Mobilelist