import "../Assets/CSS/navbar.css"
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/view">View Products</Link></li>
            <li><Link to="/create">Create Product</Link></li>
            <li><Link to="/delete">Delete Product</Link></li>
            <li><Link to="/update">Update Product</Link></li>
        </ul>
    </div>
  )
}

export default NavBar