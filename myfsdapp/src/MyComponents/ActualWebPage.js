import React from 'react';
import './ActualWebPage.css'
import ImgSource from './865098.jpg'

function ActualWebPage(props) {
    return (
        <div>
            
            {/* Navbar of the main page */}
            {/* "navbar-expand-md" means expand the full navbar for medium and greater than medium screens. */}
            <nav className = "navbar navbar-expand-md navbar-light">
                <div className="container-xxl">
                    <a href="#intro" className = "navbar-brand">
                        <span className = "fw-bold text-secondary">
                            My Own Sample Webiste
                        </span>
                    </a>

                    {/* Toggle button for mobile nav */}
                    {/* On adding data-bs-toggle="collapse" and a data-bs-target to the element we can automatically assign control of one or more collapsible elements */}
                    {/* The aria-controls attribute identifies the element (or elements) whose contents or presence are controlled by the element on which the attribute is set, 
                    regardless of what type of interaction initiates the impacted behavior. */}
                    {/* The aria-expanded attribute is set on an element to indicate if a control is expanded or collapsed, and whether or not the controlled elements are displayed or hidden. */}
                    {/* The aria-label should be used to provide a text alternative to an element that has no visible text on the screen. */}
                    <button className = "navbar-toggler" type = "button" data-bs-toggle = "collapse"
                    data-bs-target = "#main-nav" aria-controls = "main-nav" aria-expanded = "false"
                    aria-label = "Toggle navigation">
                        <span className = "navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar Links */}
                    <div className = "collapse navbar-collapse justify-content-end align center" id = "main-nav">
                        <ul className="navbar-nav">
                            <li className = "nav-item">
                                <a href = "#topics" className = "nav-link">About The Book</a>
                            </li>
                            <li className = "nav-item">
                                <a href = "#reviews" className = "nav-link">Reviews</a>
                            </li>
                            <li className = "nav-item">
                                <a href = "#ContactUs" className = "nav-link">Contact Us</a>
                            </li>
                            <li className = "nav-item d-md-none">
                                <a href = "#Pricing" className = "nav-link">Pricing</a>
                            </li>
                            <li className = "nav-item ms-2 d-none d-md-inline">
                                <a href = "#BuyNow" className = "btn btn-secondary">Buy Now</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>    

            {/* Main Image and intro text */}
            <section id = "intro">
                <div className="container-lg">
                    <div className = "row justify-content-center align-items-center">
                    {/* "justify-content-center" will align all the columns inside the row in conter in x-axis
                    "align-items-center" will align all the columns inside the row in center in y-axis */}
                        <div className = "col-md-5 text-center text-md-start">
                            <h1>
                                <div className="display-2">Black-Belt</div>
                                <div className="display-5 text-muted">Your Coding Skills</div>
                            </h1>
                            <p className="lead my-4 text-muted">This is a dummy text, add whatever you want to add. This is a dummy text, add whatever you want to add. </p>
                            <a href="#pricing" className = "btn btn-secondary btn-lg">Buy Now</a>
                        </div>
                        <div className = "col-md-5 text-center d-none d-md-block">
                        {/* "d-none d-md-block" This basically means theat when the screen is lesser then medium, don't
                        show the div. And when its at medium or above show the image. */}
                            {/* Class img-fluid will fit the image in its parent's div with 100% width
                            and here the parent div have 5 columns so image will take 5 columns */}
                            <img className="img-fluid" src={ImgSource} alt="Dummy Image"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ActualWebPage;