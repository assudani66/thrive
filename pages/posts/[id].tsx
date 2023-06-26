import { getPost } from '@/handlers/postsHandlers';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  const getPostDetails = async (postId: string | string[]) => {
    if (Array.isArray(postId)) {
      // Handle multiple ids
      for (const postIdItem of postId) {
        const response = await getPost(postIdItem);
        console.log(response);
      }
    } else {
      // Handle single id
      const response = await getPost(postId);
      console.log(response);
    }
  };

  useEffect(() => {
    if (id) {
      getPostDetails(id);
    }
  }, [id]);

  return <div>post Id: {id}</div>;
};

export default Post;
