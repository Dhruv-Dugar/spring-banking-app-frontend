import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios'; 

const CustDeets = () => {
  const [customer, setCustomer] = useState(null); 
  const [transactionHistory, setTransactionHistory] = useState(null); 
  const [showTransactions, setShowTransactions] = useState(false);

  useEffect(() => {
    const fetchCustomerDetails = async () => {
      const customerResponse = await axios.get('http://localhost:8080/api/customer/details');
      setCustomer(customerResponse.data);

      const transactionsResponse = await axios.get('http://localhost:8080/api/transactions/all');
      setTransactionHistory(transactionsResponse.data);
    };

    fetchCustomerDetails();
  }, []);

  const columns = [
    {
      name: 'Transaction ID',
      selector: row => row.id,
      sortable: true,
    },
    {
      name: 'Date',
      selector: row => row.date,
    },
    {
      name: 'Type',
      selector: row => row.type,
    },
    {
      name: 'Amount',
      selector: row => `$${row.amount}`,
    },
  ];

  // loading message will pop if the data is yet to retrive.
  if (!customer || !transactionHistory) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Customer Dashboard</h1>
      
      <div style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '15px' }}>
        <h3>Customer Details</h3>
        <p><strong>Name:</strong> {customer.name}</p>
        <p><strong>Email:</strong> {customer.email}</p>
        <p><strong>Phone:</strong> {customer.phone}</p>
        <p><strong>Account Number:</strong> {customer.accountNumber}</p>
        <p><strong>Balance:</strong> ${customer.balance}</p>
      </div>

      <button 
        onClick={() => setShowTransactions(!showTransactions)} 
        style={{ marginRight: '10px', padding: '10px', cursor: 'pointer' }}
      >
        Check Transaction History
      </button>

      <button 
        onClick={() => alert(`Current Balance: $${customer.balance}`)} 
        style={{ padding: '10px', cursor: 'pointer' }}
      >
        Balance Enquiry
      </button>

      {showTransactions && (
        <div style={{ marginTop: '20px' }}>
          <h3>Transaction History</h3>
          <DataTable
            columns={columns}
            data={transactionHistory}
            pagination
            highlightOnHover
          />
        </div>
      )}
      
      <button onClick={() => navigate('/update-details')}>Edit Details</button>

    </div>
  );
};

export default CustDeets;
