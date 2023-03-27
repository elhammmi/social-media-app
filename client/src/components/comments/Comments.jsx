import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import './comments.scss'

const Comments = () => {

    const {currentUser} = useContext(AuthContext)
    console.log(currentUser.profilePic)
    //TEMPORARY

    const comments = [
        {
            id: 1,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            name: "John Doe",
            userId: 1,
            profilePic: "https://images.pexels.com/photos/4972601/pexels-photo-4972601.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            id: 2,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            name: "John Doe",
            userId: 2,
            profilePic: "https://images.pexels.com/photos/4972601/pexels-photo-4972601.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },

    ];
    return (
        <div className="comments">
            <div className="write">
                <img src={currentUser.profilePic} alt="" />
                <input type="text" placeholder="write a comment" />
                <button>Send</button>
            </div>
            {comments.map(comment => (
                <div className="comment" key={comment.id}>
                    <img src={comment.profilePic} alt="" />
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className="date">1 hour ago</span>
                </div>
            ))}
        </div>
    )
}

export default Comments