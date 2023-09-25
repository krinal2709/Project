import { useState, useRef } from "react"
import ClientDetails from "./components/ClientDetails"
// import Dates from "./components/Dates"
import Footer from "./components/Footer"
// import MainDetails from "./components/MainDetails"
import Notes from "./components/Notes"
import Table from "./components/Table"
import Header from "./components/Header";
import TableForm from "./components/TableForm";
import ReactToPrint from "react-to-print"

function App() {
  
  const [showInvoice, setShowInvoice] = useState(true)
  const handlePrint =()=>{
        window.print()
      }

  const [name, setName]= useState("")
  const [address, setAdress]= useState("")
  const [email, setEmail]= useState("")
  const [phone, setPhone]= useState("")
  const [bankName, setBankName]= useState("")
  const [bankAccount, setBankAccount]= useState("")
  const [website, setWebsite]= useState("")
  const [clientName, setClientName]= useState("")
  const [clientAddress, setClientAddress]= useState("")
  const [invoiceNumber, setInvoiceNumber]= useState("")
  const [invoiceDate, setInvoiceDate]= useState("")
  const [dueDate, setDueDate]= useState("")
  const [notes, setNotes]= useState("")
  const [description, setDescription]=useState("")
  const [quantity, setQuantity]= useState("")
  const [price, setPrice]= useState("")
  const [amount, setAmount]= useState("")
  const [list, setList]= useState([])
  const [total , setTotal]= useState(0)
  const [tax, setTax]=useState(0)
   const componentRef=useRef();

   
  return (
   <>
   {/* Main Page Content =>  */}

  
   <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl  xl:max-w-4xl  bg-white rounded shadow">

    { showInvoice ? 
    (<> 
    <ReactToPrint trigger={() => <button className="bg-green-500 text-white rounded font-bold py-2 px-8 shadow border-2 border-green-500 hover:bg-transparent hover:bg-transparent hover:text-green-500 transition-all duration-300 mb-7">Print / Download </button> }
   content = { () => componentRef.current} />

    <div ref={componentRef} className="p-7">
    
    <Header handlePrint={handlePrint}  name={name} address={address}/>
    
    {/* <MainDetails name={name} address={address}/> */}
   
    <ClientDetails clientName={clientName} clientAddress={clientAddress}
    invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate}/>
  
    {/* <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate}/> */}
  
    <Table description={description} 
           quantity={quantity}
           price={price}
           amount={amount}
           list={list} 
           setList={setList}
           total ={total}
           setTotl={setTotal}
           tax={tax}
           setTax={setTax}
    />
  
    <Notes notes={notes} />
  
    <Footer  name={name} address={address} website={website} email={email} phone={phone} bankAccount={bankAccount} bankName={bankName}
     />
  </div>
  
    <button onClick={() => setShowInvoice(false)} className="mt-5 bg-red-500 text-white rounded font-bold mt-5 py-2 px-8 shadow border-2 border-red-500 hover:bg-transparent hover:bg-transparent hover:text-red-500 transition-all duration-300">Edit Information</button>
    <p className="text-right text-xs">Copyright © 2023 Developed By Krinaal Mer</p>
      </> ) :
          (
            <>     
       {/* name, address , emails, phone number,bank name, bank account, ,website,client name , client address, invoice number, invoice date due date, notes, */}
           <div className="flex flex-col justify-items-center  p-2">
            
            <article className="md:grid grid-cols-2 gap-10">
      
          <div className="flex flex-col">
              <label htmlFor="name">Shop Name</label>
            <input type="text" 
            name="text"
            id="name"
            placeholder="Name"
            autoComplete="off"
            value={name}
            onChange={(e)=> setName(e.target.value)} /></div>
      
            <div className="flex flex-col">
            <label htmlFor="address">Shop Address</label>
            <input type="text" 
            name="text"
            id="address"
            placeholder="Address"
            autoComplete="off"
            value={address}
            onChange={(e)=> setAdress(e.target.value)} />
            </div>
      
            </article>
      
            <article className="md:grid grid-cols-3 gap-10">
      
            <div className="flex flex-col">
            <label htmlFor="email">Business E-mail</label>
            <input type="email"
            name="text"
            id="email"
            placeholder="E-mail"
            autoComplete="off"
            value={email}
            onChange={(e)=> setEmail(e.target.value)} />
            </div>
      
            <div className="flex flex-col">
            <label htmlFor="website">WebSite</label>
            <input type="url"
            name="website"
            id="website"
            placeholder="Website"
            autoComplete="off"
            value={website}
            onChange={(e)=> setWebsite(e.target.value)} />
            </div>
      
            <div className="flex flex-col">
            <label htmlFor="phone">Businness Contact Number</label>
            <input type="text" 
            name="phone"
            id="phone"
            placeholder="Contact Number"
            autoComplete="off"
            value={phone}
            onChange={(e)=> setPhone(e.target.value)} />
            </div>
      
            </article>
      
      
            <article className="md:grid grid-cols-2 gap-10">
            <div className="flex flex-col">
            <label htmlFor="bankname">Payment Bank Name</label>
            <input type="text" 
      
            name="bankname"
            id="bankname"
            placeholder="Bank Name"
            autoComplete="off"
            value={bankName}
            onChange={(e)=> setBankName(e.target.value)} />
            </div>
      
            <div className="flex flex-col">
            <label htmlFor="bankAccount">Payment Account Number</label>
            <input type="text"  
            name="bankAccount"
            id="bankAccount"
            placeholder="Account Number "
            autoComplete="off"
            value={bankAccount}
            onChange={(e)=> setBankAccount(e.target.value)} />
            </div>
            </article>
      
            <article className="md:grid grid-cols-2 gap-10 md:mt-16">
            <div className="flex flex-col">
            <label htmlFor="clientName">Enter Your Client Name </label>
            <input type="text"  
            name="clientName"
            id="clientName"
            placeholder="Client Name"
            autoComplete="off"  
            value={clientName}
            onChange={(e)=> setClientName(e.target.value)} />
            </div>
      
            <div className="flex flex-col">
            <label htmlFor="clientAddress">Enter Your Client Address</label>
            <input type="text"  
            name="clientAddress"
            id="clientAddress"
            placeholder="Client Address"
            autoComplete="off"
            value={clientAddress}
            onChange={(e)=> setClientAddress(e.target.value)} />
            </div>
            </article>
      
            <article className="md:grid grid-cols-3 gap-10 ">
      
            <div className="flex flex-col">
            <label htmlFor="invoiceNumber">Invoice Number</label>
            <input type="Number"  
            name="invoiceNumber"
            id="invoiceNumber"
            placeholder=" Invoice Number "
            autoComplete="off"
            value={invoiceNumber}
            onChange={(e)=> setInvoiceNumber(e.target.value)} />
            </div>
      
            <div className="flex flex-col">
            <label htmlFor="invoiceDate">Invoice Date</label>
            <input type="date"  
            name="invoiceDate"
            id="invoiceDate"
            placeholder="Invoice Date"
            autoComplete="off"
            value={invoiceDate}
            onChange={(e)=> setInvoiceDate(e.target.value)} />
            </div>
      
            <div className="flex flex-col">
            <label htmlFor="dueDate">Invoice Due Date</label>
            <input type="date"  
            name="dueDate"
            id="dueDate"
            placeholder="Invoice Due Date"
            autoComplete="off"
            value={dueDate}
            onChange={(e)=> setDueDate(e.target.value)} /></div>
            </article>
      
      {/*This is A table */}
      <article>
      
      <TableForm 
      description={description} setDescription={setDescription}
      price={price} setPrice={setPrice}
      amount={amount} setAmount={setAmount}
      quantity={quantity} setQuantity={setQuantity}
      list={list} setList={setList}
      total ={total}
      setTotal={setTotal}
      tax={tax}
      setTax={setTax}
      />
      
      
      </article>
      
      <label htmlFor="notes" >Additional Notes</label>
        <textarea name="textarea" id="notes" cols="10" rows="5" placeholder="Additional notes to the client" 
        value={notes} onChange={(e)=> setNotes(e.target.value)}>
        </textarea>
            <button 
            onClick={()=> setShowInvoice(true)}
             className="bg-blue-500 text-white rounded font-bold mt-5 py-2 px-8 shadow border-2 border-blue-500 hover:bg-transparent hover:bg-transparent hover:text-blue-500 transition-all duration-300">
              Preview Invoice
            </button>
           </div>
            </>
          )
    }
   </main>
    </>
  )
  
}

export default App;
