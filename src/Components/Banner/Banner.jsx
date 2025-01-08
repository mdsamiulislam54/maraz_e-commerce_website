import React, { useEffect,useState } from 'react'
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'

const Banner = () => {

    const [show, setShow] = useState([]);
    const [currentIndex, setCurrnetIndex] = useState(0);

   useEffect(()=>{
    const handleShow = async () => {
        const response = await fetch('/public/banner_images_data.json');
        const data = await response.json();
        setShow(data);

    }
    handleShow();
   },[])

   useEffect(()=>{
    const interval = setInterval(() => {
       setCurrnetIndex((prevIndex)=> (prevIndex+1)% show.length);
       
    },5000)
    return () => clearInterval(interval);
   },[show.length])

   const nextBtn = () => {
      setCurrnetIndex((prevIndex)=> prevIndex === show.length -1 ? 0 : prevIndex + 1);
   
   }

   const prevBtn = () => {
    setCurrnetIndex((prevIndex)=> prevIndex === 0?  show.length -1 : prevIndex -1   );
   }
   if (!show.length) {
    return <div>Loading...</div>;
  }

const handleDotClick = (index)=>{
    setCurrnetIndex(index)
}


  return (
    <div className='w-[1200px] mx-auto relative pb-10 '>
        <div>
         {
            show.length>currentIndex ? (
                <img
                    src={show[currentIndex]}
                    className='h-[400px] w-[100%]'
                />
            ):(
                <div>no image</div>
            )
         }
         <div className="absolute top-[50%] left-0 right-0 flex justify-between transform -translate-y-1/2">
         <button className='p-3' onClick={prevBtn}> <FaChevronCircleLeft size={30} color='red'/> </button>
         <button className='p-3' onClick={nextBtn}> <FaChevronCircleRight size={30} color='red'/></button>
        
         </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {
                    show.map((item,index)=>(
                        <button 
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === currentIndex? 'bg-red-500 text-white' : 'bg-gray-500 text-white'}`}
                        onClick={()=>handleDotClick(index)}
                        ></button>
                    ))
                }
          </div>
        </div>
    </div>
  )
}

export default Banner