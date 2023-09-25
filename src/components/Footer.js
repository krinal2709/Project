import React from 'react'

export default function Footer({name ,email, address, website, phone, bankAccount, bankName}) {
  
  return (
    <>
   <footer className='footer'>
    <div className='font-bold  underline decoration-4 mb-2 mt-2'>Payment Details : </div>

   <div className="grid grid-cols-3 border-double border border-black ">
      {/* <li><span className="font-bold">Your Name:</span>{name}</li> */}
      {/* <li><span className="font-bold"> Business Email:</span> {email}</li>
      <li><span className="font-bold"> Business Number :</span> {phone}</li> */}
      <div className='font-medium'><span className='font-bold'> AC Holder Name:</span>  {name}</div>
      <div className='font-medium '><span className='font-bold'>Bank Name: </span> {bankName} </div>
      <div className='font-medium'><span className='font-bold'>  Account Number:</span> {bankAccount}</div>
      {/* <li><span className="font-bold"> Website:</span><a href={website} rel="zzzzzzzz"> {website}</a></li> */}
    </div>

    <div className='font-bold  underline decoration-4 mb-2 mt-2'>Contact Info : </div>

  <div className="grid grid-cols-3 border-double border border-black ">
       <div className='font-medium'><span className='font-bold'> Website: </span>  {website}</div>
       <div className='font-medium '><span className='font-bold'>Email: </span> {email} </div>
       <div className='font-medium'><span className='font-bold'> Number: </span> {phone}</div>
  </div>

<div className='text-center uppercase mt-10 text-2xl font-bold'>
    "Thank you for your business!"
</div>


      </footer>

    </>
  )
}
