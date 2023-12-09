import React, {useState, useEffect } from 'react'
import axios from 'axios'
function PaymentList() {
  const [dat, setDat] = useState([]);
  useEffect(()=>{
     axios.get("http://localhost:5000/trans")
      .then((res)=>{
        setDat(res.data)
      })
    },[])
    const  deleteitem=(id)=>{
      const nt = dat.filter((item)=> id!==item.id)
      setDat(nt)
      axios.delete(`http://localhost:5000/trans/${id}`)
      window.location.reload()
    }

  return (
    <div className='paymentmain'>
      <div>
        <h3>Payments Done</h3>
      </div>
        <div className='listitems'>
        <ul >
        {dat.map((item) => (
          <div  key={item.id} style={{display:'flex', borderRightColor: Number(item.Amount)>0?'green':'red'}}>
          <button className='buttons' onClick={() => deleteitem(item.id)}>X</button>
          <div className='listcss'><li>{item.Task}  {item.Amount}</li></div>
          </div>
        ))}
        </ul>
        </div>
    </div>
  )
}

export default PaymentList