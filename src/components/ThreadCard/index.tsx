import { Box, Button, Image, Text } from "@chakra-ui/react"
import { IThread } from "../../types/app"
import { useState } from "react"
import { CiHeart } from "react-icons/ci"
import { TbMessage2 } from "react-icons/tb"
import { TiDeleteOutline } from "react-icons/ti";
import formattedDate from "../../Helper/formattedDate"
import { useNavigate } from "react-router-dom"
import useThread from "../../Hooks/useThread"

interface IThreadCardProps {
  thread: IThread
}

const ThreadCard: React.FC<IThreadCardProps> = ({ thread }) => {
  const _host_url = "http://localhost:5000/uploads/"
  const [like, setLike] = useState<number>(0)
  const navigate = useNavigate()

  const { handleDeleteThread } = useThread()

  return (
    <Box display={"flex"} ml={2} mb={5} gap={"30px"} borderBottom={'1px solid gray'}>
      <Box>
        <Image
          borderRadius='full'
          boxSize='40px'
          src={_host_url + thread.author?.profile.avatar}
          alt='Profile Picture'
        />
      </Box>
      <Box>
        <Box display={"flex"} gap={"3"} mb={"2"}>
          <Text fontSize={"medium"} fontWeight={"bold"}>{thread.author?.fullname}</Text>
          <Text color={"gray"}>@{thread.author?.username}</Text>
          <Text color={"gray"}>•</Text>
          <Text color={"gray"}>{formattedDate(thread.createdAt)}</Text>
        </Box>
        <Box mb={"10"}>
          <Text mb={"5"}>{thread.content}</Text>
          <Box display={'flex'} gap={'1'} flexWrap={'wrap'} w={'80%'}>
            {
              thread.image && thread.image.map((item, index) => (
                <img
                  key={index}
                  src={_host_url + item.image}
                  alt="image"
                  style={{
                    // width: "100%",
                    flex: 1,
                    height: "200px",
                    borderRadius: "20px",
                    objectFit: "cover",
                  }}
                />
              ))
            }
          </Box>
        </Box>
        <Box display={"flex"} gap={"5"}>
          <Button onClick={() => setLike(like + 1)} bg={"none"} textColor={"gray"}>
            <CiHeart size={"20"} style={{ marginRight: "10" }} />
            {thread._count.like} Likes
          </Button>
          <Button bg={"none"} textColor={"gray"} cursor={'pointer'} onClick={() => { navigate(`/detail/${thread.id}`) }}>
            <TbMessage2 size={"20"} style={{ marginRight: "10" }} />
            {thread._count.replies} Replies
          </Button>
          <Button bg={"none"} textColor={"gray"} cursor={'pointer'} onClick={() => handleDeleteThread(Number(thread.id))}>
            <TiDeleteOutline size={"20"} style={{ marginRight: "10" }} />
            Delete
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default ThreadCard