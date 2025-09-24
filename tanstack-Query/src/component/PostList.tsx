import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../api/api";

export const PostList = () => {
  const { data, isLoading, isError } = useQuery<{ id: string; title: string }[]>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 10000,
    refetchOnWindowFocus: true,
  });

  if (isError) return <div>Error fetching posts</div>;

  return (
    <>
      {isLoading ? (
        <div>Loading data...</div>
      ) : (
        data?.map((post) => <div key={post.id}>{post.title}</div>)
      )}
    </>
  );
};
