import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
// image
import menu from '../assets/menu.svg'
import moon from '../assets/moon.svg'
import sun from '../assets/sun.svg'
import icon from '/icon.png'
// components
import Mobilelist from "./Mobilelist";
export type navListType = {
    title: string,
    url: string
}
const navList: navListType[] = [
    { title: "Article Summarizer", url: '/' },
    { title: "Text Tweaker", url: '/text-tweaker' },
    // { title: "Blog Generator", url: '/blog-generator' },
    // { title: "Grammar Corrector",  url: '/' },
    // { title: "Story Maker", url: '/' }
];
const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isDark, setIsDark] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });


    useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark:bg-zinc-800")
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark:bg-zinc-800")
    }
  }, [isDark]);

    return (
        <div>
            <div className="max-w-[80rem] mx-auto p-6">
                <div className="flex items-center justify-between">
                    {/* logo */}
                    <Link to={'/'} className="flex items-center">
                        <img src={icon} alt="" className="w-10 h-10 object-fill"/>
                        <h3 className="text-xl font-medium dark:text-gray-300">umZ.</h3>
                    </Link>
                    <div className="hidden sm:flex items-center gap-1">
                        {
                            navList.map(item => <Link to={item.url} key={item.title} className="px-2 py-1 cursor-pointer rounded-md hover:bg-gray-100 dark:text-zinc-300 dark:hover:bg-zinc-900 text-sm">{item.title}</Link>)
                        }
                    </div>

                    <div className="flex items-center gap-4">
                        <a href="https://github.com/musabdev02/sumz" target="_blank"><button className="hidden sm:block bg-black rounded-full py-2 px-5 text-sm text-white cursor-pointer transition-all border border-black hover:bg-transparent dark:bg-white dark:text-black dark:hover:text-white dark:hover:border-white hover:text-black">Github</button></a>
                        <div className="hidden sm:block">

                            {
                                isDark ? <img onClick={() => setIsDark(!isDark)} src={sun} alt="light_mode" title="Light Mode" className="cursor-pointer dark:invert-[1]" /> : <img onClick={() => setIsDark(!isDark)} src={moon} alt="dark_mode" title="Dark mode" className="cursor-pointer dark:invert-[1]" />
                            }
                        </div>

                    </div>
                    <img onClick={() => setIsOpen(true)} src={menu} alt="menu_icon" className="block sm:hidden dark:invert-[1] opacity-[0.5]" />
                    <Mobilelist navList={navList} setIsOpen={setIsOpen} isOpen={isOpen} isDark={isDark} />
                </div>
            </div>
        </div>
    )
}

export default Header