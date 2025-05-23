// component
import Userinput from "./Userinput"
import Result from "./Result"

interface MainstructureProps {
  title: string,
  highlightedText: string,
  description: string
}

const Mainstructure = ({ title, highlightedText, description }: MainstructureProps) => {
  return (
    <>
      <div className="w-[70%] mx-auto">
      {/* content */}
        <div className="text-center ">
          <h2 className="text-center text-7xl font-bold ">{title} <span className="bg-gradient-to-r from-[#bb7e32] to-[#ffaa40] bg-clip-text text-transparent">{highlightedText}</span> </h2>
          <p className="text-lg text-gray-500 mt-3 leading-6 w-[80%] mx-auto">{description}</p>
        </div>
        {/* input */}
        <Userinput />
        <Result />
      </div>
    </>

  )
}

export default Mainstructure