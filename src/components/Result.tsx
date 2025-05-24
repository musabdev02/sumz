// context
import { useResult } from "../contextAPI/ResultContext"

const Result = () => {
    const { result } = useResult();
    return (
        <div className="sm:w-[80%] mx-auto mt-12">
            <h3 className="text-lg font-bold text-gray-600">Article <span className="text-blue-500">Summary</span></h3>
            <p className="mt-4 rounded-xl border border-gray-200 bg-white/20 p-4 shadow-[inset_10px_-50px_94px_0_rgba(199,199,199,0.2)] backdrop-blur-md backdrop-brightness-100 backdrop-contrast-100">{result && result}</p>
        </div>
    )
}

export default Result