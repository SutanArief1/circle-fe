import API from '..'

interface ILoginBody {
    username: string;
    password: string;
}

interface IRegisterBody {
    fullname: string;
    email: string;
    username: string;
    password: string;
}

export const loginAPI = async (body: ILoginBody) => {
    return await API.post("/login", body)
}

export const registerAPI = async (body: IRegisterBody) => {
    return await API.post("/register", body)
}