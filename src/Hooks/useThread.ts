import React, { useEffect, useState } from 'react'
import { deleteThread, getThreads, postThreads } from '../lib/api/call/thread';
import { getProfile } from '../lib/api/call/profile';
import { IProfile, IThread } from '../types/app';

const useThread = () => {
  const [threadPost, setThreadPost] = useState<{ content: string; image: FileList | null; }>({ content: "", image: null });
  const [threads, setThreads] = useState<IThread[] | []>([]);
  const [profile, setProfile] = useState<IProfile>()

  const handlePostThread = async (e: React.MouseEvent) => {
    try {
      e.preventDefault();
      const res = await postThreads(threadPost);
      await getThread()
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const getThread = async () => {
    try {
      const res = await getThreads();
      setThreads(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

   const getProfileById = async () => {
    try {
      const token = localStorage.getItem("token")
      if (!token) return
      const res = await getProfile(token);
      setProfile(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleDeleteThread = async (id: number) => {
    try {
      const res = await deleteThread(id);
      await getThread();
      console.log(`delete success`);
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getThread();
    getProfileById();
  }, []);
  console.log(`ini threads`, threads);
  
  
  return {
    threadPost,
    threads,
    profile,
    handlePostThread,
    handleDeleteThread,
    getThread,
    getProfileById,
    setThreadPost
  }
}

export default useThread