import React, { Component } from 'react';

class Component2 extends Component {
    render() {
        return (
            <div>
                {/* Chapter - 2 */}
                {/* Buttons */}

                <h2>Basic Button</h2>
                <button class = "btn btn-primary">Primary Button</button>
                <button class = "btn btn-secondary">Secondary Button</button>

                <h2>Anchor tag as a Button</h2>
                {/* We can use these class names inside the anchor tag also */}
                <a href='#' class = "btn btn-info">Anchor tag as a Button</a>
                <a href='#' class = "btn btn-success">Anchor tag as a Button</a>

                <h2>Button Sizes</h2>
                {/* By default the size of the button is medium */}
                <button class = "btn btn-lg btn-warning">Large button Warning</button>
                <button class = "btn btn-sm btn-warning">Small button Warning</button>
                
                <h2>Button Styles</h2>
                <button class = "btn btn-outline-primary">Button Outlined Primary</button>
                <button class = "btn btn-outline-secondary btn-lg">Large Button Outlined Secondary</button>

                <h2>Button Groups</h2>
                {/* Used when we need a bunch of buttons togather */}
                {/* All the buttons will be in the same div */}
                <div class = "btn-group">
                <a href = "#" class = "btn btn-primary">Button 1</a>
                <a href = "#" class = "btn btn-secondary">Button 2</a>
                <a href = "#" class = "btn btn-warning">Button 3</a>
                <a href = "#" class = "btn btn-success">Button 4</a>
                </div>
            
            </div>
        );
    }
}

export default Component2;