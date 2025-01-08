import React from 'react'
import { FaSearch, FaShoppingCart } from 'react-icons/fa';


const Navbar = () => {
  return (
    <div className='bg-red-500 py-5'>
        <nav className='flex gap-10 mx-10 justify-start items-center' >
            <h1 className='font-bold text-4xl'><span className='bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent'>M</span>araz</h1>
           <div>
           <input className='w-[600px] py-3 bg-gray-50 text-black px-3 text-lg border-none outline-none rounded-l-md mr-0' type="text" placeholder="search in Maraz"  />
           <button className='px-6 pt-[16px] pb-[19px] text-lg  bg-gray-300 text-black rounded-r-md '>
            <FaSearch size={16} color='red'/>
           </button>
           </div>
           <button className='text-3xl '>
            <FaShoppingCart size={40}/>
           </button>
        </nav>
    </div>
  )
}

export default Navbar