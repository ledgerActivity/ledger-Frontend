import React, {useState} from 'react'

const  LedgerDeposit=({addDeposit})=> {
    const [ depositInput, setDeposit ] = useState('');

    const handleChange = (e) =>{
      setDeposit(e.currentTarget.value)
    }

    const handleAddDeposit = (e) =>{
      e.preventDefault();
      addDeposit (depositInput);
      setDeposit("");
    }

   

  return (
    <div>
        <div class="row">
          <div class="col"></div>
          <div class="col-5">
            <div class="input-group mb-3">
              <span class="input-group-text">$</span>
              <input  class="form-control" value={depositInput} type="text" onChange={handleChange} placeholder="Deposit amount..." / >
              <span class="input-group-text">.00</span>
              <button class="btn btn-primary" onClick={handleAddDeposit}>Deposit</button>
            </div>
          </div>
          <div class="col"></div>
        </div>
    </div>
  )
}

export default  LedgerDeposit;
