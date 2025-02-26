import React, { useState } from 'react';
import axios from 'axios';
 import { useAuth } from '../../context/AuthContext';


const JoinOrder = () => {
  const { token } = useAuth();
  const [joinId, setJoinId] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:8080/api/orders/join', // Adjust endpoint as needed
        { joinId },
        {
          headers: {
            'Content-Type': 'application/json',
            ...(token && { Authorization: `Bearer ${token}` }),
          },
        }
      );
      setMessage('Successfully joined the order!');
      console.log('Join Order Response:', response.data);
      // Optionally redirect or update UI here
    } catch (error) {
      console.error('Error joining order:', error);
      setMessage('Failed to join order. Please check the Join ID and try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-cyan-600 mb-6">Join an Order</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="joinId" className="block text-gray-700 mb-2">
              Enter Order Join ID
            </label>
            <input
              id="joinId"
              type="text"
              value={joinId}
              onChange={(e) => setJoinId(e.target.value)}
              placeholder="Order ID"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-cyan-600 text-white py-2 rounded-md hover:bg-cyan-700 transition-all duration-200"
          >
            Join Order
          </button>
        </form>
        {message && (
          <p className="mt-4 text-center text-gray-700">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default JoinOrder;
