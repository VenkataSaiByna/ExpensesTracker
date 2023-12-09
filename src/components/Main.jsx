import React from 'react'
import Header from './Header'
import Amount from './Amount'
import AddPayment from './AddPayment'
import PaymentList from './PaymentList'

function Main() {
  return (
    <div className='main'>
        <Header/>
        <Amount/>
        <PaymentList/>
        <AddPayment/>
    </div>
  )
}

export default Main