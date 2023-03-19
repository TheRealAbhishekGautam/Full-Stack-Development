import React from 'react';

const Component1 = () => {
    return (
        <div>
            {/* Chapter-1 */}

            {/* Headings */}
            <h1>Hello I'm Abhishek Gautam</h1>
            <h2>Heading 2</h2>
            <h1 class = "h3">its actually h1 but treated like h3</h1>

            {/* Display Headings */}
            {/* Looks a bit nicer then the regular headings */}
            <h1 class="display-1">Display Headings</h1>
            <h1 class="display-2">Display Headings</h1>
            <h1 class="display-4">Display Headings</h1>
            <h1 class="display-6">Display Headings</h1>
            {/* These class names can be applieed to any tags not just heading tags. */}
            <p class = "display-1">Paragraph tag with display-1 class name</p>

            {/* Lead Text and Alignment */}
            <p>Regular text inside the paragraph tag</p>
            <p class = "lead">Text inside the paragraph tag with lead class, very helpful in writing articles</p>
            <p class = "lead text-end">Alignment Right</p>
            <p class = "lead text-center">Alignment Center</p>

            {/* Text Decoration and Font Weights */}
            <p class = "text-decoration-underline">Underlined Text</p>
            <p class = "text-decoration-line-through">Line through the Text</p>
            <p class = "fw-bold">Bold Text</p>
            <small>This is smaller text then the regular paragraph text</small>

            {/* Text Colors */}
            {/* There are some predefined colors in bootstrap like primary(blue), secondary(grey), info(sky-blue) etc. */}
            {/* We can directly apply these colors to the text or Backgrounds, we can even change these colors like we can make primary as purple */}
            <p class = "text-primary">Primary Color</p>
            <p class = "text-secondary">Secondary Color</p>
            <p class = "text-info">Info Color</p>
            <p class = "text-warning">Warning Color</p>
            <p class = "text-success">Success Color</p>
            <p class = "text-danger">Danger Color</p>
            <p class = "text-muted">Muted Color</p>

            {/* Background Colors */}
            <p class = "text-white bg-primary">White text on primary bg</p>
            <p class = "text-white bg-secondary">White text on secondary bg</p>
            <p class = "text-light bg-danger">White text on danger bg</p>
            <p class = "text-light bg-warning">White text on warning bg</p>
        </div>
    );
};

export default Component1;