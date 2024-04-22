import ThreadCard from "../../components/ThreadCard";
import { Box, Button, FormControl, Image, Input, Text, } from "@chakra-ui/react";
import addGalery from "../../assets/gallery-add.png";
import { useAppSelector } from "../../store";
import avatarDefault from "../../assets/avatar-default.png"
import useThread from "../../Hooks/useThread";

const Home = () => {
  const _host_url = "http://localhost:5000/uploads/"
  const auth = useAppSelector((state) => state.auth)

  const { profile, threadPost, threads, handlePostThread, setThreadPost } = useThread()

  return (
    <>
      <Box>
        <Box p={5}>
          <Text textColor={"#d2d2d2"} fontSize={"x-large"} fontWeight={"bold"}>
            Home
          </Text>
        </Box>
        <Box mb={"12"} p={5}>
          <form style={{ display: 'flex', alignItems: 'center' }}>
            {
              auth.token &&
              <Box w={'100%'} display={'flex'} alignItems={'center'} borderBottom={'1px solid gray'} pb={5}>
                <Box display={"flex"} gap={"10"} alignItems={'center'} w={'80%'}>
                  {
                    profile ?
                      <Image borderRadius="full" boxSize="40px" src={_host_url + profile.avatar} alt="" />
                      :
                      <Image borderRadius="full" boxSize="40px" src={avatarDefault} alt="" />
                  }
                  <FormControl>
                    <Input h={'60px'} id="content" name="content" value={threadPost.content} onChange={(e) => setThreadPost({ ...threadPost, content: e.target.value })}
                      textColor={"white"} variant={"unstyled"} placeholder="What is happening?!" size={"lg"} />
                  </FormControl>
                </Box>
                <Box display={"flex"} gap={"5"} alignItems={'center'}>
                  <label htmlFor="contained-button-file">
                    <img src={addGalery} width={'40px'} height={'40px'} />
                    {threadPost.image?.length} FIles photo's selected
                  </label>
                  <input accept="image/*" id="contained-button-file" multiple max={4} type="file" hidden
                    onChange={(e) => setThreadPost({ ...threadPost, image: e.target.files })}></input>
                  <Button onClick={handlePostThread} bg={"#005E0E"} w={"20"} fontSize={"large"} textColor={"gray"} borderRadius={"full"}>Post</Button>
                </Box>
              </Box>
            }
          </form>
        </Box>
        <Box textColor={"white"}>
          {threads.map((thread) => (
            <ThreadCard key={thread.id} thread={thread} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Home;
