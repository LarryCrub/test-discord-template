import { Link } from "react-router-dom"

const ChannelIcon = ({title, link}) => {
  return (
    <div className='w-14 h-14 mb-2 bg-inherit rounded-2xl cursor-pointer flex justify-center items-center
    '>
        <Link to='/server'>
          <img className="rounded-2xl hover:rounded-lg" alt={title} src={link}/>
        </Link>
    </div>
  )
}

export default ChannelIcon