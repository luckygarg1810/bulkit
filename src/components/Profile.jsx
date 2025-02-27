import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

const Profile = () => {
  const { user, token } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the user's orders from the backend
  useEffect(() => {
    const fetchMyOrders = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/orders/my', {
          headers: {
            'Content-Type': 'application/json',
            ...(token && { Authorization: `Bearer ${token}` }),
          },
        });
        setOrders(response.data);
      } catch (err) {
        console.error('Error fetching orders:', err);
        setError('Failed to fetch orders');
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchMyOrders();
    } else {
      setLoading(false);
    }
  }, [token]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-indigo-600 mb-6">Profile</h1>
        <div>
          {/* User Details */}
          <div className="mb-8">
            <p>
              <span className="font-semibold">Name:</span>{' '}
              {user?.fullName || user?.name || 'N/A'}
            </p>
            <p>
              <span className="font-semibold">Username:</span> {user?.username || 'N/A'}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {user?.email || 'N/A'}
            </p>
          </div>

          {/* My Orders Section */}
          <div>
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
              My Orders
            </h2>
            {loading ? (
              <p>Loading orders...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : orders && orders.length > 0 ? (
              <ul className="space-y-4">
                {orders.map((order) => (
                  <li
                    key={order.id}
                    className="border p-4 rounded-md shadow-sm"
                  >
                    <p className="font-bold">{order.title}</p>
                    <p>{order.description}</p>
                    <p className="text-sm text-gray-600">
                      Scheduled for:{' '}
                      {new Date(order.scheduledDate).toLocaleString()}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No orders found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
