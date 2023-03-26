import React, { Component } from 'react';

class Component5 extends Component {
    render() {
        return (
            <div>
                {/* Grid Layout */}
                {/* In any specific row you can add a max of 12 columns in total */}
                {/* A grid will be always inside a container */}

                <div class = "container my-5">
                    <h2>Basic Grid</h2>
                    {/* In this basic grid we will not specify the width of every column, bootstrap will take care of it.
                    i.e. it will specify equal width to all of the columns. */}
                    {/* First we will create a row then we will add columns in it */}
                    <div class = "row">
                        {/* Then we will add columns in it */}
                        <div class = "col">
                            <p class = "p2 bg-primary text-light">Column1</p>
                        </div>
                        <div class = "col">
                            <p class = "p2 bg-primary text-light">Column2</p>
                        </div>
                        <div class = "col">
                            <p class = "p2 bg-primary text-light">Column2</p>
                        </div>

                    </div>
                </div>

                <div class = "container my-5">
                    <h2>Column Widths</h2>
                    {/* In this grid we will assign the width sizes of the columns */}
                    {/* First we will create a row then we will add columns in it */}
                    <div class = "row">
                        {/* Then we will add columns in it */}
                        {/* All the column widths should add up to 12. */}
                        {/* 6+3+3 in this case = 12 */}
                        <div class = "col-6">
                            <p class = "p2 bg-primary text-light">Column1</p>
                        </div>
                        <div class = "col-3">
                            <p class = "p2 bg-primary text-light">Column2</p>
                        </div>
                        <div class = "col-3">
                            <p class = "p2 bg-primary text-light">Column2</p>
                        </div>

                    </div>
                </div>

                <div class = "container my-5">
                    <h2>Responsive Column Grid</h2>
                    {/* In this we are making the grid responsive to the screen sizes, i.e. for x-small screens
                    default behaviour will be there (equal sizes for all the columns) and for small and large, we have defined the behaviour */}
                    {/* First we will create a row then we will add columns in it */}
                    <div class = "row">
                        {/* Then we will add columns in it */}
                        {/* Still all the screens should add upto 12 */}
                        <div class = "col-sm-4 col-lg-6">
                            <p class = "p2 bg-primary text-light">Column1</p>
                        </div>
                        <div class = "col-sm-4 col-lg-3">
                            <p class = "p2 bg-primary text-light">Column2</p>
                        </div>
                        <div class = "col-sm-4 col-lg-3">
                            <p class = "p2 bg-primary text-light">Column2</p>
                        </div>

                    </div>
                </div>


                <div class = "container my-5">
                    <h2>Justifying Columns</h2>
                    {/* Now what if I only have 3 columns in total and I dont want to spred them out to the whole screen
                    i.e. I don't want them to add up to 12 */}
                    {/* Then we will justify the row */}
                    <div class = "row justify-content-center">
                    {/* You can justify them according to the need
                    <div class = "row justify-content-between">
                    <div class = "row justify-content-left">
                    <div class = "row justify-content-right">     */}
                        <div class = "col-md-3">
                            <p class = "p2 bg-primary text-light">Column1</p>
                        </div>
                        <div class = "col-md-3">
                            <p class = "p2 bg-primary text-light">Column2</p>
                        </div>
                        <div class = "col-md-3">
                            <p class = "p2 bg-primary text-light">Column2</p>
                        </div>

                    </div>
                </div>   
            </div>
        );
    }
}

export default Component5;