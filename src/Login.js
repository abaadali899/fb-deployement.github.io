import { Button } from '@material-ui/core'
import  React   from 'react'
import './Login.css'
import { auth,provider  } from './firebase'
import { useStatevalue } from './StateProvider'
import {actionTypes} from './reducer'

 


function Login() {

    const [state , dispatch] = useStatevalue()
    
    const signIn = () => {
        ///signIn
        auth
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result)

            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
             // console.log(result.user)
            })
                .catch((error)=> alert(error.message))

    }
    return (
        <div className='login'>
            <div className='login__logo'>
                <img src='https://seeklogo.com/images/F/facebook-new-2019-logo-5A4671100B-seeklogo.com.png  '
                    alt='' />
                <img src=' https://crowdrx.org/wp-content/uploads/2021/08/logo-fb.png'
                    alt='' />
            </div>
            <Button type='submit' onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login;
