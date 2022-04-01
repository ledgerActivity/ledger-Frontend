import React from 'react'


const LedgerDetail =({particular})=> {

  const currOptions = { style: 'currency', currency: 'USD' };
  const formatCurrency = new Intl.NumberFormat('en-US', currOptions);

  const currency = function(number){
    return formatCurrency.format(number)
  };

  const showDeposit=()=>{
    if (particular.particular=="Deposit"){
      return currency(particular.value)
    }
  }

  const showWithDraw=()=>{
    if (particular.particular=="Withdraw"){
      return currency(particular.value)
    }
  }

  return (
   
      <div class="row">
        <div class="col"> </div>
        <div class="col"> {particular.particular} </div>
        <div class="col text-end"> { showDeposit()} </div>
        <div class="col text-end"> { showWithDraw()} </div>
        <div class="col"> </div>
      </div>

  )
}

export default  LedgerDetail;
