import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postAdded } from './PostSlice'
import { selectAllUsers } from '../users/userSlice'

const AddPostForm = () => {

    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')
    const users = useSelector(selectAllUsers)

    const onTitleChange = e => setTitle(e.target.value)
    const onContentChange = e => setContent(e.target.value)
    const onAuthorChange = e => setUserId(e.target.value)

    const onSavePostClicked = () => {
        if (title, content) {
            dispatch(
                postAdded(title, content, userId)
            )
            setTitle('')
            setContent('')
        }
    }

    const userOptions = users.map(user => (
        <option value={user.id} key={user.key}>
            {user.name}
        </option>
    ))

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title: </label>
                <input type="text" id='postTitle' name='postTitle' value={title} onChange={onTitleChange} />
                <label htmlFor="postAuthor">Author :</label>
                <select value={userId} id="postAuthor" onChange={onAuthorChange}>
                    <option value=""></option>
                    {userOptions}
                </select>
                <label htmlFor="postContent">Post Title: </label>
                <textarea type="text" id='postContent' name='postContent' value={content} onChange={onContentChange} />
                <button disabled={!canSave} type='button' onClick={onSavePostClicked}>Save Post</button>
            </form>
        </section>
    )
}

export default AddPostForm
