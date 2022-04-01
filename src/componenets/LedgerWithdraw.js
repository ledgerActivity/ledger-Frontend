import React, {useState} from 'react'

const LedgerWithdraw=({addWithDraw})=> {
  const [withDrawInput, setWithDraw] = useState('')
  
  const handleChange =(e)=>{
    setWithDraw(e.currentTarget.value)
  }

  const handleAddWithDraw=(e)=>{
    e.preventDefault();
    addWithDraw(withDrawInput);
    console.log({withDrawInput});
    setWithDraw("");
    console.log("paso");
  }

  return (


    <div>
        <div class="row">
          <div class="col"></div>
          <div class="col-5">
            <div class="input-group mb-3">
              <span class="input-group-text">$</span>
              <input  class="form-control" value={withDrawInput} type="text" onChange={handleChange} placeholder="Withdraw amount..." / >
              <span class="input-group-text">.00</span>
              <button class="btn btn-info" onClick={handleAddWithDraw}>Withdraw</button>
            </div>
          </div>
          <div class="col"></div>
        </div>
    </div>
  )
}
export default  LedgerWithdraw;