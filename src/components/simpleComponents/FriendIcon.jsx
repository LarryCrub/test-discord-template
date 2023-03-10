import {BsEmojiSmileUpsideDown} from 'react-icons/bs'
const FriendIcon = () => {
  return (
    <div className='w-14 h-14 mb-2 rounded-full cursor-pointer  bg-violet-500
    hover:rounded-2xl transition-all ease-in-out duration-500'>
      <div className="w-14 h-14 flex justify-center items-center text-3xl text-stone-800">
        <BsEmojiSmileUpsideDown />
      </div>
      
    </div>
    
  )
}

export default FriendIcon