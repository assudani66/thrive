import React from 'react'
import { Button } from '@chakra-ui/react'
import { getPosts } from '@/handlers/postsHandlers'
import { supabase } from '@/services/supabaseClient'

const url:string = process.env.NODE_ENV
const apiKey:string = process.env.SUPABASE_API_KEY!
const Page = () => {
  const getPostsFormServer = async() => {
    const post = await getPosts()
    console.log(post)
    console.log(supabase)
  }
  return (
    <Button onClick={()=>getPostsFormServer()}>getPosts</Button>
  )
}

export default Page
