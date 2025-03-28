import React, { useEffect, useState } from 'react'
import "../styles/Posts.css"
import ReactPaginate from 'react-paginate'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import Radio from "./Radio.jsx"
import Search from "./Search.jsx"
function Posts({ posts }) {

    const [sort, setSort] = useState('asc')
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10;

    const offset = currentPage * itemsPerPage;
    const currentData = posts.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(posts.length / itemsPerPage);

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    let postData;
    if (sort == 'asc') {
        postData = currentData?.map(post => (
            <tr key={post?.id} className='post'>
                <td>{post?.id}</td>
                <td>{post?.title}</td>
                <td>{post?.body}</td>
            </tr>
        ))
    }
    else {
        postData = currentData?.reverse()?.map(post => (
            <tr key={post?.id} className='post'>
                <td>{post?.id}</td>
                <td>{post?.title}</td>
                <td>{post?.body}</td>
            </tr>
        ))
    }
    return (
        <>
            <div className="post-table-container">
                <div className='filter-container'>
                    <Radio heading={"Sort By"} setSort={setSort} />
                    <Search />

                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Body</th>

                        </tr>
                    </thead>
                    <tbody>
                        {postData}
                    </tbody>
                </table>
                <ReactPaginate
                    className='table-pagination'
                    breakLabel="..."
                    nextLabel={<ArrowRight />}
                    previousLabel={<ArrowLeft />}
                    onPageChange={handlePageChange}
                    pageCount={pageCount}
                    pageRangeDisplayed={5}
                    marginPagesDisplayed={1}
                    containerClassName="pagination"
                    pageLinkClassName="page-num"
                    previousLinkClassName="page-num"
                    nextLinkClassName="page-num"
                    activeLinkClassName="active"
                />
            </div>

        </>
    )
}

export default Posts