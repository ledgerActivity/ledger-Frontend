import React from 'react'

const  LedgerBalance=({balance})=> {
  const currOptions = { style: 'currency', currency: 'USD' };
  const formatCurrency = new Intl.NumberFormat('en-US', currOptions);

  const currency = function(number){
    return formatCurrency.format(number)
  };

  const showBalance=()=>{
    return currency(parseInt(balance))
  }

  return (
        <div class="row bg-light text-dark">
          <div class="col"></div>
          <div class="col-1">Balance </div>
          <div class="col-2 text-center">{showBalance()}</div>
          <div class="col"></div>
        </div>
  )
}

export default  LedgerBalance;
