import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList as PostListDelete } from "../store/post-list-store";
import { FaHashtag } from "react-icons/fa";


function Cards({ post }) {
  const { deletePost } = useContext(PostListDelete);
  return (
    <div className="card postCard" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        <span className="badge text-bg-success">{post.reactions}❤️</span>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          <MdDelete onClick={() => deletePost(post.id)} />
        </span>

        <div className="tagList">
        <FaHashtag />
        {post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-info hashTag">
              {tag}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Cards;
