import Post from "../post/Post"
import "./posts.scss"

const Posts = () => {

  const posts = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePic: "https://images.pexels.com/photos/4972601/pexels-photo-4972601.jpeg?auto=compress&cs=tinysrgb&w=1600",
      dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      img: "https://images.pexels.com/photos/15371312/pexels-photo-15371312.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
    },
    {
      id: 2,
      name: "John Doe",
      userId: 2,
      profilePic: "https://images.pexels.com/photos/4972601/pexels-photo-4972601.jpeg?auto=compress&cs=tinysrgb&w=1600",
      dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
  ]
  return (
    <div className="posts">
      {posts.map(post => (
        <Post post={post} key={post.id}/>
      ))}
    </div>
  )
}

export default Posts