import { useOutletContext } from "react-router";
import styles from '../styles/shoppage.module.css';

export default function ShopPage(){
    const {products, addToCart} = useOutletContext();

    function getProductToAdd(e){
        const amount = parseInt(e.target.previousElementSibling.value);
        const title = e.target.parentElement.dataset.title;
        const image = e.target.parentElement.parentElement.firstElementChild.src;
        const price = e.target.parentElement.parentElement.children[2].textContent;
        const product = {amount, title, image, price};
        return product
    }
    return(
        <main>
            <div className={styles.shopPage}>
                {products && 
                products.map(p => 
                    <div key={p.title} className={styles.product}>
                        <img src={p.image} alt={p.title} />
                        <p className={styles.title}>{p.title}</p>
                        <p className={styles.price}>${p.price}</p>
                        <p className={styles.description}>{p.description}</p>
                        <form className={styles.inputForm} data-title={p.title} onSubmit={(e) => e.preventDefault()}>
                            <input type="number" min="1"/>
                            <button onClick={(e) => addToCart(getProductToAdd(e))}>Add To Cart</button>    
                        </form>
                    </div>
                )}
            </div>
        </main>
    );
}