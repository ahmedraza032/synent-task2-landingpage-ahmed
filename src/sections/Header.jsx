import Navbar from '../components/Navbar'

const Header = () => {
  return (
    <div className='sm:px-[150px] p-6 flex justify-between'>
      <p className='text-2xl font-bold text-green-300'>REACT</p>
      <Navbar />
    
    </div>
  )
}

export default Header