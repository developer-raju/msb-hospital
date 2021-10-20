import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
            <div style={{ width: '70%', margin: '80px auto' }}>
                <h1>Here you can find our all doctors information</h1> <br />
                <p>
                    Knowing how to navigate the medical, regulatory and legal review process is quintessential to getting your message across. So when we develop content that connects, we also ensure we have the plans to present this content in the most optimal way to streamline the approval processes and reduce the amount of revisions. As such, we have developed rigorous internal processes to maximize the time we have with our client stakeholders and review teams. It’s our ability to package content submissions for streamlined client reviews and complete OPDP submissions at all stages in the product lifecycle that makes us an invaluable content creation partner.
                </p>
                <button style={{ backgroundColor: '#FC427B', border: '1px solid gray', padding: '10px 18px', margin: '20px 0', borderRadius: '5px' }}>Learn More...</button>
            </div>
        </div>
    );
};

export default About;