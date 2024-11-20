import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import ViewTransaction from './pages/ViewTransaction';
// import ViewUniqueTransaction from './pages/ViewUniqueTransaction';
import CreateTransaction from './pages/CreateTransaction';
import CustDeets from './pages/ViewCustomer';
import UpdateCustomerDetails from './pages/UpdateCustomer';

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar/>
      <Routes>
        <Route path='/viewtransactions' element={<ViewTransaction />} />
        {/* <Route path='/viewuniquetransactions' element={<ViewUniqueTransaction />} /> */}
        <Route path='/createtransaction' element={<CreateTransaction />} />
        <Route path="/viewcustomers" element={<CustDeets />} />
        <Route path="/UpdateCustomer" element={<UpdateCustomerDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;