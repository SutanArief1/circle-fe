import { Box, Button, FormControl, Image, Input, Text } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import logo from "../../assets/circle.png"
import { useState } from 'react'
import { registerAPI } from '../../lib/api/call/user'

const Register: React.FC = () => {
    const navigate = useNavigate()

    const [formInput, setFormInput] = useState<{ fullname: string; email: string; username: string; password: string; }>({
        fullname: "",
        email: "",
        username: "",
        password: ""
    });

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await registerAPI(formInput)
            console.log(res);

            navigate("/login")
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Box bg={"black"} p={10} display={"flex"} justifyContent={"center"} alignItems={"center"} h={"100vh"}>
            <Box>
                <Image w={200} src={logo} alt='circle-logo' mb={3} />
                <Text textColor={"white"} fontSize={"x-large"} fontWeight={"bold"} mb={3}>Create account Circle</Text>
                <form onSubmit={handleRegister}>
                    <FormControl w={400}>
                        <Input id='fullname' name="fullname" onChange={(e) => setFormInput({ ...formInput, fullname: e.target.value })}
                            placeholder='Fullname' textColor={"white"} mb={3} />
                        <Input type="email" id='email' name="email" onChange={(e) => setFormInput({ ...formInput, email: e.target.value })}
                            placeholder='Email' textColor={"white"} mb={3} />
                        <Input type="username" id='username' name="username" onChange={(e) => setFormInput({ ...formInput, username: e.target.value })}
                            placeholder='Username' textColor={"white"} mb={3} />
                        <Input type="password" id='password' name="password" onChange={(e) => setFormInput({ ...formInput, password: e.target.value })}
                            placeholder='Password' textColor={"white"} mb={3} />
                        <Text textAlign={"end"} textColor={"white"} fontSize={"small"} mb={3}>Forgot password?</Text>
                        <Button type='submit' bg={"#04A51E"} w={"full"} borderRadius={"full"} textColor={"white"} mb={3}>Create</Button>
                    </FormControl>
                </form>
                <Text textColor={"white"}>Already have account?<Link to={"/login"} color={"#04A51E"}>  Login</Link></Text>
            </Box>
        </Box>
    )
}

export default Register