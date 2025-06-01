import React from 'react';
import AboutStyle from './About.module.css'
function About() {
    return (
        <>

            <div className={AboutStyle.aboutcontent}>
                <h1>About Us</h1>
                <p>This is the "About Us" page of the website. Here you can write any information about your company or project.</p>
                <p>For example: We are a company dedicated to providing the best products and services to our customers.</p>
            </div>

        </>
    );
}

export default About;