import React, {useEffect} from 'react'

import { useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.replace('/')
        }, 2000);
    }, [])
  return (
   <>
    <center>صفحه مورد نظر یافت نشد!</center>
    <br />
    <center>به صفحه اصلی هدایت میشوید ...</center>
    
   </>
  )
}

export default NotFound