// img
import Link from '../assets/link.svg';
// context
import { useInput } from '../contextAPI/InputContext';

interface UserInputProps {
    func: React.MouseEventHandler;
    mode: string;
    placeholder: string;
}

const Userinput = ({ func, mode, placeholder }: UserInputProps) => {
    const { input, setInput } = useInput();
    return (
        <div className="mt-5 sm:mt-10 bg-white px-3 py-2 rounded-md sm:w-[80%] mx-auto flex justify-between shadow-sm 
                border border-gray-200 focus-within:border-black transition-colors group items-center dark:bg-zinc-700/50 dark:text-zinc-300 dark:border-zinc-700 dark:focus-within:border-zinc-500">
            <div className="flex items-center gap-4 w-[95%]">
                {
                    mode === "input" ? (<> <img src={Link} alt="link" className="opacity-[0.5] dark:invert-[1]" /> <input
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                        type="url"
                        autoFocus={true}
                        placeholder={placeholder}
                        className="outline-none text-sm w-full dark:text-zinc-300 "
                    /> </>) :
                        <textarea spellCheck={"false"} autoCorrect={"false"} rows={3} value={input} onChange={(e) => setInput(e.target.value)} autoFocus={true} placeholder='Paste your version of the paragraph' className='outline-none w-full resize-none text-sm dark:text-zinc-300'></textarea>
                }

            </div>
            <button
                onClick={func}
                className="px-3 border rounded-md text-gray-400 cursor-pointer transition-colors 
               border-gray-300 dark:border-zinc-700 group-focus-within:border-black group-focus-within:text-gray-800 dark:group-focus-within:text-gray-300 dark:group-focus-within:border-zinc-500"
            >
                ↵
            </button>
        </div>

    )
}

export default Userinput