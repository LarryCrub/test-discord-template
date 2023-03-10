import {FaUserPlus} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const TextChannelItem = ({text, id}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${id}`)
  }
  return (
    <div className='group/item flex text-zinc-400 h-10 py-2 px-2 mx-2 text-sm cursor-pointer items-center justify-between rounded-lg 
    hover:bg-zinc-700 transition-colors ease-in-out duration-500 active:bg-zinc-500'
    onClick={handleClick}>
        <div className='flex text-lg'>
           # <h2 className='text-white text-base ml-3'>{text}</h2>
        </div>
        <div className='opacity-0 text-xl group-hover/item:opacity-100 transition-opacity ease-in-out duration-500'>
            <FaUserPlus />
        </div>
    </div>
  )
}

export default TextChannelItem