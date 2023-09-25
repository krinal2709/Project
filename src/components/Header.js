import React from 'react'

export default function Header({name, address}) {
  return (
    <>
    <div className='grid grid-cols-2 mr-10'>
      <span className='px-1 py-1 mt-8 underline decoration-4 font-bold  text-base' >Store Detail</span>
      <span className=" font-bold uppercase tracking-wide text-4xl bg-black text-slate-50 ml-48 text-center mt-1 mb-1 rounded-md pt-2 ">Invoice</span>
    </div>
      <header>
      <div className='flex justify-between '>
      <section className="flex flex-col justify-start">
      <span className=" mt-2 ml-2 mb-1 uppercase text-sm font-semibold"> Name :  {name}</span>
      <span className='uppercase ml-2  text-sm font-semibold'> Location : {address}</span>
      </section> 
      </div>
    </header> 
    </>
  )
}
