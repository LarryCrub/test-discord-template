import {BsPlusCircleFill, BsGiftFill, BsFillEmojiSmileFill} from 'react-icons/bs'
import {HiGif} from 'react-icons/hi2'


const Chat = ({title}) => {
    const placeholder = `Message #${title}`
  return (
    <div className='border-t border-zinc-600 mx-10 h-2 pt-4 px-2 text-zinc-400'>
                <div className='bg-zinc-700 h-16 w-full  rounded-xl flex justify-between items-center'>
                    <div className='flex items-center'>
                        <div className='w-16 h-16 flex items-center justify-center text-3xl '>
                            <BsPlusCircleFill />
                        </div>
                        <div className='h-12 border-l border-zinc-500 flex items-center w-4/6'> 
                        <input type="text" className='ml-2 bg-transparent 0 outline-0 h-12 text-lg w-full placeholder:text-zinc-400'
                         placeholder={placeholder} />
                        </div>
                    </div>
                    <div className='flex items-center text-2xl'>
                        <div className='mr-4 hover:text-red-400 transition-colors ease-in-out duration-500 cursor-pointer active:text-red-500'><BsGiftFill /></div>
                        <div className='mr-4 hover:text-green-400 transition-colors ease-in-out duration-500 cursor-pointer active:text-green-500'><HiGif /></div>
                        <div className='mr-4 hover:text-yellow-400 transition-colors ease-in-out duration-500 cursor-pointer active:text-yellow-500'><BsFillEmojiSmileFill /></div>
                        
                    </div>
                </div>
            </div>
  )
}

export default Chat