import './privateRoute.css'
import { useAppSelector } from '../../types/hooks/hooks'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const PrivateRoute = () =>{
    const location = useLocation();
    const isLoggedIn = useAppSelector(state => state.login.isLoggedIn)
    const token = useAppSelector(state => state.login.token)
    
    return (isLoggedIn && token) ? <Outlet/> : <Navigate to="/login" state={{ from: location}}/>
}

export default PrivateRoute;
