// img
import Link  from '../assets/link.svg';

const Userinput = () => {
    return (
        <div className="mt-10 bg-white px-3 py-2 rounded-md w-[80%] mx-auto flex justify-between shadow-sm">
            <div className='flex items-center gap-4 w-[85%]'>
                <img src={Link} alt="link" className='opacity-[0.5]'/>
                <input type="url" autoFocus={true} placeholder='Paste the article link' className='outline-none text-sm w-full' />
            </div>
            <button className='px-3 border rounded-md text-gray-400 cursor-pointer focus:text-gray-800'>↵</button>
        </div>
    )
}

export default Userinput