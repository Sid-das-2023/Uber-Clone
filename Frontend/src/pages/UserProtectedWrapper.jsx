import React, { useEffect, useState } from 'react'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useContext } from 'react';

const UserProtectedWrapper = ({
    children
}) => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserDataContext);
    const [isLoading, setIsLoading] = useState(true);

    // used useEffect to make sure that the route is protected and can't be reached if the user is not logged in
    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    }, [token]);

    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      if(response.status === 200) {
        setUser(response.data.user);
        setIsLoading(false);
      }
    }).catch(err => {
      console.log(err);
      localStorage.removeItem('token');
      navigate('/login');
    });

    if(isLoading) {
        return <p>Loading...</p>
    }

  return (
    <>
      {children}
    </>
  )
}

export default UserProtectedWrapper
