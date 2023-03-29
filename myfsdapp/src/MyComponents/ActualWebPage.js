import React from 'react';
import './ActualWebPage.css'
import ImgSource from './865098.jpg'

function ActualWebPage(props) {
    return (
        <div>

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