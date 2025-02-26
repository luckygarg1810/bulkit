import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

const CreateOrder = () => {
  const { token } = useAuth();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [scheduledDate, setScheduledDate] = useState('');
  const [itemName, setItemName] = useState('');
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    if (itemName.trim() !== '') {
      setItems([...items, itemName.trim()]);
      setItemName('');
    }
  };

  const handleRemoveItem = (indexToRemove) => {
    setItems(items.filter((_, index) => index !== indexToRemove));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Build the order object including the items list
    const orderData = { title, description, scheduledDate, items };

    try {
      const response = await axios.post('http://localhost:8080/api/orders', orderData, {
        headers: {
          'Content-Type': 'application/json',
          ...(token && { Authorization: `Bearer ${token}` }),
        },
      });
      console.log('Order created successfully:', response.data);
      // Optionally clear the form or redirect the user here
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-8">
        <h2 className="text-3xl font-bold text-center text-[rgb(65,64,61)] mb-6">
          Create an Order
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Order Title */}
          <div className="mb-4">
            <label htmlFor="orderTitle" className="block text-gray-700 mb-2">
              Order Title
            </label>
            <input
              id="orderTitle"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter order title"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(70,53,43)]"
              required
            />
          </div>
          {/* Order Description */}
          <div className="mb-4">
            <label htmlFor="orderDescription" className="block text-gray-700 mb-2">
              Description
            </label>
            <textarea
              id="orderDescription"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter order details"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(70,53,43)]"
            />
          </div>
          {/* Scheduled Date & Time */}
          <div className="mb-4">
            <label htmlFor="scheduledDate" className="block text-gray-700 mb-2">
              Scheduled Date &amp; Time
            </label>
            <input
              id="scheduledDate"
              type="datetime-local"
              value={scheduledDate}
              onChange={(e) => setScheduledDate(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(70,53,43)]"
              required
            />
          </div>
          {/* Add Item */}
          <div className="mb-4">
            <label htmlFor="itemName" className="block text-gray-700 mb-2">
              Add Item
            </label>
            <div className="flex space-x-2">
              <input
                id="itemName"
                type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                placeholder="Enter item name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(70,53,43)]"
              />
              <button
                type="button"
                onClick={handleAddItem}
                className="bg-[rgb(132,96,73)] cursor-pointer text-white px-4 py-2 rounded-md hover:bg-[rgb(70,53,43)] transition-all duration-200"
              >
                Add
              </button>
            </div>
            {items.length > 0 && (
              <ul className="mt-2">
                {items.map((item, index) => (
                  <li key={index} className="flex items-center justify-between border-b py-1">
                    <span>{item}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveItem(index)}
                      className="text-red-600 cursor-pointer hover:text-red-800"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* Submit Order Button */}
          <button
            type="submit"
            className="w-full bg-[rgb(132,96,73)] cursor-pointer text-white py-2 rounded-md hover:bg-[rgb(70,53,43)] transition-all duration-200"
          >
            Create Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateOrder;
