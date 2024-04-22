import { Box, Button, Image, Spacer, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa"
import dumbwaysLogo from '../../assets/dumbways.png'
import { useAppSelector } from "../../store";
import ProfileCard from "./component/ProfileCard";

const Profile = () => {
  const auth = useAppSelector((state) => state.auth)

  return (
    <>
      {
        auth.token ?
          <>
            <ProfileCard />
            <Box p={"5"} textColor={"white"} bg={"#262626"} borderRadius={"xl"} mb={"8"}>
              <Text fontWeight={"bold"} fontSize={"large"} textColor={"#d2d2d2"} mb={"5"}>
                Suggested for you
              </Text>
              <Box display={"flex"} flexDirection={"column"} gap={"3"}>
                <Box display={"flex"} alignItems={"center"}>
                  <Box display={"flex"} gap={"5"}>
                    <Box>
                      <Image borderRadius="full" boxSize="50px" src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
                    </Box>
                    <Box>
                      <Text>Fadjar Firdaus</Text>
                      <Text textColor={"gray"}>@fadjarfirdaus</Text>
                    </Box>
                  </Box>
                  <Spacer />
                  <Box>
                    <Button bg={"black"} border={"1px"} borderColor={"white"} borderRadius={"full"} textColor={"white"}>
                      Follow
                    </Button>
                  </Box>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                  <Box display={"flex"} gap={"5"}>
                    <Box>
                      <Image borderRadius="full" boxSize="50px" src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
                    </Box>
                    <Box>
                      <Text>Fadjar Firdaus</Text>
                      <Text textColor={"gray"}>@fadjarfirdaus</Text>
                    </Box>
                  </Box>
                  <Spacer />
                  <Box>
                    <Button bg={"black"} border={"1px"} borderColor={"white"} borderRadius={"full"} textColor={"white"}>
                      Follow
                    </Button>
                  </Box>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                  <Box display={"flex"} gap={"5"}>
                    <Box>
                      <Image
                        borderRadius="full"
                        boxSize="50px"
                        src="https://bit.ly/dan-abramov"
                        alt="Dan Abramov"
                      />
                    </Box>
                    <Box>
                      <Text>Fadjar Firdaus</Text>
                      <Text textColor={"gray"}>@fadjarfirdaus</Text>
                    </Box>
                  </Box>
                  <Spacer />
                  <Box>
                    <Button
                      bg={"black"}
                      border={"1px"}
                      borderColor={"white"}
                      borderRadius={"full"}
                      textColor={"white"}
                    >
                      Follow
                    </Button>
                  </Box>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                  <Box display={"flex"} gap={"5"}>
                    <Box>
                      <Image
                        borderRadius="full"
                        boxSize="50px"
                        src="https://bit.ly/dan-abramov"
                        alt="Dan Abramov"
                      />
                    </Box>
                    <Box>
                      <Text>Fadjar Firdaus</Text>
                      <Text textColor={"gray"}>@fadjarfirdaus</Text>
                    </Box>
                  </Box>
                  <Spacer />
                  <Box>
                    <Button
                      bg={"black"}
                      border={"1px"}
                      borderColor={"white"}
                      borderRadius={"full"}
                      textColor={"white"}
                    >
                      Follow
                    </Button>
                  </Box>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                  <Box display={"flex"} gap={"5"}>
                    <Box>
                      <Image
                        borderRadius="full"
                        boxSize="50px"
                        src="https://bit.ly/dan-abramov"
                        alt="Dan Abramov"
                      />
                    </Box>
                    <Box>
                      <Text>Fadjar Firdaus</Text>
                      <Text textColor={"gray"}>@fadjarfirdaus</Text>
                    </Box>
                  </Box>
                  <Spacer />
                  <Box>
                    <Button
                      bg={"black"}
                      border={"1px"}
                      borderColor={"white"}
                      borderRadius={"full"}
                      textColor={"white"}
                    >
                      Follow
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box p={"5"} textColor={"white"} bg={"#262626"} borderRadius={"xl"} mb={"8"}>
              <Box display={"flex"} gap={"2"} mb={"2"}>
                <Text>Developed by Sutan Arief</Text>
                <Text color={"gray"}>•</Text>
                <Box display={"flex"} gap={"3"} alignItems={"center"}>
                  <Text>
                    <FaGithub color="gray" />
                  </Text>
                  <Text>
                    <FaLinkedin color="gray" />
                  </Text>
                  <Text>
                    <FaFacebook color="gray" />
                  </Text>
                  <Text>
                    <FaInstagram color="gray" />
                  </Text>
                </Box>
              </Box>
              <Box display={"flex"} gap={"2"}>
                <Box textColor={"gray"} fontSize={"small"} display={"flex"} gap={"2"}>
                  <Box display={"flex"} gap={"2"} alignItems={"center"}>
                    <Text>Powered by </Text>
                    <Image src={dumbwaysLogo} boxSize={"20px"} />
                    <Text>DumbWays Indonesia</Text>
                  </Box>
                  <Text>•</Text>
                  <Text>#1CodingBootcamp</Text>
                </Box>
              </Box>
            </Box>
          </> :
          <>
            <Box p={"5"} textColor={"white"} bg={"#262626"} borderRadius={"xl"} mb={"8"}>
              <Box display={"flex"} gap={"2"} mb={"2"}>
                <Text>Developed by Sutan Arief</Text>
                <Text color={"gray"}>•</Text>
                <Box display={"flex"} gap={"3"} alignItems={"center"}>
                  <Text>
                    <FaGithub color="gray" />
                  </Text>
                  <Text>
                    <FaLinkedin color="gray" />
                  </Text>
                  <Text>
                    <FaFacebook color="gray" />
                  </Text>
                  <Text>
                    <FaInstagram color="gray" />
                  </Text>
                </Box>
              </Box>
              <Box display={"flex"} gap={"2"}>
                <Box textColor={"gray"} fontSize={"small"} display={"flex"} gap={"2"}>
                  <Box display={"flex"} gap={"2"} alignItems={"center"}>
                    <Text>Powered by </Text>
                    <Image src={dumbwaysLogo} boxSize={"20px"} />
                    <Text>DumbWays Indonesia</Text>
                  </Box>
                  <Text>•</Text>
                  <Text>#1CodingBootcamp</Text>
                </Box>
              </Box>
            </Box>
          </>
      }
    </>
  );
};

export default Profile;
