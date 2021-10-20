import React from 'react';

const Courses = (props) => {
    const {img, title, info, price} = props.course

    const productStyle = {
        margin: '20px',
    }
    return (
        <div>
            <div style={productStyle} class="shadow p-3 mb-5 bg-body rounded " >
                <div class='py-4'>
                <img style={{borderRadius: '20px'}} src={img} alt="" />
                <h1 class='mt-3 text-info'>{title}</h1> <br />
                <p class='text-center fs-5'>{info}</p>
                <h2>Doctor Fee: ${price}</h2> <br />
                <button type="button" class="btn btn-primary">Book Ticket</button>
                </div>
            </div>
        </div>
    );
};

export default Courses;