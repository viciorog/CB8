import "./index.css";
import { useState, useEffect } from "react";

const Post = ({ postData }) => {
  const { title, body, tags, reactions, userId } = postData;

  const [postUserData, setPostUserData] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setPostUserData(data);
      });
  }, [userId]);

  return (
    <div className="Post">
      <div className="Post__user">
        <img src={postUserData.image} alt="user" width="50px" />
        <p>
          {postUserData.firstName} {postUserData.lastName}
        </p>
      </div>
      <h3 className="Post__title">{title}</h3>
      <p className="Post__content">{body}</p>
      <div className="Post__info">
        <div className="Post__info--gift">
          <span>
            <img src="src/thumb-up.png" alt="like" width="15px" />
          </span>
          <span>{` ${reactions}`}</span>
        </div>
        <ul className="Post__info--categories">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default Post;
