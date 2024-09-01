import { useDispatch } from "react-redux";
import { reactAdded } from "./PostSlice";

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😊',
    heart: '❤️',
    rocket: '🚀',
    coffee: '🍵'
}

const ReactionButton = ({ post }) => {
    const dispatch = useDispatch()
    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
                style={{
                    background: "none", borderRadius: "10px", color: "white"
                }}
                type="button"
                key={name}
                onClick={() => dispatch(reactAdded({ postId: post.id, reaction: name }))}
            >
                {emoji} {post.reactions[name]}
            </button >
        )
    })
    return <div> {reactionButtons} </div>
}

export default ReactionButton