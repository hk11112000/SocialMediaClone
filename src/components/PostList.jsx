import React, { useContext } from "react";
import Cards from "./Cards";
import { PostList as PostListData } from "../store/post-list-store";
import NoPost from "./NoPost";


function PostList() {
  const { postList } = useContext(PostListData);
  return (
    <>
    {postList.length === 0 ? <NoPost/>:postList.map((post) => (
        <Cards key={post.id} post={post} />
      ))}
      
      
    </>
  );
}

export default PostList;
