import React, { lazy, Suspense, useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import "../styles/Dashboard.css"
import Navbar from '../components/Navbar.jsx'
import Sidebar from '../components/Sidebar.jsx'
import Loading from '../components/Loading.jsx'

const Posts = lazy(() => import('../components/Posts.jsx'))

function Dashboard() {
    const [posts, setPosts] = useState([])
    const fetchPosts = useCallback(async () => {
        const source = axios.CancelToken.source();
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', { cancelToken: source.token });
            setPosts(response.data);
        } catch (error) {
            if (axios.isCancel(error)) {
                console.log('Request canceled:', error.message);
            } else {
                alert('Error fetching posts');
                console.log('Error fetching posts :: ', error);
            }
        }
        return () => source.cancel();
    }, [])

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    return (
        <div className='dashboard-container'>
            <Navbar />
            <div className="content-container">
                <Sidebar />
                <main className='dashboard-main'>
                    <div className="post-container">
                        <Suspense fallback={<Loading />}>
                            <Posts posts={posts} />
                        </Suspense>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Dashboard;
