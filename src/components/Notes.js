import React from 'react'

export default function Notes({notes}) {
  return (
    <>
      <section className="mt-15">
        <span className='font-bold underline decoration-4 '>Notes : </span>
        <ul className='mt-2 text-xs'>
          <li><span className='font-bold '> ➡️ Payment terms : </span>the payment due date and any late payment fees that may apply. It should also state the accepted payment methods, such as credit card, UPI, or bank transfer. Account Number Mentioned in At the end of the bill</li>
          <li><span className='font-bold '> ➡️ Refund policy : </span>refund policy in case the customer is not satisfied with the goods or services provided. It should specify the timeframe for requesting a refund, any conditions that apply, and the process for returning the goods.</li>    
        
          
        </ul>
      <p className='w-lg:w-1/2 text-justify mt-2'>
      <span className='font-bold '> ➡️ Additional Notes  : </span>
        {notes}</p>
        {/* <li className='font-bold align-center flex justify-center uppercase mt-2 mb-1 underline decoration-dotted '>Banking details are mentioned below </li> */}
      </section>
    </>
  )
}
