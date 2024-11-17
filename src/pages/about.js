import React from 'react';
import '../styles/about.css';

const About = () => {
    return (
        <div className='about-section'>
            <h1 className='about-title'>About Us</h1>
            <div className='about-card'>
                <img
                    src='https://e8cuz2bphm9.exactdn.com/blog/wp-content/uploads/2012/06/como-ser-un-empresario-exitoso.png?strip=all&lossy=1&quality=75&ssl=1'
                    alt='About Us'
                    className='about-image'
                />
                <div className='about-content'>
                    <h1>About Us</h1>
                    <p>
                        We are a passionate team of developers committed to creating innovative
                        administrative systems tailored to meet the unique needs of businesses.
                        With a focus on efficiency, scalability, and user-friendly solutions, we
                        specialize in designing tools that empower companies to streamline their
                        operations and achieve their goals.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
