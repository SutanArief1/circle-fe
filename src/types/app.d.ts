export interface IThread {
    id?: number
    content?: string
    image?: IThreadImage[]
    createdAt: Date
    userId: number
    threadId?: number
    author?: IUser
    _count: ICount
}

interface IThreadImage {
    image?: string
}

export interface IUser {
    id: number
    username: string
    fullname: string
    email: string
    profile: IProfile
}

export interface IProfile {
    bio?: string
    avatar?: string
    cover?: string
    user?: IUser
}

export interface ICount {
    like?: number;
    replies?: number;
}
