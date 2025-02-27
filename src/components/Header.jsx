import React from 'react';
import { NavLink } from 'react-router-dom'; 
import userIcon from '../icons/userIcon.png';
import { useAuth } from '../../context/AuthContext';

const Header = () => {

  const { isAuthenticated, logout, userId } = useAuth();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Create Order', path: '/create-order' },
    { name: 'Join an Order', path: '/join-order' },
  ];
  
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-4xl font-bold text-[rgb(72,68,57)]">BulkIt</div>

          {/* Navigation */}
          <ul className="flex space-x-8">
            {navItems.map((item, index) => (
              <li key={`${item.name}-${index}`}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-md transition-all duration-200 transform hover:scale-105 ${
                      isActive ? 'bg-[rgb(65,64,61)] text-white' : 'text-gray-700 hover:bg-[rgb(65,64,61)] hover:text-white'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

            {/* Profile Icon (Only If Logged In) */}
            {isAuthenticated && (
              <li>
                <NavLink
                  to={`/profile`} // Use userId for dynamic profile tracking
                  className="px-4 py-2 rounded-md transition-all duration-200 transform"
                >
                  <img className="h-5 w-5 inline-block align-middle" src={userIcon} alt="User" />
                </NavLink>
              </li>
            )}

            {/* Conditional Authentication Button */}
            <li>
              {isAuthenticated ? (
                <button
                  onClick={logout}
                  className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition-all duration-200"
                >
                  Log Out
                </button>
              ) : (
                <NavLink
                  to="/login"
                  className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-all duration-200"
                >
                  Login
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
