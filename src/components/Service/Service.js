import React from 'react';

const Service = (props) => {
    const { img, title, info, price } = props.product;

    
    return (
        <div>
            
            <div style={{margin: '20px'}} class="shadow p-2 mb-5 bg-body rounded " >
                <div class='py-4'>
                <img style={{borderRadius: '20px'}} src={img} alt="" />
                <h1 class='mt-3 text-info'>{title}</h1> 
                <p class='text-center fs-5'>{info}</p>
                <h2>Doctor Fee: ${price}</h2> <br />
                <button type="button" class="btn btn-primary">Book Ticket</button>
                </div>
            </div>
        </div>
    );
};

export default Service;