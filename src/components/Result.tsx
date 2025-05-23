// context
import { useResult } from "../contextAPI/ResultContext"

const Result = () => {
    const { result } = useResult();
    return (
        <div className="w-[80%] mx-auto mt-12">
            <h3 className="text-lg font-bold text-gray-600">Article <span className="text-blue-500">Summary</span></h3>
            <p className=" mt-4 border border-gray-300 leading-7 p-3 rounded-md shadow-[inset 10px -50px 94px 0 rgb(199,199,199,.2)]">{result && result}</p>
        </div>
    )
}

export default Result