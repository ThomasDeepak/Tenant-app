import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className ="navbar" style={{
            backgroundColor: "#424242"
        }}>

        <h1>Tenants-App</h1>
        <div className="links">
            <a href="/" style={{
                color: "white",
                backgroundColor: '#f1356d',
                borderRadius: '8px'
            }}>Home</a>
            <a href="/Create" style={{
                color: "white",
                backgroundColor: '#f1356d',
                borderRadius: '8px'
            }}>Add Property</a>
            <a href="/login" style={{
                color: "white",
                backgroundColor: '#f1356d',
                borderRadius: '8px'
            }}>Login</a>
        </div>
        </nav> 
    );
}
 
export default Navbar;