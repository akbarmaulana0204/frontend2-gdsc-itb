import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Itemcard from './Itemcard';
import data from "./data";


const Home = () => {
    return (
        <>
        <h1 className="text-center mt-3">Bioskop Gratis</h1>
        <h2 className="text-center mt-3">created by Akbar Maulana Nugraha</h2>
        <h5 className="text-center mt-3">wishlist ada di bagian bawah</h5>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    {data.productData.map((item, index)=>{
                           return(
                                <Itemcard 
                                    img={item.img}
                                    title={item.title} 
                                    desc={item.desc}
                                    price={item.price} 
                                    item={item} 
                                    key={index} 
                                />
                           ) 
                    })}
            

                </div>
            </section>
        </>
    );
}

export default Home;