import { Box, Button, TextField } from "@mui/material"

const LoginForm = () => {
  return (
    <Box>
        <form>
        <TextField label='Email or Username'/>
        <TextField label='Password' />
        <Button type="submit">Login</Button>
        </form>
    </Box>
  )
}

export default LoginForm