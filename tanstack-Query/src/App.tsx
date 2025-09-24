

import { useQuery } from '@tanstack/react-query'
import './App.css'
import { fetchPosts } from './api/api'
import { PostList } from './component/PostList';

function App() {

  const {data, isLoading} = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  console.log("loading some in here: " + isLoading);
  console.log("Data some in here: " + data);

  return (
  <>
    <PostList />
  </>
);
}

export default App
