import {BsFillExclamationCircleFill} from 'react-icons/bs';
import {FiUserPlus, FiSmartphone, FiTwitter} from 'react-icons/fi'

const ChannelWelcome = () => {
  return (
    <div className='ml-auto mr-auto mt-8 w-1/2 text-base text-zinc-500 h-[43.5rem]'>
                <div className='h-16 w-full flex items-center mb-8'>
                    <div className='w-16 h-16 mr-6 flex items-center justify-center text-5xl text-blue-400 opacity-75'><BsFillExclamationCircleFill /></div>
                    <div className='w-3/4 text-start'><b className='text-zinc-400'>Learn about Discord</b> at your ownpace by exploring the floating quest indicators.</div>
                </div>
                <div className='h-16 w-full flex items-center mb-8'>
                    <div className='w-16 h-16 mr-6 flex items-center justify-center text-5xl text-blue-400 opacity-75'><FiUserPlus /></div>
                    <div className='w-3/4 text-start'><b className='text-zinc-400'>Invite your friends</b> to this server by clicking on a <a className='text-blue-400' href='https://discord.gg/' rel='noreferrer' target="_blank">share button</a> when you're ready.</div>
                </div>
                <div className='h-16 w-full flex items-center mb-8'>
                    <div className='w-16 h-16 mr-6 flex items-center justify-center text-5xl text-blue-400 opacity-75'><FiSmartphone /></div>
                    <div className='w-3/4 text-start'><b className='text-zinc-400'>Stay connected</b>  to your server from <a className='text-blue-400' href='https://https://twitter.com/discord/' rel='noreferrer' target="_blank">your smartphone</a>  and even use Discord while console gaming.</div>
                </div>
                <div className='h-16 w-full flex items-center mb-8'>
                    <div className='w-16 h-16 mr-6 flex items-center justify-center text-5xl text-blue-400 opacity-75'><FiTwitter /></div>
                    <div className='w-3/4 text-start'><b className='text-zinc-400'>React us</b> via 
                    <a className='text-blue-400' href='https://https://twitter.com/discord/' rel='noreferrer' target="_blank"> our help desk </a>
                      or on Twitter 
                     <a className='text-blue-400' href='https://https://twitter.com/discord/' rel='noreferrer' target="_blank">@discordapp </a>
                       if you have any questions or need help.</div>
                </div>
                
            </div>
  )
}

export default ChannelWelcome