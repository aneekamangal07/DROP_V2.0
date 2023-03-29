import "./header.css";
// import "note-taking-ani" from "../assests/note-taking-ani.jpg";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitle">
        <span className="headerTitleLg">DROP</span>
      </div>
      <img
        className="headerImg"
        src="https://media1.giphy.com/media/Bf1LzWr9lMcCs53HkJ/giphy.gif?cid=6c09b9521pzfqw7mxz9zuat0y77t7r2pdjaafj9a96ywygtu&rid=giphy.gif&ct=s"
        alt=""
      />
    </div>
  );
}
