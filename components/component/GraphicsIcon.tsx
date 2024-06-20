import Image from 'next/image'
import React from 'react'
import reactIcon from '@/public/icons/Frame.png'
import fireIcon from '@/public/icons/Vector.png'
import sIcon from '@/public/icons/Frame (1).png'
import tailwindIcon from '@/public/icons/Frame (2).png'
import circleIcon from '@/public/icons/Vector (1).png'

const GraphicsIcon = ({image}:{image: any}) => {
  return (
    <div className='w-[100%] h-[317px] mb-[20px] flex justify-center items-center'>
        <div className='w-[242px] h-[242px] bg-gradient-to-r from-[#4F46E566] to-[#4F46E500] rounded-[16px] flex justify-center items-center'>
          <Image src={image} width={128} height={128} alt='Image'/>
        </div>

        <div className='absolute w-[82px] h-[82px] bg-gradient-to-r from-[#4F46E566] to-[#4F46E500] rounded-[16px] flex justify-center items-center left-[130px]'>
          <Image src={reactIcon} width={55} height={49} alt='Image'/>
        </div>

        <div className='absolute w-[62px] h-[62px] bg-gradient-to-r from-[#4F46E566] to-[#4F46E500] rounded-[16px] flex justify-center items-center left-[80px] top-[120px]'>
          <Image src={fireIcon} width={30} height={36} alt='Image'/>
        </div>

        <div className='absolute w-[49px] h-[49px] bg-gradient-to-r from-[#4F46E566] to-[#4F46E500] rounded-[16px] flex justify-center items-center left-[60px] top-[320px]'>
          <Image src={sIcon} width={26} height={31} alt='Image'/>
        </div>

        <div className='absolute w-[114px] h-[114px] bg-gradient-to-r from-[#4F46E566] to-[#4F46E500] rounded-[16px] flex justify-center items-center left-[550px] top-[150px]'>
          <Image src={tailwindIcon} width={71} height={42} alt='Image'/>
        </div>

        <div className='absolute w-[49px] h-[49px] bg-gradient-to-r from-[#4F46E566] to-[#4F46E500] rounded-[16px] flex justify-center items-center left-[550px] top-[310px]'>
          <Image src={circleIcon} width={28} height={28} alt='Image'/>
        </div>
        
    </div>
  )
}

export default GraphicsIcon