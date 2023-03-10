import FriendIcon from "./simpleComponents/FriendIcon"
import ChannelIcon from "./simpleComponents/ChannelIcon"
import {BiPlus, BiSearch} from 'react-icons/bi'
import {FaDiscord} from 'react-icons/fa'

const LeftNavBar = () => {
  const friends = [{text: '4'},]
  const channels = [
    {title:'Вася',
    link: 'https://static.nitrado.net/cdn/gameicons/256/dayzps.jpg',}
  ]
  return (
    
    <div className="w-20 justify-items-center items-center px-2 h-full">
      <div className='w-14 h-14 mb-2 rounded-full cursor-pointer flex justify-center items-center bg-stone-800 text-white text-4xl'>
        <FaDiscord />
      </div>
      <ul>
        {friends?.map((friend) => (
          <FriendIcon key={friend.text} {...friend}/>
        ))}
      </ul>
      
      <div className="w-14 my-2 border-stone-700 rounded-sm border"></div>
      <ul>
        {channels?.map((channel) =>(
          <ChannelIcon key={channel.title} {...channel}/>
        ))}
      </ul>

      <div className='w-14 h-14 mb-2 rounded-full cursor-pointer flex justify-center items-center bg-stone-800 text-green-400
        hover:text-stone-800 hover:bg-green-400 transition-colors duration-500 ease-in-out
        active:text-white active:bg-green-500
      '>
        <BiPlus className="text-4xl" />
      </div>

      <div className='w-14 h-14 mb-2 rounded-full cursor-pointer flex justify-center items-center bg-stone-800 text-green-400
      hover:text-stone-800 hover:bg-green-400 transition-colors duration-500 ease-in-out
      active:text-white active:bg-green-500
      '>
        <BiSearch className="text-2xl" />
      </div>
      
    </div>
  )
}

export default LeftNavBar