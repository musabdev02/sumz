// component
import Userinput from "./Userinput"
import Result from "./Result"
import Loader from "./Loader"
// context
import { useResult } from "../contextAPI/ResultContext"
import { useInput } from "../contextAPI/InputContext";

interface MainstructureProps {
  title: string,
  highlightedText: string,
  description: string,
  func: () => void;
}

const Mainstructure = ({ title, highlightedText, description, func }: MainstructureProps) => {
  const { result } = useResult();
  const { loading } = useInput();

  return (
    <>
      <div className="sm:w-[90%] md:w-[70%] mx-auto">
        {/* content */}
        <div className="text-center">
          <h2 className="text-center text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold ">{title} <span className="bg-gradient-to-r from-[#bb7e32] to-[#ffaa40] bg-clip-text text-transparent">{highlightedText}</span> </h2>
          <p className="text-sm sm:text-lg text-gray-500 mt-3 sm:leading-6 sm:w-[80%] mx-auto">{description}</p>
        </div>
        {/* input */}
        <Userinput func={func} />
        {loading && <Loader />}
        {result && <Result />}
      </div>
    </>

  )
}

export default Mainstructure