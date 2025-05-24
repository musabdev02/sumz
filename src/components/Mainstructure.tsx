// component
import Userinput from "./Userinput"
import Result from "./Result"
import Loader from "./Loader"
// context
import { useResult } from "../contextAPI/ResultContext"
import { useInput } from "../contextAPI/InputContext";

type Option = "input" | "textarea";

interface MainstructureProps {
  title: string,
  highlightedText: string,
  description: string,
  func: () => void;
  colors: string[];
  mode: Option
}

const Mainstructure = ({ title, highlightedText, description, func, colors, mode }: MainstructureProps) => {
  const { result } = useResult();
  const { loading } = useInput();

  return (
    <>
      <div className="sm:w-[90%] md:w-[70%] mx-auto">
        {/* content */}
        <div className="text-center">
          <h2 className="text-center text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold ">{title}
            <br />
            <span className="bg-gradient-to-r from-[${colors[0]}] to-[${colors[1]}] bg-clip-text text-transparent"
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
        <Userinput func={func} mode={mode} />
        {loading && <Loader />}
        {result && <Result />}
      </div>
    </>

  )
}

export default Mainstructure