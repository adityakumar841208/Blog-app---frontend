import React, { useState } from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function CreateBlog() {
  const [title, setTitle] = useState('');
  const [blog, setBlog] = useState('');
  const url = process.env.REACT_APP_BACKEND_URL;

  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = {title,blog}
    console.log(data)
    const response = await axios.post(`${url}/createBlog`,data,{
      withCredentials:true,
    })
    alert(response.data)
    if(response.data==='Please login'){
      return navigate('/login')
    }
    navigate('/')
    setTitle('');
    setBlog('');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Blog</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full md:w-3/4 lg:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter title"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="blog">
            Description
          </label>
          <textarea
            id="blog"
            value={blog}
            onChange={(e) => setBlog(e.target.value)}
            className="shadow appearance-none border rounded w-full md:w-3/4 lg:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter blog"
            rows="5"
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-auto"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateBlog;
