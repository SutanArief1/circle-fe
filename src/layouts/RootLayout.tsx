import Sidebar from '../components/Sidebar'
import { Box } from '@chakra-ui/react'
// import { getProfile } from '../lib/api/call/profile'
// import { useAppDispatch, useAppSelector } from '../store'
// import { SET_LOGIN } from '../store/slice/auth'
// import { useEffect } from 'react'
import Profile from '../pages/Profile'
import { Outlet } from 'react-router-dom'

export const RootLayout = () => {
  // const dispatch = useAppDispatch()

  // const checkToken = async () => {
  //   try {
  //     const token = localStorage.getItem("token")
  //     if (!token) return
  //     const res = await getProfile(token)
  //     dispatch(SET_LOGIN({ user: res.data.data, token }))
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   checkToken()
  // }, [])

  return (
    <Box display={"flex"} bg={'#1d1d1d'} h={'100vh'} overflowY={'hidden'}>
      <Box w={'20%'}><Sidebar /></Box>
      <Box w={'55%'} overflowY={'auto'} border={'1px solid gray'} css={{ scrollbarWidth: 'none' }}><Outlet /></Box>
      <Box w={'25%'}><Profile /></Box>
    </Box>
  )
}

export default RootLayout