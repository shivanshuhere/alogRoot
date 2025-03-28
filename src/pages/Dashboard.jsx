import React, { Suspense, useCallback, useEffect } from 'react'
import "../styles/Dashboard.css"
import Navbar from '../components/Navbar.jsx'
import Sidebar from '../components/Sidebar.jsx'
function Dashboard() {
    const [posts, setPosts] = useState([])
    const fetchPosts = useCallback(async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()
            setPosts(data)
        } catch (error) {
            alert('Error fetching posts');
            console.log('Error fetching posts :: ', error);
        }
    }, [])

    useEffect(() => {
        fetchPosts();
        return () => {
            fetchPosts.cancel();
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
                            {posts.map(post => (
                                <div key={post.id} className='post'>
                                    <h2>{post.title}</h2>
                                    <p>{post.body}</p>
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