import React, {useState} from 'react'
import LedgerDetail from './LedgerDetail';
import LedgerBalance from './LedgerBalance';
import LedgerDeposit from './LedgerDeposit';
import LedgerWithdraw from './LedgerWithdraw';

const LedgerList=({particularList})=> {
  return (
    <div>
        <div class="row ">
          <div class="col text-center">
            Particulars Detail
          </div>
        </div>
        
        <div class="row bg-primary text-white" >
          <div class="col"> </div>
          <div class="col text-center">Particular </div>
          <div class="col text-center">Deposit</div>
          <div class="col text-center">Withdraw</div>
          <div class="col"> </div>
        </div>
        {
            particularList.map(particular=>{
                return (
                  <LedgerDetail particular={particular}/>
                );
            }
            )
        }
    </div>
  )
}

export default  LedgerList;
