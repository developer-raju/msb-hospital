import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('./night session.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (

        <div class='container'> <br /> <br />
            <h1 style={{ fontSize: '45px', color: 'rgb(23, 95, 230)', fontWeight: '700' }}>Our All Experts Doctors Services </h1> <br />

            <p style={{fontSize: '19px', color: '#3B3B98', fontWeight: '500'}}>
            Knowing how to navigate the medical, regulatory and legal review process is quintessential to getting your message across. So when we develop content that connects, we also ensure we have the plans to present this content in the most optimal way to streamline the approval processes and reduce the amount of revisions. As such, we have developed rigorous internal processes to maximize the time we have with our client stakeholders and review teams. It’s our ability to package content submissions for streamlined client reviews and complete OPDP submissions at all stages in the product lifecycle that makes us an invaluable content creation partner.
            </p>

            <h1 style={{color: '#FC427B'}}>MSB Health Care's Doctors</h1>


            <div className='services-container'>
                {
                    products.map(product => <Service 
                        key={product.id}
                        product={product}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;