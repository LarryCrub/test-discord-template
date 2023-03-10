import { useSelector } from 'react-redux';
import ChannelWelcome from '../simpleComponents/ChannelWelcome';
import Chat from '../simpleComponents/Chat';
import UsersBlock from '../simpleComponents/UsersBlock';



const ServerChat = ({title}) => {
    const users = useSelector((state) => state.users)
  return (
    
    <div className="bg-zinc-800 h-[54.5rem] flex justify-between ">
        <div className="w-4/5 text-center items-center justify-items-center relative ">
            <h2 className='text-blue-500 opacity-75 font-bold text-2xl mt-4'>WELCOME TO THE SERVER, LARRYCRUB</h2>
            <ChannelWelcome />
            <Chat title={title} />
        </div>

        <div className="bg-stone-800 h-full w-1/5 overflow-y-auto px-2">
            <ul>
                {users.map((user) => (
                    <UsersBlock key={user.id} {...user} />
                ))}
            </ul>
            
        </div>

    </div>
  )
}

export default ServerChat