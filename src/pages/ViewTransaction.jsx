import React, {useState, useEffect} from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';


const columns = [
    {
        name: "transactionId",
        selector: row => row.title
    },
    {
        name: "senderId",
        selector: row => row.senderId
    },
    {
        name: "receiverId",
        selector: row => row.receiverId
    },
    {
        name: "amount",
        selector: row => row.amount,
        sortable: true
    }
]


function ViewTransaction() {

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/transactions/all')
        .then(response => {
            setTransactions(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, []);

  return (
    <div>
        <DataTable
        columns={columns}
        data={transactions}
        pagination
        />
    </div>
  )
}

export default ViewTransaction