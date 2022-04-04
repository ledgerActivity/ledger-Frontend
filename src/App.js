import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import LedgerHeader from './componenets/LedgerHeader';
import LedgerList from './componenets/LedgerList';
import data from './dataStorage/data.json';
import LedgerBalance from './componenets/LedgerBalance';
import LedgerDeposit from './componenets/LedgerDeposit';
import LedgerWithdraw from './componenets/LedgerWithdraw';
import Login from './componenets/login/Login';

function App() {
  const [particularList, setParticularList] = useState(data);
  const [balance, setBalance] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);

  const addDeposit = (newDeposit) => {
    let copy = [...particularList];
    copy = [...copy, { id: particularList.length + 1, particular: "Deposit", value: newDeposit }];
    setParticularList(copy);
    let newBalance = balance + parseInt(newDeposit);
    setBalance(newBalance)
  }

  const addWithDraw = (newWithDraw) => {
    let copy = [...particularList];
    copy = [...copy, { id: particularList.length + 1, particular: "Withdraw", value: newWithDraw }];
    setParticularList(copy);
    let newBalance = balance - parseInt(newWithDraw);
    setBalance(newBalance)
  }

  const changeUserLogged = (newStatus) =>{
    setLoggedIn(newStatus);
  }


  return (

    <div >
      <LedgerHeader />
      

      {loggedIn ? <LedgerList particularList={particularList}/> :<Login changeUserLogged={changeUserLogged}/> }

      



      {/* <div class="container">
        <LedgerList particularList={particularList}/>
        <LedgerBalance balance = {balance}/>
      </div>

      <br/>

      <div class="container">
        <LedgerDeposit addDeposit={addDeposit}/>
      </div>
      <br/>
      <div class="container" >
        <LedgerWithdraw addWithDraw={addWithDraw}/>
      </div> */}
    </div>
    
  );
}

export default App;
