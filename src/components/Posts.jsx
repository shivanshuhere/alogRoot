import React from 'react'

function Posts({ posts }) {
    return (
        <>
            {posts?.map(post => (
                <div key={post?.id} className='post'>
                    <h2>{post?.title}</h2>
                    <p>{post?.body}</p>
                </div>
            ))}
        </>
    )
}

export default Posts