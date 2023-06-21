
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom'
import auth from '../../firebase/firebase.init'
import Loading from '../loading/Loading'





const RequireAuth = ({ children }) => {
    let location = useLocation()
    const [user, loading, error] = useAuthState(auth)


    if (loading) {
        <Loading></Loading>
    }
    else if (user) {
        return children
    }
    else if (!user) {

        return <Navigate to='/login' state={{ from: location }} />

    }

}




