import { useSelector } from 'react-redux';
import UserMember from './UserMember';

const UsersBlock = ({title, id}) => {
    
    const userMembers = useSelector(
        (state) => state.users.find((user) => user.id === id)?.user,
    )
    let style = ''
    if (id ===1) {
      style = 'text-green-400 m-2';
    }
    else if (id===2) {
      style = 'text-amber-400 m-2'
    }
    else if (id===3) {
      style = 'text-blue-400 m-2'
    }
    else if (id===3) {
      style = 'text-blue-400 m-2'
    }
    else if (id===4) {
      style = 'text-zinc-500 m-2'
    }
  return (
    <div className={style}>
      <div className='mb-3 text-zinc-400'>{title} - {userMembers.length}</div>
        <ul>
                {userMembers.map((user) => (
                    <UserMember key={user.id} {...user} />
                ))}
        </ul>
    </div>
  )
}

export default UsersBlock