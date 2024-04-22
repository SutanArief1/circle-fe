import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getReplies, getThreadById, postThreads } from "../../lib/api/call/thread"
import { IProfile, IThread } from "../../types/app"
import { Box, Button, FormControl, Image, Input, Text } from "@chakra-ui/react"
import formattedDate from "../../Helper/formattedDate"
import { CiHeart } from "react-icons/ci"
import { TbMessage2 } from "react-icons/tb"
import addGalery from "../../assets/gallery-add.png";
import { getProfile } from "../../lib/api/call/profile"
import ThreadCard from "../../components/ThreadCard"
import { FaArrowLeft } from "react-icons/fa6";
import avatarDefault from "../../assets/avatar-default.png"

const DetailThread = () => {
  const { threadId } = useParams()
  const _host_url = "http://localhost:5000/uploads/"

  const [like, setLike] = useState<number>(0)
  const [threadPost, setThreadPost] = useState<{ content: string; image: FileList | null; threadId: number }>({ content: "", image: null, threadId: 0 });
  const [profile, setProfile] = useState<IProfile>()
  const [replies, setReplies] = useState<IThread[]>([])

  const [threadDetail, setThreadDetail] = useState<IThread>({
    userId: 0,
    content: "",
    image: [],
    id: 0,
    _count: { like: 0, replies: 0 },
    createdAt: new Date
  })

  async function getProfileById() {
    try {
      const token = localStorage.getItem("token")
      if (!token) return
      const res = await getProfile(token);
      setProfile(res.data.data.avatar);
    } catch (error) {
      console.log(error);
    }
  }

  const getThreadDetail = async () => {
    try {
      const res = await getThreadById(Number(threadId))
      const resReplies = await getReplies(Number(threadId))
      setThreadDetail(res.data.data)
      setReplies(resReplies.data.data)
    } catch (error) {
      console.log(error);
    }
  }

  const handlePostThread = async (e: React.MouseEvent) => {
    try {
      e.preventDefault();

      if (threadId) {
        threadPost.threadId = Number(threadId)
      }

      const res = await postThreads(threadPost);
      await getThreadDetail()
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getThreadDetail()
    getProfileById()
  }, [threadId])
  return (
    <>
      <Box display={"flex"} flexDirection={'column'} bg={'#1d1d1d'} h={'100vh'} overflowY={'auto'}>
        <Box p={10} mb={10}>
          <Link to={"/"} style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <FaArrowLeft style={{ marginRight: "5px" }} />
            <Text>Status</Text>
          </Link>
        </Box>
        <Box display={"flex"} ml={2} mb={5} gap={"30px"} borderBottom={'1px solid gray'}>
          <Box>
            <Image
              borderRadius='full'
              boxSize='40px'
              src={_host_url + threadDetail.author?.profile.avatar}
              alt='Profile Picture'
            />
          </Box>
          <Box w={'70%'}>
            <Box display={"flex"} gap={"3"} mb={"2"}>
              <Text fontSize={"medium"} fontWeight={"bold"}>{threadDetail.author?.fullname}</Text>
              <Text color={"gray"}>@{threadDetail.author?.username}</Text>
              <Text color={"gray"}>•</Text>
              <Text color={"gray"}>{formattedDate(threadDetail.createdAt)}</Text>
            </Box>
            <Box mb={"10"}>
              <Text mb={"5"}>{threadDetail.content}</Text>
              <Box display={'flex'} gap={'1'} flexWrap={'wrap'} w={'50%'}>
                {
                  threadDetail.image && threadDetail.image.map((item, index) => (
                    <img
                      key={index}
                      src={_host_url + item.image}
                      alt="image"
                      style={{
                        flex: 1,
                        height: '300px',
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
                {threadDetail._count.like} Likes
              </Button>
              <Button bg={"none"} textColor={"gray"}>
                <TbMessage2 size={"20"} style={{ marginRight: "10" }} />
                {threadDetail._count.replies} Replies
              </Button>
            </Box>
          </Box>
        </Box>
        <Box mb={"12"} p={5}>
          <form style={{ display: 'flex', alignItems: 'center' }}>
            <Box w={'100%'} display={'flex'} alignItems={'center'} borderBottom={'1px solid gray'} pb={5}>
              <Box display={"flex"} gap={"10"} alignItems={'center'} w={'80%'}>
                {
                  profile ?
                    <Image borderRadius="full" boxSize="40px" src={_host_url + profile} alt="" /> :
                    <Image borderRadius="full" boxSize="40px" src={avatarDefault} alt="" />

                }
                <FormControl>
                  <Input h={'60px'} id="content" name="content" value={threadPost.content} onChange={(e) => setThreadPost({ ...threadPost, content: e.target.value })}
                    textColor={"white"} variant={"unstyled"} placeholder="Type your reply!" size={"lg"} />
                </FormControl>
              </Box>
              <Box display={"flex"} gap={"5"} alignItems={'center'}>
                <label htmlFor="contained-button-file">
                  <img src={addGalery} width={'40px'} height={'40px'} />
                </label>
                <input accept="image/*" id="contained-button-file" multiple max={4} type="file" hidden
                  onChange={(e) => setThreadPost({ ...threadPost, image: e.target.files })}></input>
                <Button onClick={handlePostThread} bg={"#005E0E"} w={"20"} fontSize={"large"} textColor={"gray"} borderRadius={"full"}>Post</Button>
              </Box>
            </Box>
          </form>
        </Box>
        <Box>
          {
            replies.map((reply) => (
              <ThreadCard thread={reply} key={reply.id} />
            ))
          }
        </Box>
      </Box>
    </>
  )
}

export default DetailThread