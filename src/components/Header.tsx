import { Link } from "react-router-dom"

const navList = [
    { title: "Article Summarizer", url: '/' },
    { title: "Text Tweaker",  url: '/text-tweaker' },
    // { title: "Grammar Corrector",  url: '/' },
    // { title: "Blog Generator", url: '/' },
    // { title: "Story Maker", url: '/' }
]
const Header = () => {
    return (
        <div>
            <div className="max-w-[80rem] mx-auto p-6">
                <div className="flex items-center justify-between">
                    {/* logo */}
                    <Link to={'/'}>
                        <h3 className="text-xl font-medium">Sumz</h3>
                    </Link>
                    <div className="flex items-center gap-1">
                       {
                        navList.map(item =>  <Link to={item.url} key={item.title} className="px-2 py-1 cursor-pointer rounded-md hover:bg-gray-100 text-sm">{item.title}</Link>)
                       }
                    </div>
                   <a href="https://github.com/musabdev02/sumz" target="_blank"><button className="bg-black rounded-full py-2 px-5 text-sm text-white cursor-pointer transition-all border hover:bg-transparent hover:text-black">Github</button></a>
                </div>
            </div>
        </div>
    )
}

export default Header