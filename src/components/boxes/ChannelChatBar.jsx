import {AiFillQuestionCircle, AiFillPushpin, AiFillBell} from 'react-icons/ai'
import {FiAtSign} from 'react-icons/fi'
import {BiSearch} from 'react-icons/bi'
import {MdPeopleAlt} from 'react-icons/md'

const ChannelChatBar = ({title}) => {
    
  return (
        <div className='text-zinc-400 text-2xl pl-4 flex justify-between items-center border-b-2 border-stone-900 h-16 w-full bg-zinc-800'>
            <div className='flex items-center'>
                # <h2 className='text-white text-base ml-3'>{title}</h2>
            </div>
            
            <div className='flex items-center text-2xl'>
                <div className='mr-4 hover:text-yellow-500 cursor-pointer transition-colors ease-in-out duration-300 active:text-yellow-300'>
                    <AiFillBell />
                </div>
                
                <div className='mr-4 hover:text-red-500 cursor-pointer transition-colors ease-in-out duration-300 active:text-red-300'>
                    <AiFillPushpin />
                </div>
                <div className='mr-4 hover:text-zinc-300 cursor-pointer transition-colors ease-in-out duration-300 active:text-zinc-100'>
                    <MdPeopleAlt />
                </div>
                <div className='flex w-72'>
                    <div className='flex justify-between w-48 bg-stone-900 px-2 h-3/4 rounded-lg items-center mr-2'>
                        <input className='bg-transparent w-36 text-lg outline-0 border-0' placeholder='search' type="text" />
                        <div>
                            <BiSearch className='text-lg' />
                        </div>
                    </div >

                    <div className='mr-4 hover:text-blue-500 cursor-pointer transition-colors ease-in-out duration-300 active:text-blue-300'>
                        <FiAtSign />
                    </div>

                    <div className='mr-4 hover:text-green-500 cursor-pointer transition-colors ease-in-out duration-300 active:text-green-300'>
                        <AiFillQuestionCircle />
                    </div>
                </div>
                
            </div>
            
        </div>
      )
}

export default ChannelChatBar