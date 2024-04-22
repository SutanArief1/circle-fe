import { useAppDispatch, useAppSelector } from '../../store'
import { Box, Button, Image, Spacer, Text } from '@chakra-ui/react'
import { RiHome5Fill, RiUserSearchLine, RiHeart3Line } from "react-icons/ri"
import { FaRegUserCircle } from "react-icons/fa"
import { TbLogout2 } from "react-icons/tb"
import logo from '../../assets/circle.png'
import { Link } from 'react-router-dom'
import { SET_LOGOUT } from '../../store/slice/auth'

const Sidebar = () => {
  const auth = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()

  return !auth.user ?
    <Box mt={'20%'} px={5}>
      <Link to={'/login'}><Button bg={"#04A51E"} textColor={'white'} w={'80%'}>Login</Button></Link>
    </Box>
    : (
      <Box px={"8"} display={"flex"} flexDirection={"column"}>
        <Box>
          <Box py={"10"}>
            <Image src={logo} />
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={"5"}>
            <Box display={"flex"} flexDirection={"row"} alignItems={'center'} textColor={'white'} gap={'2'} >
              <Link to={"/"} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <RiHome5Fill />
                <Text textAlign={'left'} >Home</Text>
              </Link>
            </Box>
            <Box display={"flex"} flexDirection={"row"} alignItems={'center'} textColor={'white'} gap={'2'} >
              <Link to={"/search"} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <RiUserSearchLine />
                <Text textAlign={'left'} >Search</Text>
              </Link>
            </Box>
            <Box display={"flex"} flexDirection={"row"} alignItems={'center'} textColor={'white'} gap={'2'} >
              <Link to={"/follow"} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <RiHeart3Line />
                <Text textAlign={'left'} >Follow</Text>
              </Link>
            </Box>
            <Box display={"flex"} flexDirection={"row"} alignItems={'center'} textColor={'white'} gap={'2'} >
              <Link to={"/profile"} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <FaRegUserCircle />
                <Text textAlign={'left'} >Profile</Text>
              </Link>
            </Box>
            <Button textColor={'white'} bg={"#04A51E"} borderRadius={"3xl"}>Create Post</Button>
          </Box>
        </Box>
        <Button onClick={() => { dispatch(SET_LOGOUT()) }} mt={50} bg={"#04A51E"} display={"flex"} flexDirection={"row"} alignItems={'center'} textColor={'white'} gap={'2'}>
          <TbLogout2 />
          <Text textColor={"white"}>Logout</Text>
        </Button>
      </Box>
    )
}

export default Sidebar