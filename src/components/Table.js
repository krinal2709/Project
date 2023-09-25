import React from 'react'

export default function Table({list,total,tax,setTax,amount}) 
{
  function textt() {
    const rate=0.18;
    return ( rate * total);
  }
  
  
  return (
    <>
    <div className='overflow-x-auto min-w-full overflow-hidden'>
    <table className='table-auto border-separate border border-slate-500  min-w-full divide-y divide-gray-200 mb-5' >
        <thead className='text-center text-xl'>
       <tr className='bg-gray-300 p-1 font-bold px-2 py-3 text-left uppercase '>
           <td className='px-2  text-center text-base font-medium text-slate-950 uppercase tracking-wider'>Discription</td>
           <td className='px-2  text-center text-base font-medium text-slate-950 uppercase tracking-wider'>Quantity</td>
           <td className='px-2  text-center text-base font-medium text-slate-950 uppercase tracking-wider' >Price</td>
           <td className='px-2  text-center text-base font-medium text-slate-950 uppercase tracking-wider'>Amount</td>
         </tr>
       </thead>
      {list.map(({id, description,quantity,price, amount}) =>(
     <React.Fragment key={id}>
       <tbody>
         <tr className='border bg-white divide-y divide-gray-200'>
           <td className='text-center border pb-1 whitespace-nowrap'>{description}</td>
           <td className='text-center border pb-1 whitespace-nowrap'>{quantity}</td>
           <td className='text-center border pb-1 whitespace-nowrap'>{price}</td>
           <td className='text-center border pb-1 whitespace-nowrap'>{amount}</td>
         </tr>
       </tbody>
     </React.Fragment>
      ))}
      </table>
      </div>

      <div className='mt-5 border-t-2 border-gray-300'>
        
        <div className='text-gray-800 text-base mt-5 font-bold  flex items-end justify-end'>Sub Total =  {total.toLocaleString()}</div>
        <span className='text-gray-800 text-base font-bold  mb-10 flex items-end justify-end  '> GST Include : 18% </span>
        <div className='text-gray-800 text-2xl mt-5 mb-5  font-bold  flex items-end justify-end bg-neutral-400'>Total Amount = {tax} </div> 
        
      </div>
    </>
  )
}
