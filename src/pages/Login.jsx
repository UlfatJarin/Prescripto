import React, { useState } from 'react'
import Input from '../components/layers/Input'
import Title from '../components/layers/Title'
import Button from '../components/layers/Button'

const Login = () => {

  const [state, setState] = useState('Sign Up')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onsubmitHandler = async (event) => {
    event.preventDefault()
  }

  return (
    <form className='md:min-h-[80vh] flex items-center justify-center py-12 md:py-0 ' action="">
      <div className='w-[476px] py-12 px-[46px] rounded-[20px] border border-[#D4D4D4] '>
        <h2 className='font-semibold text-[26px] text-text2 mb-2'>{state === 'Sign Up' ? "Create Account" : "Login"}</h2>
        <p className=' text-lg text-text2'>Please {state === 'Sign Up' ? "Sign Up" : "Log in"} to book appointment</p>
        <div className='flex flex-col gap-2 mb-9 mt-6'>
          {
            state === "Sign Up" &&
            <Input onChange={(e) => setName(e.target.name)} valuei={name} id='name' type='text' placeholder='' label='Full Name' />
          }
          <Input onChange={(e) => setEmail(e.target.email)} valuei={email} id='email' type='email' placeholder='' label='Email ' />
          <Input onChange={(e) => setPassword(e.target.password)} valuei={password} id='Password' type='Password' placeholder='' label='Password' />
          <Button classname='rounded-md mt-3' btntext={state === 'Sign Up' ? "Create Account" : "Login"} />
        </div>
        {
          state === "Sign Up" ?
            <p className=' text-text2'>Already have an account? <span onClick={() => setState('Login')} className='text-primary cursor-pointer'>Login here</span> </p>
            : <p className=' text-text2'> Create an new Account? <span onClick={() => setState('Sign Up')} className='text-primary cursor-pointer'>click here </span></p>
        }
      </div>
    </form>
  )
}

export default Login