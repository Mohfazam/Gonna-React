import axios from "axios";
import { useEffect, useState } from "react"

interface todos  {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export const useFetch = () => {
    const [data, setData] = useState<todos[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
            setData(response.data);
        }

        fetchData();
    }, [])

    return [data];
}