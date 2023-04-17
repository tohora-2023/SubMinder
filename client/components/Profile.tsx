import { fetchUserInfo } from "../actions/profiles";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";


export default function Profile(){
  const{
    data: userProfile,
    error,
    isLoading
} = useAppSelector((state) => state.userProfile)
const dispatch = useAppDispatch()
const {username} = useParams()

useEffect(()=> {
  if (username){
    dispatch(fetchUserInfo(username))
  }

},  [dispatch, username])

const navigate = useNavigate()

if(isLoading) return <>Loading . . .</>
if(error) return <>An error occurred</>
if(!userProfile) return <>Cannot find user</>

}

return (
  <>
  
  
  
  
  
  
  </>

)