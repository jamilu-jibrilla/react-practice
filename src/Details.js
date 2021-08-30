import { useState, useEffect } from "react";

const Details = ({ match }) => {
  const url = `https://jsonplaceholder.typicode.com/posts/${match.params.id}`;
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <div>
      <div className="postCard">
        <img
          className="img"
          src={"./background.jpg"}
          height="300"
          width="600"
          alt=""
        />
        <div className="dateSec">
          <h1>{post.title}</h1>
          <img src={"./share.png"} alt="" height="20px" width="20px" />
        </div>
        <p>Jan 19 2020</p>
        <p>
          {post.body}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
          soluta dolore accusamus ut minima odio! Architecto, nobis rerum facere
          a magnam quisquam itaque explicabo consequatur voluptate! Non illum
          earum sint.
        </p>
        <a href="">read more</a>
      </div>
    </div>
  );
};

export default Details;
