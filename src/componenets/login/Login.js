import React, {useState} from 'react'

const Login =({changeUserLogged})=> {
  const [usr, setUser] = useState('')
  const [pwd, setPwd] = useState('')

  const handleChangeUser=(e)=>{
    setUser(e.currentTarget.value);
  }

  const handleChangePwd=(e)=>{
    setPwd(e.currentTarget.value);
  }

  const handleLogin=(e)=>{
    e.preventDefault();

    // validar acceso
    console.log("Paso por login");
    console.log(usr);
    console.log(pwd);
    window.location.replace("/");
    changeUserLogged(true);

  }


  return (
      

    <main class="form-signin ">
        <form>
            {/* <img class="mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/> */}
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

            <div class="form-floating">
              <input type="email" value = {usr} class="form-control" id="floatingInput" onChange={handleChangeUser} placeholder="name@example.com"/>
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input type="password" value={pwd} class="form-control" id="floatingPassword"  onChange={handleChangePwd} placeholder="Password"/>
              <label for="floatingPassword">Password</label>
            </div>

            {/* <div class="checkbox mb-3">
            <label>
                <input type="checkbox" value="remember-me"/> Remember me
            </label>
            </div> */}
            <button class="w-100 btn btn-lg btn-primary" type="submit" onClick={handleLogin}>Sign in</button>
            
        </form>
</main>
        
  )
}

export default  Login;
