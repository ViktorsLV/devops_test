import React, { useEffect, useState } from 'react'

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000')
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
                console.log(data)
            })
    }, [])

    return (
        <div>
            <h1>Blogs</h1>
            <div>
                {blogs.map(blog => (
                    <div key={blog.id}>
                        {blog.title}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Blogs