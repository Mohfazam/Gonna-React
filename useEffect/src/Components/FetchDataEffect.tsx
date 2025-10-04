import axios from "axios";
import { useEffect, useState } from "react"

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export const FetchDataEffect = () => {

    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");

            setPosts(response.data);
        }

        fetchData();
    }, []);

    return (
        <div>
            {posts.map((user) => (
                <div key={user.id}>
                    <span>UserId:</span><b>{user.userId}</b>
                    <br />
                    <span>Title:</span><b>{user.title}</b>
                    <br />
                    <span>Body:</span><b>{user.body}</b>
                    <br />
                    <br />
                    <br />
                </div>
            ))}
        </div>
    )
}