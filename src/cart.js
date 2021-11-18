import React from 'react';
import { useCart } from 'react-use-cart';

const Cart = () => {
    const { 
        isEmpty,
        items,
        totalUniqueItems,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    if(isEmpty) return <h1 className="text-center">Your Wishlist is Empty</h1>
    return (
        <section className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h5>Wishlist ({totalUniqueItems})total Items: ({totalItems})</h5>
                    <table classname="table table-light table-hover m-0">
                        <tbody>
                        {items.map((item, index)=>{
                            return(
                            <tr key={index}>
                                <td>
                                    <img src={item.img} style={{height: '6rem'}} />
                                </td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>Quantity ({item.quantity})</td>
                                <td>
                                    <button
                                     className="btn btn-info ms-2"
                                     onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                     >-</button>
                                    <button 
                                    className="btn btn-info ms-2"
                                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                    >+</button>
                                    <button 
                                    classname="btn btn-danger ms-2"
                                    onClick={() => removeItem(item.id)}
                                    >Remove Item</button>
                                </td>
                            </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

export default Cart;