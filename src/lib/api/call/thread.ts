import API from ".."

interface IPostThread {
    content: string;
    image: FileList | null;
    threadId? : number
}

export const getThreads = async () => {
    return await API.get("threads")
}

export const getThreadById = async (id: number) => {
    return await API.get(`/thread/${id}`)
}

export const getReplies = async (id: number) => {
    return await API.get(`/replies/${id}`, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })}

export const postThreads = async (body: IPostThread) => {
    const formData = new FormData()

    if (body.image !== null) {
        for (let i = 0; i < body.image.length; i++) {
            formData.append("image", body.image[i])
        }
    }

    if (body.threadId) {
        formData.append("threadId", body.threadId.toString())
    }

    formData.append("content", body.content)
    
    return await API.post("/thread", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
}

export const deleteThread = async (id: number) => {
    return await API.delete(`/thread/${id}`, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
}