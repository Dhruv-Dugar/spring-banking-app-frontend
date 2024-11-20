import React, {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import columns from '../components/Columns';


function ViewUniqueTransaction() {

    const [transactionId, setTransactionId] = useState('');
    const [transactions, setTransactions] = useState([]);



    useEffect(() => {
        axios.get(`http://localhost:8080/api/transactions/${transactionId}`)
        .then(response => {
            setTransactions(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }   , []);


    const handleInputChange = (event) => {
        setTransactionId(event.target.value);
    }

 
  return (
    <div>
        <h1>View Unique Transaction</h1>

        <div>
            <label htmlFor='transactionId'>Transaction ID</label>
            <input type='text' id='transactionId' value={transactionId} onChange={handleInputChange} required />
        </div>

        {loading && <div>Loading...</div>}

        {!loading && transactionId && (
            <div>
                <h2>Transaction ID: {transactions.transactionId}</h2>
                <h2>Sender ID: {transactions.senderId}</h2>
                <h2>Receiver ID: {transactions.receiverId}</h2>
                <h2>Amount: {transactions.amount}</h2>
            </div>            
        )}
    </div>
  )
}

export default ViewUniqueTransaction