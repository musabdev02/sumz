import { useState } from "react"
// context
import { useResult } from "../contextAPI/ResultContext"
// images
import copy from '../assets/copy.svg'
import tick from '../assets/tick.svg'
const Result = ({ title }: { title: string | undefined }) => {
    const [isCopy, setIsCopy] = useState(false);

    async function copyTextToClipboard(text: string): Promise<void> {
        try {
            await navigator.clipboard.writeText(text);
            setIsCopy(true)
            setTimeout(() => {
                setIsCopy(false)
            }, 1500)
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    }
    const { result } = useResult();
    return (
        <div className="sm:w-[80%] mx-auto mt-12">
            {
                title ? <h3 className="text-lg font-bold text-gray-600">{title}</h3>:
                <h3 className="text-lg font-bold text-gray-600">Article <span className="text-blue-500">Summary</span></h3>
            }
            <div className="flex justify-end mt-4">
                {
                    isCopy ? <img src={tick} alt="sucess" className="opacity-[0.5]" /> : <img src={copy} onClick={() => copyTextToClipboard(result)} alt="copy_icon" className="cursor-pointer opacity-[0.5]" />
                }
            </div>
            <p className="mt-2 rounded-xl border border-gray-200 bg-white/20 p-4 shadow-[inset_10px_-50px_94px_0_rgba(199,199,199,0.2)] backdrop-blur-md backdrop-brightness-100 backdrop-contrast-100">{result}</p>
            <p className="mt-1 ml-1 text-gray-500 text-sm">The result genereted by AI.*</p>
        </div>
    )
}

export default Result