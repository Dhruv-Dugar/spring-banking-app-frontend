const columns = [
    {
        name: "transactionId",
        selector: row => row.transactionId
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


export default columns;