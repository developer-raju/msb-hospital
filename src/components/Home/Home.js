import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Courses from '../Courses/Courses';
import './Home.css';
import banner1 from '../../images/banner/msb1.png';
import banner2 from '../../images/banner/canva2.png';
import banner3 from '../../images/banner/canva3.png';


const Home = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('./home2.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Best Medicine</h3>
                        <p>This Hospital Service and Doctors are very eperts.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Best Company</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className='text-gray'>Best Doctors</h1>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div class='container'>
                    <br /> <br />
                   <h1>See Our Doctors Services Summary</h1> 

                <div className='course-container'>
                    {
                        courses.map(course => <Courses
                            key={course.id}
                            course={course}></Courses>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;