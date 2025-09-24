import axios from "axios"

export const fetchPosts = async () => {
    const postData = await axios.get("http://localhost:3000/posts");

    return postData.data;
}

export const fetchComments = async () => {
    const commentsData = await axios.get("http://localhost:3000/comments");
    return commentsData.data;
}