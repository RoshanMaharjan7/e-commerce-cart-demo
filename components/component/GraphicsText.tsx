import React from 'react'

const GraphicsText = ({textContent}: {textContent: String}) => {
  return (
    <div className='w-[100%] h-[35%] flex flex-col gap-2'>
        <p className='text-[#FFFFFF99] font-semibold text-sm tracking-[0.15rem]'>NAMANYAJUGABELAJAR.IO</p>
        <p className='font-normal text-3xl text-[#FFFFFF]'>{textContent}</p>
    </div>
  )
}

export default GraphicsText