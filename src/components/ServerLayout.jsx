import ChannelChatBar from "./boxes/ChannelChatBar"
import ChannelList from "./boxes/ChannelList"
import LeftNavBar from "./LeftNavBar"
import TopPanel from "./TopPanel"
import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import ServerChat from "./boxes/ServerChat";

const ServerLayout = () => {
  const { id } = useParams();
  const allChannelItems = useSelector((state) => state.channel.reduce((acc, chanelItem) =>  [...acc, ...chanelItem.list], []))
  const Item = allChannelItems.find((list) => list.id === id)
  
  return Item ? (
    <div className="bg-stone-900 h-screen">
        <TopPanel />
        <div className="flex absolute w-full"> 
            <LeftNavBar />
            <ChannelList />
            <div className="w-full">
              <ChannelChatBar title={Item.text} /> 
              <ServerChat title={Item.text} />
            </div>
              
        </div>
        
    </div>
  ) : (<Navigate to='/wq' />)
}

export default ServerLayout