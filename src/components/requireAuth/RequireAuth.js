
import { useAuthState } from 'react-firebase-hooks/auth'
import {useLocation, useNavigate } from 'react-router-dom'
import auth from '../../firebase/firebase.init'
import Loading from '../loading/Loading'





const RequireAuth = ({ children }) => {
    let location = useLocation()
    const [user, loading, error] = useAuthState(auth)
    const navigate=useNavigate()


    if (loading) {
        <Loading></Loading>
    }
    else if (user) {
        return children
    }
    else if (!user) {

        navigate('/login', { state: { from: location }, replace: true })
        // return <Navigate to='/login' state={{ from: location }} />

    }

}
export default RequireAuth;




