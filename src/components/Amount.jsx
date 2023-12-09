import React,{useState,useEffect} from 'react'
import axios from 'axios'
function Amount() {
  const [dats, setDats] = useState([]);
  useEffect(()=>{
     axios.get("http://localhost:5000/trans")
      .then((res)=>{
        setDats(res.data)
      })
    },[])
    const amo = dats.reduce((it,cu)=> {return it + Number(cu.Amount)},0) 
  return (

    <div className='amount'>
        <h4>Account Balance</h4>
        <h3 style={{color:amo>=0 ? 'green' : 'red'}} >Rs.{amo}</h3>
    </div>
  )
}

export default Amount