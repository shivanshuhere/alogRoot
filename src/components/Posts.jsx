import React from 'react'
import "../styles/Posts.css"
function Posts({ posts }) {
    return (
        <>
            <div className="post-table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Body</th>

                        </tr>
                    </thead>
                    <tbody>
                        {posts?.map(post => (
                            <tr key={post?.id} className='post'>
                                <td>{post?.id}</td>
                                <td>{post?.title}</td>
                                <td>{post?.body}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Posts