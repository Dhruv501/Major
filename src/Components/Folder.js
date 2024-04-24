import logo from '../Assets/cartlogo.jpg'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Folder = () => {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      // Handle the case when the token is not available
      return;
    }

    fetch('http://localhost:7070/api/category/all', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setFolders(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 p-6">
      {folders.map((folder) => (
        <Link to={`/products/${folder.categoryId}`} key={folder.categoryId} className="w-60 p-3 text-stone-700 bg-stone-100 rounded-md shadow-md">
          <div className="flex justify-center">
            <img className="h-60 w-45" src={folder.imageUrl} alt={folder.name} />
          </div>
          <h1 className="text-sm text-center font-medium p-1">{folder.name}</h1>
        </Link>
      ))}
    </div>
  );
};

export default Folder;