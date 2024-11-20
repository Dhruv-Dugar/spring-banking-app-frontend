import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreateTransaction() {

    const {register, handleSubmit, reset} = useForm();

    const notify = () => toast("Transaction created successfully!");

    const onSubmit = async (data) => {
        try {
            const res = await axios.post('http://localhost:8080/api/transactions/create', data);
            console.log(data);
            console.log(res.data);
            notify();
            reset();
        } catch (error) {
            console.log(error);
        }
    }


  return (
    <div>
        Create Transaction
        <form onSubmit = {handleSubmit(onSubmit)}>
            <label>Enter Sender ID</label>
            <input {...register('senderId')} />
            <br/>
            <label>Enter Receiver ID</label>
            <input {...register('receiverId')} />
            <br/>
            <label>Enter Amount</label>
            <input {...register('amount')} />
            <br/>
            <input type='submit' onClick={notify}/>
            <ToastContainer />

        </form>
    </div>
  )
}

export default CreateTransaction;