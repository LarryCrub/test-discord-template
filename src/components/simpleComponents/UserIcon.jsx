import {FaMicrophone, FaHeadphonesAlt} from 'react-icons/fa'
import {IoMdSettings} from 'react-icons/io'
import {GiSadCrab} from 'react-icons/gi'

const UserIcon = () => {
  return (
    <div className='flex justify-between items-center p-2'>
        <div className='flex'>
            <div className='bg-green-300 w-12 h-12 rounded-full mr-4 flex justify-center items-center text-stone-800 text-3xl cursor-pointer
            hover:bg-green-500 transition-colors ease-in-out duration-500
            active:bg-green-600'>
              <GiSadCrab />
            </div>
            <div>
                <h3 className='text-lg text-white'>LARRYCRUB</h3>
                <h4 className='text-sm text-zinc-400'>#8964</h4>
            </div>
        </div>
        
        <div className='flex text-zinc-400 text-xl space-x-3'>
            <button className='hover:text-red-500 cursor-pointer transition-colors ease-in-out duration-300 active:text-red-300'> <FaMicrophone /> </button>
            <button className='hover:text-yellow-500 cursor-pointer transition-colors ease-in-out duration-300 active:text-yellow-300'> <FaHeadphonesAlt /> </button>
            <button className='hover:text-zinc-300 cursor-pointer transition-colors ease-in-out duration-300 active:text-zinc-100'> <IoMdSettings /> </button>
        </div>
    </div>
  )
}

export default UserIcon