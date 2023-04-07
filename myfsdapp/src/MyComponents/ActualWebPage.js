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
                                <a href = "#pricing" className = "nav-link">Pricing</a>
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
                            {/* "alt" basically means alternative information, if for any reason the image is not shown on the webpage,
                            this text will be shown instead */}
                            <img className="img-fluid" src={ImgSource} alt="Dummy Image"/>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Plans implemented using cards */}
            <section id = "pricing" className="bg-light mt-5">
                <div className="container-lg">
                    <div className = "text-center">
                        <h2>Pricing Plans</h2>
                        <p className = "lead text-muted">Choose a pricing option</p>
                    </div>
                    <div className = "row my-5 align-items-center justify-content-center g-0">

                        {/* "g-n" is used to give the gap between all the columns inside the row, 0<=n<=5 
                        g-0 means no gaps in-between all the columns/cards*/}
                        {/* There are a lot of variety of cards available in bootstrap, just go to the website and
                        choose what you want and apply the same. */}

                        <div className = "col-8 col-lg-4 col-xl-3">
                            <div className = "card border-0">
                                <div className = "card-body text-center py-4">
                                    <h4 className = "card-title">Starter Edition</h4>
                                    <p className = "lead card-subtitle">Download only</p>
                                    <p className = "display-5 my-4 text-primary fw-bold">Rs. 10,000</p>
                                    <p className = "card-text mx-5 text-muted d-none d-lg-block">
                                        This is a dummy text. This is a dummy text. This is a dummy text. 
                                        This is a dummy text. This is a dummy text. This is a dummy text. 
                                    </p>
                                    <a href="#" className = "btn btn-outline-primary btn-lg mt-3">Buy Now</a>
                                </div>
                            </div>
                        </div>

                        <div className = "col-9 col-lg-4">
                            <div className = "card border-primary border-2">
                                <div className = "card-header text-center text-primary"> Most Popular</div>
                                <div className = "card-body text-center py-5">
                                    <h4 className = "card-title">Complete Edition</h4>
                                    <p className = "lead card-subtitle">Download and regular updates</p>
                                    <p className = "display-4 my-4 text-primary fw-bold">Rs. 20,000</p>
                                    <p className = "card-text mx-5 text-muted d-none d-lg-block">
                                        This is a dummy text. This is a dummy text. This is a dummy text. 
                                        This is a dummy text. This is a dummy text. This is a dummy text. 
                                    </p>
                                    <a href="#" className = "btn btn-outline-primary btn-lg mt-3">Buy Now</a>
                                </div>
                            </div>
                        </div>
                        
                        <div className = "col-8 col-lg-4 col-xl-3">
                            <div className = "card border-0">
                                <div className = "card-body text-center py-4">
                                    <h4 className = "card-title">Ultimate Edition</h4>
                                    <p className = "lead card-subtitle">Download, updates, suggestions</p>
                                    <p className = "display-5 my-4 text-primary fw-bold">Rs. 25,000</p>
                                    <p className = "card-text mx-5 text-muted d-none d-lg-block">
                                        This is a dummy text. This is a dummy text. This is a dummy text. 
                                        This is a dummy text. This is a dummy text. This is a dummy text. 
                                    </p>
                                    <a href="#" className = "btn btn-outline-primary btn-lg mt-3">Buy Now</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Topics at a glance using Accordions */}
            <section id = "topics">
                <div className = "container-md">
                    <div className = "text-center">
                        <h2>Inside the Book</h2>
                        <p className = "lead text-muted">A quick glane at the topics that you will learn</p>
                    </div>

                    <div className = "row my-5 g-5 justify-content-around align-items-center">
                        <div className = "col-6 col-lg-4">
                            <img className="img-fluid" src={ImgSource} alt="DummyImage2"/>
                        </div>

                        {/* Accordion Implemwntation */}
                        <div className = "col-lg-4">
                            
                            {/* Situation - One tab is expanded and all others are collapsed. Now when you click on other to expand it :-
                            Two senarios are there - The already expanded one should be still be expanded when we expand another one
                            Or the previous one should be collapsed when we tap on another one.
                            Just add "data-bs-parent", if this will be there, only one tab will be expanded in the accordian at a time, 
                            otherwise all can be expanded togather. */}
                            <div className = "accordion" id = "chapters">

                                <div className="accordion-item">
                                    <h2 className = "accordion-header" id = "heading-1">
                                        <button className = "accordion-button" type = "button" data-bs-toggle = "collapse" 
                                            data-bs-target = "#chapter-1" aria-expanded = "true" aria-controls = "chapter-1">
                                            Chapter 1 - Your first web page 
                                        </button>
                                    </h2>
                                    {/* "show" is added to tell that this will be by-default opened/expanded inside the accordion */}
                                    {/* "data-bs-parent" is used to tell that this belongs to the same accordion */}
                                    <div id = "chapter-1" className = "accordion-collapse collapse show"
                                        aria-labelledby = "heading-1" data-bs-parent = "#chapters">
                                        <div className = "accordion-body">
                                            <p>This is a Dummy text This is a Dummy text. This is a Dummy text. This is a Dummy text. 
                                                This is a Dummy text. This is a Dummy text. This is a Dummy text. 
                                                This is a Dummy text. This is a Dummy text. This is a Dummy text. This is a Dummy text
                                            </p>
                                            <p>This is a Dummy text This is a Dummy text. This is a Dummy text. This is a Dummy text. 
                                                This is a Dummy text. This is a Dummy text. This is a Dummy text. 
                                                This is a Dummy text. This is a Dummy text. This is a Dummy text. This is a Dummy text
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className = "accordion-header" id = "heading-2">
                                        <button className = "accordion-button collapsed" type = "button" data-bs-toggle = "collapse" 
                                            data-bs-target = "#chapter-2" aria-expanded = "false" aria-controls = "chapter-2">
                                            Chapter 2 - Dummy Heaading 
                                        </button>
                                    </h2>
                                    <div id = "chapter-2" className = "accordion-collapse collapse"
                                        aria-labelledby = "heading-2" data-bs-parent = "#chapters">
                                        <div className = "accordion-body">
                                            <p>This is a Dummy text This is a Dummy text. This is a Dummy text. This is a Dummy text. 
                                                This is a Dummy text. This is a Dummy text. This is a Dummy text. 
                                                This is a Dummy text. This is a Dummy text. This is a Dummy text. This is a Dummy text
                                            </p>
                                            <p>This is a Dummy text This is a Dummy text. This is a Dummy text. This is a Dummy text. 
                                                This is a Dummy text. This is a Dummy text. This is a Dummy text. 
                                                This is a Dummy text. This is a Dummy text. This is a Dummy text. This is a Dummy text
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className = "accordion-header" id = "heading-3">
                                        <button className = "accordion-button collapsed" type = "button" data-bs-toggle = "collapse" 
                                            data-bs-target = "#chapter-3" aria-expanded = "false" aria-controls = "chapter-3">
                                            Chapter 3 - Your third web page 
                                        </button>
                                    </h2>
                                    <div id = "chapter-3" className = "accordion-collapse collapse"
                                        aria-labelledby = "heading-3" data-bs-parent = "#chapters">
                                        <div className = "accordion-body">
                                            <p>This is a Dummy text This is a Dummy text. This is a Dummy text. This is a Dummy text. 
                                                This is a Dummy text. This is a Dummy text. This is a Dummy text. 
                                                This is a Dummy text. This is a Dummy text. This is a Dummy text. This is a Dummy text
                                            </p>
                                            <p>This is a Dummy text This is a Dummy text. This is a Dummy text. This is a Dummy text. 
                                                This is a Dummy text. This is a Dummy text. This is a Dummy text. 
                                                This is a Dummy text. This is a Dummy text. This is a Dummy text. This is a Dummy text
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className = "accordion-header" id = "heading-4">
                                        <button className = "accordion-button collapsed" type = "button" data-bs-toggle = "collapse" 
                                            data-bs-target = "#chapter-4" aria-expanded = "false" aria-controls = "chapter-4">
                                            Chapter 4 - Your first web page 
                                        </button>
                                    </h2>
                                    <div id = "chapter-4" className = "accordion-collapse collapse"
                                        aria-labelledby = "heading-4" data-bs-parent = "#chapters">
                                        <div className = "accordion-body">
                                            <p>This is a Dummy text This is a Dummy text. This is a Dummy text. This is a Dummy text. 
                                                This is a Dummy text. This is a Dummy text. This is a Dummy text. 
                                                This is a Dummy text. This is a Dummy text. This is a Dummy text. This is a Dummy text
                                            </p>
                                            <p>This is a Dummy text This is a Dummy text. This is a Dummy text. This is a Dummy text. 
                                                This is a Dummy text. This is a Dummy text. This is a Dummy text. 
                                                This is a Dummy text. This is a Dummy text. This is a Dummy text. This is a Dummy text
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className = "accordion-header" id = "heading-5">
                                        <button className = "accordion-button collapsed" type = "button" data-bs-toggle = "collapse" 
                                            data-bs-target = "#chapter-5" aria-expanded = "false" aria-controls = "chapter-5">
                                            Chapter 5 - Your first web page 
                                        </button>
                                    </h2>
                                    <div id = "chapter-5" className = "accordion-collapse collapse"
                                        aria-labelledby = "heading-5" data-bs-parent = "#chapters">
                                        <div className = "accordion-body">
                                            <p>This is a Dummy text This is a Dummy text. This is a Dummy text. This is a Dummy text. 
                                                This is a Dummy text. This is a Dummy text. This is a Dummy text. 
                                                This is a Dummy text. This is a Dummy text. This is a Dummy text. This is a Dummy text
                                            </p>
                                            <p>This is a Dummy text This is a Dummy text. This is a Dummy text. This is a Dummy text. 
                                                This is a Dummy text. This is a Dummy text. This is a Dummy text. 
                                                This is a Dummy text. This is a Dummy text. This is a Dummy text. This is a Dummy text
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            
        </div>
    );
}

export default ActualWebPage;