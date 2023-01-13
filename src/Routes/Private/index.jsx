import { useState, useEffect } from 'react';
import { auth } from '../../services/firebaseConnection'
import { onAuthStateChanged } from 'firebase/auth'
import { LoadingPage } from './styles'
import { Navigate, useNavigate } from 'react-router-dom';
import { IChildren } from '../../util/types';

export const Private = (children ) => {
    const [loading, setLoading] = useState(true);
    const [signed, setSigned] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        async function checkedLogin (){
            const unsub = onAuthStateChanged(auth, (user) => {
                if(user){
                    const userData ={
                        uid:user.uid,
                        email:user.email
                    }
                    localStorage.setItem("@detailUser", JSON.stringify(userData))
                    setLoading(false)
                    setSigned(true)
                    return <Navigate to="/"/>
                }else{
                    setLoading(false)
                    setSigned(false)
                }

            })
        }
        checkedLogin()
    },[])

    if(loading){
        return(
            <>
                <LoadingPage>
                    <h1>CARREGANDO....</h1>
                </LoadingPage>
            </>
        )
    }

    if(!signed){
        return <Navigate to="/login"/>
    }
    return children;
}
