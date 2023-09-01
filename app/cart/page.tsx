
import ShoppingCart from "./ShoppingCart";

import classes from "./ShoppingCart.module.css";


const Cart = async () => {

    const data = [        
        {
            id: '1',
            title: 'red shirt with super cool logo and two pockets and some long title',
            description: 'S',
            price: 20,
            images: ["/assets/images/shopping-bag.svg"],
            createdAt: new Date(),
            userId: '2',
            storeId: '3',
            quantity:10
        },
        {
            id: '4',
            title: 'blue jacket',
            description: 'M',
            price: 40,
            images: ["/assets/images/shopping-bag.svg"],
            createdAt: new Date(),
            userId: '2',
            storeId: '3',
            quantity:5
        },
        {
            id: '9',
            title: 'green hat',
            description: 'onesize',
            price: 12.99,
            images: ["/assets/images/shopping-bag.svg"],
            createdAt: new Date(),
            userId: '2',
            storeId: '3',
            quantity:1
        }
    ]



    return (
        <div className={classes.container}>
           <ShoppingCart data={data} tax={7} shipping={15} />
        </div>
    )
};
export default Cart;
