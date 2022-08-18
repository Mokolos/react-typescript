import './connected.css'
import { useAppDispatch } from '../../types/hooks/hooks'
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../redux/reducers/login/loginSlice';

export default function Connected() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const userLogOut = () =>{
    dispatch(logOut())
    navigate("/")
  }

  return (
    <div>
      <button onClick={userLogOut} >
        Log out
      </button>
      <h1>
        connected
      </h1>
    </div>
  )
}