import React, { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

function CreatePost({}) {
  const { addPost } = useContext(PostList);
  const userIdRef= useRef()
  const titleRef= useRef()
  const desRef= useRef()
  const tagRef= useRef()
  const reactionRef= useRef()

  const handleSubmit=(event)=>{
    event.preventDefault()
    const userId = userIdRef.current.value;
    const title = titleRef.current.value;
    const des = desRef.current.value;
    const tag = tagRef.current.value.split(" ");
    const reaction = reactionRef.current.value;
    alert('Post Created Successfully')

    userIdRef.current.value= '';
    titleRef.current.value= '';
    desRef.current.value='';
    tagRef.current.value='';
    reactionRef.current.value=''


    addPost(userId,title,des,tag,reaction);

  }
  return (
    <form className="formContainer" onSubmit={handleSubmit}>
      <div className="mb-3 ">
        <label className="form-label">Enter UserId</label>
        <input ref={userIdRef} type="text" className="form-control"></input>
      </div>
      <div className="mb-3 ">
        <label className="form-label">Title</label>
        <input ref={titleRef} type="text" className="form-control"></input>
      </div>
      <div className="mb-3 ">
        <label className="form-label">Description</label>
        <textarea ref={desRef} type="text" className="form-control"></textarea>
      </div>
      <div className="mb-3 ">
        <label className="form-label">Tags</label>
        <input ref={tagRef} type="text" className="form-control"></input>
        <div className="form-text">
          Use " "(space) before entering second tag
        </div>
      </div>
      <div className="mb-3 ">
        <label className="form-label">Reactions</label>
        <input ref={reactionRef} type="text" className="form-control"></input>
      </div>
      <button className="btn btn-primary">Create Post</button>
    </form>
  );
}

export default CreatePost;
