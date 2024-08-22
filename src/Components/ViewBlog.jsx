import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ViewBlog = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { title, blog, timestamp } = location.state || {};

    if (!title || !blog) {
        return <div className="text-center mt-10">No blog selected. Please go back and select a blog.</div>;
    }

    return (
        <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
            <div className="mb-4">
                <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
                <p className="text-sm text-gray-500">{new Date(timestamp).toLocaleString()}</p>
            </div>
            <div> 
                <p className="text-gray-700 leading-relaxed whitespace-pre">{blog}</p>
            </div>
            <div className="mt-6">
                <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                    onClick={() => navigate(-1)}
                >
                    Back
                </button>
            </div>
        </div>
    );
}

export default ViewBlog;
