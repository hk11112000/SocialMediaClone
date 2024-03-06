import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if(action.type === 'ADD_POST'){
    newPostList = [action.payload,...currPostList]
  }
  else if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter((i) => i.id !== action.payload.postId);
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    []
  );
  const addPost = (userId, title, des, tag, reaction) => {
    // console.log(`${userId},${title},${des},${tag},${reaction}`)
    const addPostItem = {
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: title,
        body: des,
        reactions: reaction,
        userId: userId,
        tags: tag,
      },
    };
    dispatchPostList(addPostItem);
  };
  const deletePost = (postId) => {
    console.log(postId);
    const deletePostItem = {
      type: "DELETE_POST",
      payload: {
        postId,
      },
    };
    dispatchPostList(deletePostItem);
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi Friends I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.",
    reactions: 10,
    userId: "9",
    tags: ["Vacations", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Pass ho bhai",
    body: "4 saal ki masti ke baad finally passed",
    reactions: 15,
    userId: "12",
    tags: ["b-tech", "examover"],
  },
];
export default PostListProvider;
