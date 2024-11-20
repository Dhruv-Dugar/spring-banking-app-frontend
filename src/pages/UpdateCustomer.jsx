import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios

const UpdateCustomerDetails = () => {
  const [customer, setCustomer] = useState(null);
  const [updatedCustomer, setUpdatedCustomer] = useState({
    name: '',
    email: '',
    phone: '',
    accountNumber: '',
    balance: 0,
  });
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    const fetchCustomerDetails = async () => {
      const response = await axios.get('http://localhost:8080/api/customer/details');
      setCustomer(response.data);
      setUpdatedCustomer(response.data); // Set initial values to updateCustomer
    };

    fetchCustomerDetails();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedCustomer((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsUpdating(true); 

      // Send PUT request to update customer details
      const response = await axios.put('http://localhost:8080/api/customer/update', updatedCustomer);

      if (response.status === 200) {
        alert('Customer details updated successfully!');
        setCustomer(updatedCustomer);
      } else {
        alert('Failed to update customer details');
      }
    } catch (error) {
      alert('An error occurred while updating the details');
    } finally {
      setIsUpdating(false); 
    }
  };

  if (!customer) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Update Customer Details</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
        <div style={{ marginBottom: '15px' }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={updatedCustomer.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={updatedCustomer.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={updatedCustomer.phone}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Account Number:</label>
          <input
            type="text"
            name="accountNumber"
            value={updatedCustomer.accountNumber}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Balance:</label>
          <input
            type="number"
            name="balance"
            value={updatedCustomer.balance}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            width: '100%',
            fontSize: '16px',
          }}
          disabled={isUpdating}
        >
          {isUpdating ? 'Updating...' : 'Update Details'}
        </button>
      </form>
    </div>
  );
};

export default UpdateCustomerDetails;
