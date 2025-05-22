

const navList = [
    { title: "Article Summarizer", url: '/article-summarizer' },
    { title: "Paraphrasing Tool",  url: '/dashboard' },
    { title: "Grammar Corrector",  url: '/dashboard' },
    { title: "Blog Generator", url: '/dashboard' },
    { title: "Story Maker", url: '/dashboard' }
]
const Header = () => {
    return (
        <div>
            <div className="max-w-[80rem] mx-auto p-6">
                <div className="flex items-center justify-between">
                    {/* logo */}
                    <div>
                        <h3 className="text-xl font-medium">Invo</h3>
                    </div>
                    <div className="flex items-center gap-1">
                       {
                        navList.map(item =>  <p key={item.title} className="px-2 py-1 rounded-md hover:bg-gray-100 text-sm">{item.title}</p>)
                       }
                    </div>
                    <button className="bg-black rounded-full py-2 px-5 text-sm text-white">Github</button>
                </div>
            </div>
        </div>
    )
}

export default Header