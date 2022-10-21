import React from 'react'
import '../css/Container.css'
const container = () => {

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

    return (
        <div className='main'>
            {/* <h1>E-Commerce</h1> */}
            <div className='category'>
                {data.map((a, nameindex) => {
                    return (
                        <>
                            <div key={a}>
                            </div>
                            <h2>{a.name}</h2>


                            <div className='product'>
                                {a.productList.map((b, productindex) => {
                                    return (
                                        <>
                                            <div className='item' key={b}>
                                            </div>
                                            <h3>Item : {b.name}</h3>
                                            <h3>Price : ₹ {b.price}</h3>
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
    )
}

export default container
