import { NextApiRequest,NextApiResponse } from "next";

type responseProp = {
    postId?:string | string[]
    post?:{}
}

export default function handler(
    req:NextApiRequest,
    res:NextApiResponse<responseProp>
){
    const { id } = req.query

    if(id){
        res.status(200).json({postId:id})
    }else{
        res.status(200).json({post:"dummy Posts"})
    }
}