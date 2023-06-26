import { createClient } from "@supabase/supabase-js";
import axios from "axios";

export function getPosts() {
    return axios.get("/api/posts")
}
export function getPost(id:string) {
    return axios.get(`/api/posts?id=${id}`)
}