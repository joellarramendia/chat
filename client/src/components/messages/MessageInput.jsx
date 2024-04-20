import React, {useState} from 'react'
import { BiSend } from "react-icons/bi";
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {

  const [message, setMessage] = useState("")
  const {loading, sendMessage} = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!message) return;
    await sendMessage(message)
    setMessage("");
  };

  return (
    <form className='px-4 my-3' onSubmit={handleSubmit}>
        <div className='w-full relative'>
            <input type='text'
            className='border text-sm rounded-lg block w-full p-2.5 border-gray-600 text-white'
            placeholder='Envia un mensaje...'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            />

            <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
                {loading ? <div className='loading loading-spinner'></div> : <BiSend/>}
            </button>
        </div>
    </form>
  )
}

export default MessageInput


{/*
import React from 'react'
import { BiSend } from "react-icons/bi";

const MessageInput = () => {
  return (
    <form className='px-4 my-3'>
        <div className='w-full relative'>
            <input type='text'
            className='border text-sm rounded-lg block w-full p-2.5 border-gray-600 text-white'
            placeholder='Envia un mensaje...'
            />

            <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
                <BiSend/>
            </button>
        </div>
    </form>
  )
}

export default MessageInput

*/}