import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import React, { useState } from 'react'
import { forget } from '../../../firebase/firebasemethod'
import useToast from '@chakra-ui/react'

const Forget = () => {
    const [email, setEmail] = useState('')

    const forgetPassword = ()=>{
        forget()
    }


  return (
    <div>
      <TextField lable='Enter Email' onChange={e=>setEmail(e.target.value)}/>
      <Button onClick={forgetPassword}>Reset Password</Button>
    </div>
  )
}

export default Forget
