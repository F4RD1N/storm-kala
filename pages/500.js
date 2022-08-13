import React, {useEffect} from 'react'

import { useRouter } from 'next/router'

const ServerError = () => {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.replace('/')
        }, 2000);
    }, [])
  return (
   <>
    <center>مشکلی در ارتباط با سرور رخ داد!</center>
    <br />
    <center>به صفحه اصلی هدایت میشوید ...</center>
    
   </>
  )
}

export default ServerError