import "./Home.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const url = "https://jsonplaceholder.typicode.com/posts/?_limit=7";
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <div>
      {post.map((postItem) => (
        <div className="postCard">
          <img
            className="img"
            src={"./background.jpg"}
            height="300"
            width="1000"
            alt=""
          />
          <div className="dateSec">
            <h1>{postItem.title}</h1>
            <img src={"./share.png"} alt="" height="20px" width="20px" />
          </div>
          <p>Jan 19 2020</p>
          <p>
            {postItem.body}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
            soluta dolore accusamus ut minima odio! Architecto, nobis rerum
            facere a magnam quisquam itaque explicabo consequatur voluptate! Non
            illum earum sint.
          </p>
          <Link to={`/Home/${postItem.id}`}>read more</Link>
        </div>
      ))}
    </div>
  );
};
export default Home;
