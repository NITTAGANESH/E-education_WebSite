import React from 'react'
import IMG from "../../../assets/Platform/student.png"
import IMG1 from "../../../assets/E- education logo .png"
import EducationCarousel from '../eductionCarousel/EductionCarousel'
import Certified from './Certified'
import { Link } from 'react-router-dom'
function Platform() {
  return (
    <>
    
    <Certified />
    <EducationCarousel />
    <div className='bg-blue-200 font-lora'>
     
      <div className='ml-96 h-92 w-96 -mb-16'>
      <img
      src={IMG1}
      className=' '
      />
      </div>
     
        <h1 className="text-7xl font-bold text-center p-[5%] font-lora">The perfect platform to boost your technical skills</h1>
        <div className='flex p-20 gap-8'>
          <Link to = "/student">
          
            <div className='text-center shadow-2xl p-4 font-lora transform hover:-translate-y-2 transition-transform'>
               <div className='flex justify-center items-center'>
               <img src={IMG} className='h-[360px] w-[360px]' />
               </div>
                <h2 className='text-3xl font-bold'>Students</h2>
                <p className='text-gray-500 text-md'>
                Kickstart your career in tech with industry-relevant skills and certifications that make you stand out to employers.
                </p>
            </div>
          </Link>
          <Link to = '/professional'>
          
            <div className='text-center shadow-2xl p-4 font-lora transform hover:-translate-y-2 transition-transform'>
              <div className='flex justify-center items-center'>

                <img  src='https://png.pngtree.com/png-vector/20240201/ourmid/pngtree-man-seated-using-laptop-character-png-image_11581009.png' />
              </div>
                <h2 className='text-3xl font-bold'>Professionals</h2>
                <p className='text-gray-500 text-md'>
                Stay ahead of the curve by mastering emerging technologies and techniques that drive innovation in your field.
                </p>
            </div>
          </Link>
        </div>
    </div>
    </>
  )
}

export default Platform