// component


interface MainstructureProps {
  title: string,
  highlightedText: string,
  description: string
}

const Mainstructure = ({ title, highlightedText, description }: MainstructureProps) => {
  return (
      <div className="test relative after:bg-[#fd3a4e] before:bg-[#855afc]">
      {/* content */}
      <div className="text-center w-[70%] mx-auto">
        <h2 className="text-center text-7xl font-bold ">{title} <span className="bg-gradient-to-r from-[#bb7e32] to-[#ffaa40] bg-clip-text text-transparent">{highlightedText}</span> </h2>
        <p className="text-lg text-gray-500 mt-3 leading-6">{description}</p>
      </div>



    </div>

  )
}

export default Mainstructure