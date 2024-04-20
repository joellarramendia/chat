import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

const SignUp = () => {

  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  })

  const {loading, signup} = useSignup()

  const handleCheckboxChange = (gender) => {
    setInputs({...inputs, gender})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(inputs)
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3x1 font-semibold text-center text-gray-300'>
          Sign Up <span className='text-green-500'>ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Nombre Completo</span>
            </label>
            <input
              type='text'
              placeholder='Ingresa tu nombre completo'
              className='w-full input input-bordered h-10'
              value={inputs.fullName}
              onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Nombre de Usuario</span>
            </label>
            <input
              type='text'
              placeholder='Ingresa tu nombre de usuario'
              className='w-full input input-bordered h-10'
              value={inputs.username}
              onChange={(e) => setInputs({...inputs, username: e.target.value})}
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Contraseña</span>
            </label>
            <input
              type='password'
              placeholder='Ingresa tu contraseña'
              className='w-full input input-bordered h-10'
              value={inputs.password}
              onChange={(e) => setInputs({...inputs, password: e.target.value})}
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Confirmar Contraseña</span>
            </label>
            <input
              type='password'
              placeholder='Confirma tu contraseña'
              className='w-full input input-bordered h-10'
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
            />
          </div>

          <GenderCheckbox onCheckboxChange = {handleCheckboxChange} selectedGender = {inputs.gender} />

          <Link to='/login' className='text-sm hover:text-green-500 hover:underline mt-2 inline-block'>
            Ya tengo una cuenta
          </Link>

          <div>
            <button className='btn btn-block btn-sm mt-2 border border-slate-700'
              disabled={loading}
            >{loading ? <span className='loading loading-spinner'></span> : 'Sign Up'}</button>
          </div>
        </form>
      </div>
      
    </div>
  )
}

export default SignUp


{/*
import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3x1 font-semibold text-center text-gray-300'>
          Sign Up <span className='text-green-500'>ChatApp</span>
        </h1>

        <form>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Nombre Completo</span>
            </label>
            <input
              type='text'
              placeholder='Ingresa tu nombre completo'
              className='w-full input input-bordered h-10'
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Nombre de Usuario</span>
            </label>
            <input
              type='text'
              placeholder='Ingresa tu nombre de usuario'
              className='w-full input input-bordered h-10'
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Contraseña</span>
            </label>
            <input
              type='password'
              placeholder='Ingresa tu contraseña'
              className='w-full input input-bordered h-10'
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Confirmar Contraseña</span>
            </label>
            <input
              type='password'
              placeholder='Confirma tu contraseña'
              className='w-full input input-bordered h-10'
            />
          </div>

          <GenderCheckbox />

          <a href='#' className='text-sm hover:text-green-500 hover:underline mt-2 inline-block'>
            Ya tengo una cuenta
          </a>

          <div>
            <button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
          </div>
        </form>
      </div>
      
    </div>
  )
}

export default SignUp

*/}
