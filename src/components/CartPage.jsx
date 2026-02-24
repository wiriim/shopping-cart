import { useOutletContext } from "react-router";
import styles from '../styles/cart.module.css';

export default function CartPage(){
    const {cart, addToCart, removeFromCart} = useOutletContext();

    function getProductToAdd(e){
        const amount = 1;
        const title = e.target.parentElement.dataset.title;
        const image = e.target.parentElement.parentElement.firstElementChild.src;
        const price = e.target.parentElement.firstElementChild.textContent;
        const product = {amount, title, image, price};
        return product
    }

    return(
        <main>
            <div className={styles.cartPage}>
                {cart && 
                cart.map(p => 
                    <div key={p.title} className={styles.product}>
                        <img src={p.image} alt={p.title} />
                        <p className={styles.title}>{p.title}</p>
                        <div className={styles.more} data-title={p.title}>
                            <p className={styles.price}>{p.price}</p>
                            <p>Amount: {p.amount}</p>
                            <button onClick={(e) => addToCart(getProductToAdd(e))}>Add</button>
                            <button onClick={(e) => removeFromCart(getProductToAdd(e))}>Remove</button>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}