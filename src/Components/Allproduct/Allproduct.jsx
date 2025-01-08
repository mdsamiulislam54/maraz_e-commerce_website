import React, { useContext } from 'react'
import { ProductsContext } from '../Context/Context'

const Allproduct = () => {
    const {products} = useContext(ProductsContext)
  return (
    <div className='w-[1200px] mx-auto'>
        <div>
            <h3 className='text-xl font-bold py-4'>Just For You</h3>
        </div>
        <div>
            {products.map((product, index) => {
                return(
                    <div key={index} className='flex flex-col md:flex-row items-center justify-between py'>
                        
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default Allproduct