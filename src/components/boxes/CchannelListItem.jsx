import {MdKeyboardArrowDown} from 'react-icons/md'
import { useSelector } from 'react-redux'
import TextChannelItem from '../simpleComponents/TextChannelItem'


const ChannelListItem = ({title, id}) => {
    const chanelItems = useSelector(
        (state) => state.channel.find((channel) => channel.id === id)?.list,
    )
    
  return (
    <div className='mt-4 px-2'>
            <div 
            className='flex text-zinc-400 h-8 py-2  text-sm cursor-pointer justify-between'
            >
              <div className='flex'>
                <MdKeyboardArrowDown className='text-xl' /> {title}
              </div>
            </div>
            <div>
              <ul>
                {chanelItems?.map((channelItem) => (
                    <TextChannelItem key={channelItem.id} {...channelItem} />
                ))}
                
              </ul>
                
            </div>
          </div>
  )
}

export default ChannelListItem