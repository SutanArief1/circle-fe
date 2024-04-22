import { Link, useNavigate } from "react-router-dom";
import { Box, Button, FormControl, Image, Input, Text } from "@chakra-ui/react";
import logo from "../../assets/circle.png";
import { useState } from "react";
import { loginAPI } from "../../lib/api/call/user";
import { getProfile } from "../../lib/api/call/profile";
import { useAppDispatch } from "../../store";
import { SET_LOGIN } from "../../store/slice/auth";

const Login: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [formInput, setFormInput] = useState<{
    username: string;
    password: string;
  }>({
    username: "",
    password: "",
  });
  
  const handleLogin = async (e: React.FormEvent) => {    
    e.preventDefault();
    try {
      const res = await loginAPI(formInput)
      console.log(res.data);
      const token = res.data.data
      localStorage.setItem('token', token)
      const resProfile = await getProfile(token)
      
      dispatch(SET_LOGIN({user : resProfile.data.data, token}))
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box bg={"black"} p={10} display={"flex"} justifyContent={"center"} alignItems={"center"} h={"100vh"}>
      <Box>
        <Image w={200} src={logo} alt="circle-logo" mb={3} />
        <Text textColor={"white"} fontSize={"x-large"} fontWeight={"bold"} mb={3}>Login to Circle</Text>
        <form onSubmit={handleLogin}>
        <FormControl w={400}>
            <Input id="username" name="username" type="username" placeholder="Email/Username" textColor={"white"} mb={3}
            value={formInput.username} onChange={(e) => setFormInput({ ...formInput, username: e.target.value })}/>
            <Input id="password" name="password" type="password" placeholder="Password" textColor={"white"} mb={3}
            value={formInput.password} onChange={(e) => setFormInput({ ...formInput, password: e.target.value })}/>
            <Text textAlign={"end"} textColor={"white"} fontSize={"small"} mb={3}>Forgot password?</Text>
            <Button type="submit" bg={"#04A51E"} w={"full"} borderRadius={"full"} textColor={"white"} mb={3}>Login</Button>
            <Text textColor={"white"}>Don't have an account yet?
            <Link to={"/register"} color={"#04A51E"}>{" "}Create account</Link>
          </Text>
        </FormControl>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
