import React from 'react'

export default function ClientDetails({clientName, clientAddress,invoiceNumber,invoiceDate,dueDate}) {
  return (
    <>
      <section className="mt-10 grid grid-cols-2 mb-10 ml-2"> 
      <div >      
        <p className='font-bold text-base underline decoration-4 mb-4 '>Customer Details</p>
      <p className=" mt-2 mb-1 uppercase text-sm font-semibold "> Customer Name : {clientName}</p>
      <p className='uppercase text-sm font-semibold'>Address : {clientAddress}</p>
      </div>
     <div>
    <article className=" flex items-end justify-end">
    <ul>
      <li className='py-1 mr-12'><span className="font-bold">Invoice Number : </span>{invoiceNumber}
      </li>
      <li className='py-1 '><span className="font-bold">Innvoice Date : </span> {invoiceDate}
      </li>
      <li className='py-1 '><span className="font-bold">Due Date : </span> {dueDate}
      </li>
     </ul>
  </article>
  </div> 
  </section>
  
    </>
  )
}
