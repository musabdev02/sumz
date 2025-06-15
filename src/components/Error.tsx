import { useError } from "../contextAPI/ErrorContext"
const Error = () => {
    const { uError } = useError();
  return (
    <div className="sm:w-[70%] text-center mx-auto mt-12 bg-red-300/20 px-4 py-8 rounded-md">
        <h4 className="font-bold text-red-400 text-md sm:text-lg">Oops! That wasn't supposed to happen!</h4>
        <p className="mt-8 dark:text-gray-200 text-gray-700">{uError}</p>
    </div>
  )
}

export default Error