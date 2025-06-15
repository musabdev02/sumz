import { useEffect, useState } from 'react';
// images
import moon from '../assets/moon.svg'
import sun from '../assets/sun.svg'


const Thememode = () => {
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
        isDark ? <img onClick={() => setIsDark(!isDark)} src={sun} alt="light_mode" title="Light Mode" className="cursor-pointer dark:invert-[1]" /> : <img onClick={() => setIsDark(!isDark)} src={moon} alt="dark_mode" title="Dark mode" className="cursor-pointer dark:invert-[1]" />
    )
}

export default Thememode