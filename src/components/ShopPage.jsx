import { useOutletContext } from "react-router";
import styles from '../styles/shoppage.module.css';

export default function ShopPage(){
    const [products, addToCart] = useOutletContext();

    function getProductToAdd(e){
        const amount = parseInt(e.target.previousElementSibling.value);
        const title = e.target.parentElement.dataset.title;
        const product = {amount, title};
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
                        <div className={styles.inputForm} data-title={p.title}>
                            <input type="number" />     
                            <button onClick={(e) => addToCart(getProductToAdd(e))}>Add To Cart</button>    
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}