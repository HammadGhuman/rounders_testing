import React from 'react'


function Overlay({selected,text}:{selected:string,text:string}) {
  return (
    <div className='relative px-5'>
    <h1 className="label select-none text-[13rem] uppercase">
      {selected}
    </h1>
    <h1 className="absolute top-36  left-1/2 transform -translate-x-1/2  font-Hevojniwal text-9xl text-center text-mustard">{text}</h1>
    </div>
  )
}

export default Overlay