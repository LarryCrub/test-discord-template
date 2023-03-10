import React from 'react'

const UserMember = ({text, comment, id}) => {
  
  return (
    <div className='flex mb-2 items-center h-12 cursor-pointer px-3 py-1 rounded-xl 
    hover:bg-zinc-700 transition-colors ease-in-out duration-500  active:bg-zinc-600'>
      <div className=' bg-green-400 w-8 h-8 mr-2 rounded-full'></div>
      <div className='items-center h-10'>
        <div className='text-base'>{text}</div><div className='text-xs text-zinc-400'>{comment}</div>
        
      </div>
        
    </div>
  )
}

export default UserMember