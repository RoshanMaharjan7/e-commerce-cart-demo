import React from 'react'

const Graphics = ({children}:{
  children: React.ReactNode;
}) => {
  return (
    <div className="relative w-[50%] h-screen bg-gradient-to-r from-[#3730A3] to-[#312E81] overflow-hidden hidden lg:block">
      <span className="absolute bg-gradient-to-b from-[#FFFFFF03] to-[#FFFFFF00] w-[1090px] h-[1090px] rounded-full -top-[73px] -left-[249px] "></span>
      <span className="absolute bg-gradient-to-b from-[#FFFFFF05] to-[#FFFFFF00] w-[935px] h-[935px] rounded-full top-[66px] -left-[134px] "></span>
      <span className="absolute bg-gradient-to-b from-[#FFFFFF03] to-[#FFFFFF00] w-[935px] h-[935px] rounded-full top-[250px] left-[74px] "></span>
      <span className="absolute bg-gradient-to-b from-[#FFFFFF03] to-[#FFFFFF00] w-[700px] h-[700px] rounded-full top-[434px] left-[282px] "></span>

      <div className='h-[100%] flex flex-col mx-auto p-[91px]'>
        {children}
      </div>
    </div>

  )
}

export default Graphics