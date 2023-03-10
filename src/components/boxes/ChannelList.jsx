import {MdKeyboardArrowDown} from 'react-icons/md'
import { useSelector } from 'react-redux'
import UserIcon from '../simpleComponents/UserIcon';
import ChannelListItem from './CchannelListItem';

const ChannelList = () => {
  const channels = useSelector((state) => state.channel);
    return (
      <div className='w-96 bg-stone-800 rounded-tl-xl relative'>
          <div className="text-white text-2xl px-2 justify-between flex items-center border-b-2 border-stone-900 h-16">
            <h1 className='ml-2 text-xl'>GameCenter</h1> 
            <div className='text-2xl cursor-pointer'>
              <MdKeyboardArrowDown />
            </div>
          </div>
          <div className='overflow-y-auto h-[50.5rem]'>
            <ul >
              {channels.map((channel) => (
                <ChannelListItem key={channel.id} {...channel} />
              ))}
            </ul>     
          </div>
          <div className=' bottom-0 bg-stone-800 w-full h-16'>
            <UserIcon />
          </div>
               
      </div>
    )
  }
  
  export default ChannelList
