import axios from 'axios';
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Load token and user info from localStorage on mount
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUserId = localStorage.getItem('userId');
    if (storedToken) {
      setToken(storedToken);
      setIsAuthenticated(true);
    }
     else{
      setIsAuthenticated(false)
     }

     if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  // Login function: call backend API to get JWT and user data
  const login = async (username, password) => {
    try {
      const response = await axios.post(`http://localhost:8080/api/auth/login`, {
        username, 
        password
      });
      const { token, userId } = response.data;
      console.log(response.data)
      // Assume the backend returns { token, user } 
      setToken(token);
      setUserId(userId);
      localStorage.setItem('token', token);
      localStorage.setItem('userId', userId);
      setIsAuthenticated(true)
      console.log("Login successfully")
      navigate('/'); // Redirect after successful login
    } catch (error) {
      console.error('Error during login:', error);
      setIsAuthenticated(false)
      throw error;
    }
  };

  // Logout function: clear stored token and user data
  const logout = () => {
    setToken(null);
    setUserId(null);
    setIsAuthenticated(false);
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ token, userId, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for easy access to AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
