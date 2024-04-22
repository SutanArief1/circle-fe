import { Box, Button, Image, Text } from '@chakra-ui/react'
import { useEffect, useState } from "react";
import { getProfile } from "../../../lib/api/call/profile";
import { IProfile } from "../../../types/app";
import avatarDefault from "../../../assets/avatar-default.png"

const ProfileCard = () => {
  const _host_url = "http://localhost:5000/uploads/"
  const [profileById, setProfileById] = useState<IProfile>()

  async function getProfileById() {
    try {
      const token = localStorage.getItem("token")
      if (!token) return
      const res = await getProfile(token);
      setProfileById(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProfileById()
  }, [])
  return (
    <Box p={"5"} textColor={"white"} bg={"#262626"} borderRadius={"xl"} mb={"8"}>
      <Text fontWeight={"bold"} fontSize={"large"} textColor={"#d2d2d2"} mb={"5"}>My Profile</Text>
      <Box pos={"relative"} bg={"linear-gradient(to bottom, #33ccff 0%, #ffcccc 90%)"} h={"100"} w={"430"} borderRadius={"2xl"} mb={"5"}>
        {profileById?.cover &&
          <Image src={_host_url + profileById?.cover} objectFit={'cover'} h={"100"} w={"100%"} borderRadius={"2xl"} />
        }
        {
          profileById?.avatar ?
            <Image pos={"absolute"} bottom={"-50"} left={"30"} borderRadius="full" boxSize="100px" src={_host_url + profileById?.avatar} alt="" /> :
            <Image pos={"absolute"} bottom={"-50"} left={"30"} borderRadius="full" boxSize="100px" src={avatarDefault} alt="" />
        }
      </Box>
      <Box display={"flex"} justifyContent={"flex-end"}>
        <Button bg={"black"} border={"1px"} borderColor={"white"} borderRadius={"full"} textColor={"white"}>Edit Profile</Button>
      </Box>
      <Text fontSize={"x-large"} fontWeight={"bold"} mb={"3"}>&#x2728; {profileById?.user?.fullname} &#x2728;</Text>
      <Text textColor={"gray"} mb={"1"}>@{profileById?.user?.username}</Text>
      <Text mb={"2"}>{profileById?.bio}</Text>
      <Box display={"flex"} gap={"5"}>
        <Box display={"flex"} gap={"1"}>
          <Text>291</Text>
          <Text textColor={"gray"}>Following</Text>
        </Box>
        <Box display={"flex"} gap={"1"}>
          <Text>50</Text>
          <Text textColor={"gray"}>Followers</Text>
        </Box>
      </Box>
    </Box>
  )
}

export default ProfileCard