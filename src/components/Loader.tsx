import spinner from '../assets/spinner.svg'
const Loader = () => {
  return (
    <div className='flex items-center justify-center mt-8'>
        <img src={spinner} alt="loader" className='w-16' />
    </div>
  )
}

export default Loader