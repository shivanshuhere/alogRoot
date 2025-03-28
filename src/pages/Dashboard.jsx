import React, { lazy, Suspense, useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import "../styles/Dashboard.css"
import Navbar from '../components/Navbar.jsx'
import Sidebar from '../components/Sidebar.jsx'
function Dashboard() {
    const [posts, setPosts] = useState([])
    const fetchPosts = useCallback(async () => {
        try {
            const response = await axios('https://jsonplaceholder.typicode.com/posts', { cancelToken: axios.CancelToken.source().token })
            setPosts(response.data)
        } catch (error) {
            alert('Error fetching posts');
            console.log('Error fetching posts :: ', error);
        }
    }, [])

    useEffect(() => {
        lazy(() => fetchPosts());
        return () => {
            axios.CancelToken.source().cancel();
        }
    }
    )

    return (
        <div className='dashboard-container'>
            <Navbar />
            <div className="content-container">
                <Sidebar />

                <main>
                    <div className="post-container">
                        <Suspense fallback={<div>Loading...</div>}>
                            {posts?.map(post => (
                                <div key={post?.id} className='post'>
                                    <h2>{post?.title}</h2>
                                    <p>{post?.body}</p>
                                </div>
                            ))}
                        </Suspense>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Dashboard