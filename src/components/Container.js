//home == container
import React, { useState } from 'react'
 
import '../css/Container.css'
const Container = (props) => { 

    console.log(props);

    const data = [
        {
            "name": "Cosmetics",
            "productList": [
                {
                    "name": "Hair Oil",
                    "price": 122
                },
                {
                    "name": "Face wash",
                    "price": 123
                }
            ]
        },
        {
            "name": "Household",
            "productList": [
                {
                    "name": "Bed",
                    "price": 9854

                },
                {
                    "name": "Sofa",
                    "price": 9842
                }
            ]
        },
        {
            "name": "Electronics",
            "productList": [
                {
                    "name": "Phone",
                    "price": 9876
                },
                {
                    "name": "TWS",
                    "price": 789
                }
            ]
        }
    ]


    const [Cart, setCart] = useState([]);


    function Addtocart(nameindex, productindex) {

        const Pname = data[nameindex].productList[productindex].name

        console.log(Pname);

        const Pprice = data[nameindex].productList[productindex].price

        console.log(Pprice);

        const arr = { "name": Pname, "price": Pprice }

        setCart([...Cart, arr]);

        console.log("Product Added To The Cart")

    }

    console.log(Cart);

    function Removetocart(nameindex, productindex) {

        const Pname = data[nameindex].productList[productindex].name

        console.log(Pname);

        const Pprice = data[nameindex].productList[productindex].price

        console.log(Pprice);

        const arr = { "name": Pname, "price": Pprice }

        for (let i = 0; i < Cart.length; i++) {
            if (Cart[i].name === arr.name) {
                console.log(i);
                if (i > -1) {
                    Cart.splice(i, 1);
                }
            }

            console.log("Remove Added To The Cart")

            console.log(Cart);

        }
    }

    return (
        <>
            
            <div className='main'>
                {/* <h1>E-Commerce</h1> */}
                <div className='category'>
                    {data.map((a, nameindex) => {
                        return (
                            <>
                                <div key={a}>

                                    <h2>{a.name}</h2>

                                </div>


                                <div className='product'>
                                    {a.productList.map((b, productindex) => {
                                        return (
                                            <>
                                                <div className='item'>
                                                    <div key={b}>
                                                    </div>
                                                    <h3>Item : {b.name}</h3>
                                                    <h3>Price : ₹ {b.price}</h3>
                                                    <div className="btn_main">
                                                        <button className='btn' onClick={() => { Addtocart(nameindex, productindex); props.addToCartHandler({ Name: b.name, Price: b.price }) }} >Add To Cart</button>
                                                        <button className='btn' onClick={() => Removetocart(nameindex, productindex)}>Remove To Cart</button>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>

                            </>
                        )
                    })}
                    {/* a = full array
                    b = all productList */}
                </div>
            </div>
        </>
    )
}

export default Container
