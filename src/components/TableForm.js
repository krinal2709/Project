import React from 'react'
import {AiOutlineDelete} from 'react-icons/ai'
import {AiOutlineEdit} from 'react-icons/ai'
import { useState, useEffect } from 'react'
import {v4 as uuidv4} from "uuid"

     
export default function TableForm({description, setDescription, quantity, setQuantity, price, setPrice, amount, setAmount,list,setList,total,setTotal,setTax}){ 

  const [editing ,setEditing]= useState (false);

      const handelSubmit =(e) =>{
        e.preventDefault()
      if(!description || !quantity || !price){
          alert("Please Fill all Inputs")
        }  
      else { const newItems ={
            id:uuidv4(),
            description,
            quantity,
            price,
            amount
        }
        setDescription("")
        setQuantity("")
        setAmount("")
        setPrice("")
        setList([...list,newItems])
        setEditing(false)
        console.log(list);
    }
  }

  //calulate tax

  // function TaxAmount(total) {
  //   const taxAmount = (18 / 100) * total;
  //   setTax ( total + taxAmount);
  //   };
  
useEffect(() => {
  console.log("total ",total);
    setTax (( ((18 / 100) * total) + total).toFixed(2) );
},[total]);

    // Calculate Amount Function 

  useEffect(() => {
    const calAmount= (amount) => {
        setAmount( quantity * price)
    }
    calAmount(amount)
  }, [price,quantity] );

//calculate total Amount
 useEffect(() => {
  let rows = document.querySelectorAll(".amount")
  let sum = 0;

  for (let i = 0;  i < rows.length; i++) {
    if (rows[i].className === "amount"){
      sum +=isNaN(rows[i].innerHTML) ? 0 :parseInt(rows[i].innerHTML)
      setTotal(sum)
    }  
  }
 })

  //Edit Button 
  const editRow= (id) => {
    const editingRow = list.find((row) => row.id === id)
    setList(list.filter((row) => row.id !== id))
    setEditing(true)
    setDescription(editingRow.description)
    setQuantity(editingRow.quantity)
    setPrice(editRow.price)
  }
  //Delete Buttton
  const deleteRow =(id)=> setList(list.filter((row) => row.id !== id))

  return (
    <ul>
    <form onSubmit={handelSubmit}>
    <div className='flex flex-col md:mt-16'>
    <label htmlFor="description">Item Name</label>
     <input type="text"name="description" 
     id='description'
      placeholder='Item description' 
      value={description} onChange={(e) => 
        setDescription(e.target.value)}/> 
    </div>
    
   <div className='md:grid grid-cols-3 gap-10 '>
   <div className='flex flex-col'>
    <label htmlFor="quantity">Quantity</label>
     <input type="text"name="quantity" 
     id='quantity'
      placeholder='Quantity' 
      value= {quantity} onChange={(e) => 
        setQuantity(e.target.value)}/> 
    </div>
    <div className='flex flex-col'>
    <label htmlFor="price">Price</label>
     <input type="text"name="price" 
     id='price'
      placeholder='Price' 
      value= {price} onChange={(e) => 
        setPrice(e.target.value)}/> 
    </div>

    <div className='flex flex-col'>
    <label htmlFor="amount">Amount</label>
     <p>{amount}</p>
    </div>

   </div>
   <button type='Submit' className="mb-5 bg-blue-500 text-white rounded font-bold mt-5 py-2 px-8 shadow border-2 border-blue-500 hover:bg-transparent hover:bg-transparent hover:text-blue-500 transition-all duration-300">{editing? "Editing Row Item " : "Add table Item"}</button>
    </form>
    {/* Table Items */}
      <table width="100%" className='mb-5 mt-10 border-2px min-w-full divide-y divide-gray-200 bg-gray-300'>
        <thead className="bg-gray-50 text-center">
       <tr className='bg-gray-300 p-1 font-bold px-16 text-base py-3 text-left text-base text-gray-700 uppercase tracking-wider'>
           <td className='text-base'>Discription</td>
           <td className='text-base'>Quantity</td>
           <td className='text-base'>Price</td>
           <td className='text-base'>Amount</td>
         </tr>
       </thead>
      {list.map(({id, description,quantity,price, amount}) =>(
     <React.Fragment key={id}>
       <tbody className='bg-white divide-y divide-gray-200'>
         <tr className='px-4 py-2 whitespace-nowrap'>
           <td >{description}</td>
           <td className='px-4 py-2 whitespace-nowrap'>{quantity}</td>
           <td className='px-4 py-2 whitespace-nowrap'>{price}</td>
           <td className='amount'>{amount}</td>
           <td><button onClick={ () => deleteRow(id)}> < AiOutlineDelete className='text-red-500 font-bold text-xl' /></button></td>
           <td><button onClick={() => editRow(id)}>< AiOutlineEdit className='text-green-500 font-bold text-xl' /></button></td>
         </tr>
       </tbody>
     </React.Fragment>
      ))}
      </table>
      <span className='border-t-2 border-gray-300'>
      </span>

      <div className='border-t-2 border-gray-300'>

        <span className='flex items-end justify-end text-gray-800 text-2xl font-bold mb-10 mt-5 '> SubTotal = {total.toLocaleString()}</span>
       
        
      </div>
     </ul>
  )
      }