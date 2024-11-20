import '../styles/navbar.css';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div>
            <ul>
                <li><Link to="/viewtransactions">View All Transactions</Link></li>
                <li><Link to="/viewcustomers">View All Customers</Link></li>\
                <li><Link to="/viewuniquetransactions">View Unique Transaction</Link></li>
                <li><Link to="/viewuniquecustomers">View Unique Customer</Link></li>
                <li><Link to="/CreateTransaction">Create Transaction</Link></li>
                <li><Link to="/CreateCustomer">Create Customer</Link></li>
                <li><Link to="/UpdateCustomer">Update Customer</Link></li>
                <li><Link to='/auth'>auth</Link></li>
            </ul>

        </div>
    )
}


export default Navbar;