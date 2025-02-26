import React from 'react';
import { NavLink } from 'react-router-dom'; 
import user from '../icons/user.png';
import Login from './Login';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Create Order', path: '/create-order' },
  { name: 'Join an Order', path: '/join-order' },
  { name: 'Profile', path: '/profile' },
  { name: 'Log Out', path: '/login' },
];

const Header = () => {
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
                  className={({ isActive }) => {
                    if (item.name === 'Profile') {
                      // For Profile, no hover effect, just active state
                      return `px-4 py-2 rounded-md transition-all duration-200 transform ${
                        isActive ? 'bg-[rgb(65,64,61)] text-white' : 'text-gray-700'
                      }`;
                    } else if (item.name === 'Log Out') {
                      // For Log Out, apply red hover effect
                      return `px-4 py-2 rounded-md transition-all duration-200 transform ${
                        isActive
                          ? 'bg-red-500 text-white'
                          : 'text-gray-700 hover:bg-red-500 hover:text-white'
                      }`;
                    } else {
                      // For all other items, standard hover effect with cyan color
                      return `px-4 py-2 rounded-md transition-all duration-200 transform hover:scale-105 ${
                        isActive
                          ? 'bg-[rgb(65,64,61)] text-white'
                          : 'text-gray-700 hover:bg-[rgb(65,64,61)] hover:text-white'
                      }`;
                    }
                  }}
                >
                  {item.name === 'Profile' ? (
                    <img className="h-5 w-5 inline-block align-middle" src={user} alt="User" />
                  ) : (
                    item.name
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
