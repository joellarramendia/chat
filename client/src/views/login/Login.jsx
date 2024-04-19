import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3x1 font-semibold text-center text-gray-300'>
        Login
        <span className='text-green-500'> ChatApp</span>
        </h1>

        <form>
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
          <a href='#' className='text-sm hover:text-green-500 hover:underline mt-2 inline-block'>
            ¿No tienes una cuenta?
          </a>

          <div>
            <button className='btn btn-block btn-sm mt-2  border border-slate-700'>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login

{/*
import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3x1 font-semibold text-center text-gray-300'>
        Login
        <span className='text-green-500'> ChatApp</span>
        </h1>

        <form>
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
          <a href='#' className='text-sm hover:text-green-500 hover:underline mt-2 inline-block'>
            ¿No tienes una cuenta?
          </a>

          <div>
            <button className='btn btn-block btn-sm mt-2  border border-slate-700'>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login

*/}
