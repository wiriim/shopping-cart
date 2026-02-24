import styles from '../styles/navbar.module.css';
import { Link } from 'react-router';

export default function Navbar({cart}){
    return(
        <div className={styles.navbar}>
            <Link to="/">Home</Link>
            <Link to="Shop">Shop</Link>
            <Link to="Cart">Cart {cart && <span className={styles.cartLength}>({cart.reduce((prev, curr) => prev + curr.amount, 0)})</span>}</Link>
        </div>
    );
}