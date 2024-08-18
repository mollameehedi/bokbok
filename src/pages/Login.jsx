import React, { useState } from 'react'
import {Grid,TextField,Button,Alert} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import registrationimg from "../assets/registrationimg.png"
import google from "../assets/google.png"
import Headingforreglog from '../components/headingforreglog';
import { Link, useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';




let initialValues = {
  email: "",
  password: "",
  loading: false
}

const Login = () => {

  const notify = (msg) => toast(msg);

 
  

  let [values,setValues] = useState(initialValues)
  let [error,setError] = useState("")


  let handleValues = (e)=>{
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })

  }

  let handleSubmit = ()=>{

    let {email,fullName,password}= values

    setValues({
      ...values,
      loading: true
    })
 
    
  }




  return (
   
 
     <Grid container spacing={2}>
        <Grid item xs={6}>
          <div className='regContainer'>
            <Headingforreglog className="headingreglog" title="Login to your account!"/>
            <img className='google' src={google}/>
            <div className='regInput'>
                <TextField value={values.email} onChange={handleValues} name="email" id="outlined-basic" label="Email Address" variant="outlined" />
            </div>
            {error &&   <Alert severity="error">{error.includes("auth/user-not-found")&& "User Not Found"}</Alert>}
            <div className='regInput'>
                <TextField value={values.password} onChange={handleValues} name="password" id="outlined-basic" label="Password" variant="outlined" />
            </div>
            {error &&  <Alert severity="error">{error.includes("auth/wrong-password")&& "Wrong Password"}</Alert>}
           

            <Alert severity="info" style={{marginBottom: "20px"}}>
             Don't Have An Account? <strong><Link to="/">Registraiton</Link></strong>
            </Alert>

            {values.loading
            ?
            <LoadingButton loading variant="outlined">
            Submit
          </LoadingButton>
            :
            <>
              <Button onClick={handleSubmit} variant="contained">Login to Continue</Button>
            </>
            }
  
            
          </div>
        </Grid>
        <Grid item xs={6}>
          <img className='regiimg' src={registrationimg}/>
        </Grid>
      </Grid>

  )
}

export default Login