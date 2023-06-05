import './single.css'
import SideBar from "../../components/sidebar/Sidebar"
import SinglePost from "../../components/singlePost/SinglePost"

export default function Single() {
  return (
    <div className="single">
      <SinglePost/>
      <SideBar/>
    </div>
  )
}
