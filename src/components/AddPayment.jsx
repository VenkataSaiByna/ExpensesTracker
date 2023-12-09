import React, { useState } from 'react'
import axios from 'axios'
function AddPayment() {
  const [Task ,setTask]=useState('')
  const[Amount,setAmount]=useState(0)
  const sendTodb=async ()=>{
    await axios.post("http://localhost:5000/trans",{Task,Amount})
  }
  return (
    <div >
        <form onSubmit={sendTodb}>
          <div className='formmain' >
           <div> Type :<input type='text'  placeholder="Enter task" value={Task} onChange={(e)=>setTask(e.target.value)}></input></div>
           <div> Amount :<input type='number'  placeholder="Enter Amount" value={Amount} onChange={(e)=>setAmount(e.target.value)}></input></div>
           <div><button type='submit'>submit</button></div>
            </div>
        </form>
    </div>
  )
}

export default AddPayment