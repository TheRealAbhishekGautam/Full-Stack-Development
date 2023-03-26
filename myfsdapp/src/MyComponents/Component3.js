import React, { Component } from 'react';

class Component3 extends Component {
    render() {
        return (
            <div>
                {/* Utility Classes, used to do some additional formatting */}
                {/* Margin and Padding */}
                <div class = "bg-primary m-1 p-1">Hi, we are inside the div tag</div>
                <div class = "bg-warning m-5 p-5">Hi, we are inside the div tag</div>
                {/* m is used to give the margins and the range varies from 1 to 5, same goes for the Padding */}
                {/* Margin and Padding will be applied in all the directions */}

                {/* If we want to apply the customized margin and padding in x and y directions then */}
                <div class = "bg-warning mx-5 py-1">Hi, we are inside the div tag</div>

                {/* If we want to apply the customized margin and padding in all the directions then */}
                <div class = "bg-warning mt-5 mb-5 ms-5 me-5 ps-1 pe-1 pt-1 pb-1">Hi, we are inside the div tag</div>
                {/* b-> bottom, t -> top, s -> start, e -> end */}

                {/* Borders */}
                <div class = "m-2 p-2 border">Hi we are inside the div tag and we are testing the borders</div>
                <div class = "m-2 p-2 border-top border-end">Hi we are inside the div tag and we are testing the border directions</div>
                <div class = "m-2 p-2 border-start border-success">Hi we are inside the div tag and we are testing the border color</div>
                <div class = "m-2 p-2 border-start border-success border-5">Hi we are inside the div tag and we are testing the border thickness</div>
                {/* Border thickness also ranges from 1-5 */}
                <div class = "m-2 p-2 rounded border border-success border-5">Hi we are inside the div tag and we are testing the border roundness</div>
                {/* If we want to increase the roundness of the border then use rounded-pill */}
                <div class = "m-2 p-2 rounded-pill border border-success border-5">Hi we are inside the div tag and we are testing the extreme border roundness</div>
            
                {/* Box Shadow */}
                <div class = "m-3 p-3 shadow-sm">Element with the small shadow</div>
                <div class = "m-3 p-3 shadow-lg">Element with the large shadow</div>
                {/* Medium is by default i.e. just add shadow */}

                {/* Font Weight */}
                <p>Normal text</p>
                <p class = "fw-bold">Not - Normal Text</p>
                <p class = "fw-bolder">Not - Normal Text</p>
                <p class = "fw-light">Not - Normal Text</p>
                {/* fst is font style */}
                <p class = "fst-italic">Not - Normal Text</p>
                <p class = "fst-italic fw-light">Not - Normal Text</p>
                

            </div>
        );
    }
}

export default Component3;