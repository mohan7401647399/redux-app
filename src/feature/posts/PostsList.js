import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPosts } from './PostSlice'
import './style.css'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionButton from './ReactionButton'

const PostsList = () => {

    const posts = useSelector(selectAllPosts)
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderedPosts = orderedPosts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <p>
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
                <ReactionButton post={post} />
            </p>
        </article>
    ))

    return (
        <section>
            <h1>Posts</h1>
            {renderedPosts}
        </section>
    )
}

export default PostsList
