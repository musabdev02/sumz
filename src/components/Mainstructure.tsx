// component
import Userinput from "./Userinput"
import Result from "./Result"
import Error from "./Error"
import Loader from "./Loader"
// context
import { useResult } from "../contextAPI/ResultContext"
import { useInput } from "../contextAPI/InputContext";
import { useError } from "../contextAPI/ErrorContext"
import { useEffect } from "react"

type Option = "input" | "textarea";

interface MainstructureProps {
  title: string,
  highlightedText: string,
  description: string,
  placeholder?: string;
  func: () => void;
  colors: string[];
  mode: Option;
  resultTitle?: string;
}

const Mainstructure = ({ title, highlightedText, description, placeholder, func, colors, mode, resultTitle }: MainstructureProps) => {
  const { result } = useResult();
  const { loading } = useInput();
  const { uError } = useError();


  useEffect(() => {
    console.log(uError)
  }, [uError])
  return (
    <>
      <div className="sm:w-[90%] md:w-[70%] mx-auto">
        {/* content */}
        <div className="text-center">
          <h2 className="text-center text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold dark:text-gray-300 ">{title}
            <br />
            <span className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, ${colors[0]}, ${colors[1]})`,
              }}
            >
               {highlightedText}
            </span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-500 mt-3 sm:leading-6 sm:w-[80%] mx-auto">{description}</p>
        </div>
        {/* input */}
        <Userinput func={func} mode={mode} placeholder={placeholder || ""} />
        {loading && <Loader />}
        {result && <Result title={resultTitle} />}
        {uError && <Error />}
      </div>
    </>

  )
}

export default Mainstructure