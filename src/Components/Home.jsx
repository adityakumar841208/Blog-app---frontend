import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [url , setUrl ] =  useState(process.env.REACT_APP_BACKEND_URL);


  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${url}/allBlogs`);
        setBlogs(response.data);
      } catch (error) {
        setError('Error fetching blogs');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [blogs]);

  const handleClick = (blog) => {
    navigate('/viewBlog', { state: { title: blog.title, blog: blog.blog, timestamp: blog.timestamp } });
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10">{error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">All Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.slice().reverse().map((blog) => (
          <div 
            key={blog._id} 
            className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-100 transition"
            onClick={() => handleClick(blog)}
          >
            <h2 className="text-xl font-bold mb-2 line-clamp-2">{blog.title}</h2>
            <p className="text-gray-700 line-clamp-5">{blog.blog}</p>
            <p className="text-sm text-gray-500 mt-2">{new Date(blog.timestamp).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
