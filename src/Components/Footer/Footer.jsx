import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className='bg-white py-10'>
       <div className='flex justify-between items-start w-[1200px] mx-auto text-black'>
       <div>
            <h2 className='font-bold text-xl'>Customar Care</h2>
            <li className='list-none pl-2 font-light text-lg hover:font-normal transition-all duration-300'><Link to='/'>Help Center</Link></li>
            <li className='list-none pl-2 font-light text-lg hover:font-normal transition-all duration-200'><Link to='/'>How to Buy</Link></li>
            <li className='list-none pl-2 font-light text-lg hover:font-normal transition-all duration-200'><Link to='/'>Returens & Refund</Link></li>
            <li className='list-none pl-2 font-light text-lg hover:font-normal transition-all duration-200'><Link to='/'>Contracts</Link></li>
            <li className='list-none pl-2 font-light text-lg hover:font-normal transition-all duration-200'><Link to='/'>Terms and Condition</Link></li>
        </div>
        <div>
            <h2 className='font-bold text-xl'><span className='bg-gradient-to-r from-red-600 to-green-500 bg-clip-text text-transparent'>M</span>araz</h2>
            <li className='list-none pl-2 font-light text-lg hover:font-normal transition-all duration-200'><Link to='/'>About Us</Link></li>
            <li className='list-none pl-2 font-light text-lg hover:font-normal transition-all duration-200'><Link to='/'>Our Story</Link></li>
            <li className='list-none pl-2 font-light text-lg hover:font-normal transition-all duration-200'><Link to='/'>Maraz Payment</Link></li>
            <li className='list-none pl-2 font-light text-lg hover:font-normal transition-all duration-200'><Link to='/'>Maraz Blog </Link></li>
            <li className='list-none pl-2 font-light text-lg hover:font-normal transition-all duration-200'><Link to='/'>Maraz Mart </Link></li>
            <li className='list-none pl-2 font-light text-lg hover:font-normal transition-all duration-200'><Link to='/'>Maraz App </Link></li>
            <li className='list-none pl-2 font-light text-lg hover:font-normal transition-all duration-200'><Link to='/'>Maraz Donates </Link></li>
            <li className='list-none pl-2 font-light text-lg hover:font-normal transition-all duration-200'><Link to='/'>Maraz University </Link></li>
            <li className='list-none pl-2 font-light text-lg hover:font-normal transition-all duration-200'><Link to='/'>Maraz Earnd </Link></li>
            



        </div>
        <div className='flex justify-between gap-10'>
            <div>
                <h2 className='font-bold text-xl'><span className='bg-gradient-to-r from-red-600 to-green-500 bg-clip-text text-transparent'>M</span>araz</h2>
            </div>
            <div>
                <h2 className='list-none pl-2 font-light text-lg hover:font-normal transition-all duration-200 mt-5'>Happy Shoping</h2>
                <h2 className='list-none pl-2  text-lg hover:font-normal transition-all duration-200 font-bold'>Download App</h2>
            </div>
        </div>
       </div>
    </div>
  )
}
